import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './DoubleRange.scss';

export const DoubleRange = ({ min, max }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Задает ширину диапазона для уменьшения с левой стороны
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Задает ширину диапазона для уменьшения с правой стороны
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className='container'>
      <div className='values'>
        <input
          placeholder='от 1000'
          className='values__left'
          value={minVal}
          onChange={(event) => {
            if (isNaN(event.target.value)) {
              setMinVal((prev) => prev);
              return;
            }
            const value = Math.min(Number(event.target.value), maxVal);
            setMinVal(value);
            minValRef.current = value;
          }}
        />
        <div className='values__separator'></div>
        <input
          placeholder='до 10 000 000'
          className='values__right'
          value={maxVal}
          onChange={(event) => {
            if (isNaN(event.target.value)) {
              setMaxVal((prev) => prev);
              return;
            }
            const value = Math.max(Number(event.target.value), minVal);
            if (value > max) {
              setMaxVal(max);
              maxValRef.current = max;
              return;
            }
            setMaxVal(value);
            maxValRef.current = value;
          }}
        />
      </div>
      <div className='slider'>
        <input
          type='range'
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal);
            setMinVal(value);
            minValRef.current = value;
          }}
          className='thumb thumb__left'
          style={{ zIndex: minVal > max - 100 && '5' }}
        />
        <input
          type='range'
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className='thumb thumb__right'
        />

        <div className='slider__track' />
        <div ref={range} className='slider__range' />
      </div>
    </div>
  );
};

DoubleRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
