import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setPriceFilter } from '../../../../store/filterSlice';
import { debounce } from '../../../../utils/utils';

import './DoubleRange.scss';

export const DoubleRange = React.memo(({ min, max }) => {
  // Получение значения цены из глобального хранилища (Redux Store) и функции dispatch
  const { price } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const range = useRef(null);

  // Функция debounce, откладывающая обновление в течение 300мс
  const debouncedSetPriceFilter = useRef(debounce(dispatch, 300));

  // Callback для изменения цены с использованием debounce
  const setPriceFilterCallback = useCallback(
    (newPrice) => {
      debouncedSetPriceFilter.current(setPriceFilter(newPrice));
    },
    [dispatch, price]
  );

  // Функция, вычисляющая процент значения относительно минимального и максимального
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Функция для обновления положения ползунка на шкале
  const updateRange = useCallback(() => {
    const minPercent = getPercent(price.minVal);
    const maxPercent = getPercent(price.maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [price.minVal, price.maxVal, getPercent]);

  // Запускаем обновление при каждом изменении цены
  useEffect(() => {
    updateRange();
  }, [price.minVal, price.maxVal, updateRange]);

  // Обработчик изменения значений в полях ввода
  const handleInputChange = (event, isMinValue) => {
    const value = Number(event.target.value);
    const newPrice = isMinValue
      ? { ...price, minVal: value > price.maxVal ? price.maxVal : value }
      : { ...price, maxVal: value < price.minVal ? price.minVal : value };
    setPriceFilterCallback(newPrice);
  };

  return (
    <div className='container'>
      {/* Раздел отображения значений ползунков */}
      <div className='values'>
        <div className='values-wrapper'>
          <span className='values-from'>от</span>
          <input
            placeholder='от 1000'
            className='values__left'
            value={price.minVal}
            onChange={(event) => handleInputChange(event, true)}
          />
        </div>
        <div className='values__separator'></div>
        <div className='values-wrapper'>
          <span className='values-to'>до</span>
          <input
            placeholder='до 10 000 000'
            className='values__right'
            value={price.maxVal}
            onChange={(event) => handleInputChange(event, false)}
          />
        </div>
      </div>

      {/* Блок с двумя ползунками и диапазоном значений */}
      <div className='slider'>
        <input
          type='range'
          min={min}
          max={max}
          value={price.minVal}
          onChange={(event) => handleInputChange(event, true)}
          className={`thumb thumb__left ${
            price.minVal > max - 100 ? 'thumb__left_zindex' : ''
          }`}
        />
        <input
          type='range'
          min={min}
          max={max}
          value={price.maxVal}
          onChange={(event) => handleInputChange(event, false)}
          className='thumb thumb__right'
        />
        <div className='slider__track' />
        <div ref={range} className='slider__range' />
      </div>
    </div>
  );
});

// Определение типов для props компонента
DoubleRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

// Значения по умолчанию для props компонента
DoubleRange.defaultProps = {
  min: 0,
  max: 10000000,
};
