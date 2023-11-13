import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { useClickOutside } from '../../../../hooks/useClickOutside';
import './SelectOption.scss';

export const SelectOption = React.memo(({ onChange, onRemove, options }) => {
  const { underground } = useSelector((state) => state.filter); // Получаем выбранные опции из Redux

  const [inputValue, setInputValue] = useState(''); // Состояние для текста поиска
  const [searchOption, setSearchOption] = useState(options); // Состояние для отфильтрованных опций
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия списка опций

  const containerRef = useRef(null); // Ссылка на внешний контейнер компонента для определения кликов вне области

  // Хук, который закрывает список опций при клике вне области компонента
  useClickOutside(containerRef, () => {
    if (isOpen) setTimeout(() => setIsOpen(false), 200); // Закрываем список с небольшой задержкой
  });

  // Изменяем список опций при изменении ввода в поле поиска
  useEffect(() => {
    searchOptions();
  }, [inputValue, options]);

  // Функция для фильтрации опций по введенному тексту
  function searchOptions() {
    const searchOpt = options.filter((option) => {
      return option.name.toLowerCase().includes(inputValue.toLowerCase()); // Фильтруем по вхождению текста в название опции (регистронезависимо)
    });
    setSearchOption(searchOpt); // Обновляем состояние отфильтрованных опций
  }

  // Функция проверяет, выбрана ли опция в списке
  function isOptionSelected(optionName) {
    return underground.some((option) => option.name === optionName);
  }

  // Возвращаем разметку выпадающего списка и поля ввода
  return (
    <div
      ref={containerRef}
      onClick={(e) => {
        e.stopPropagation(); // Останавливаем всплытие события
        setIsOpen((prev) => !prev); // Открываем/закрываем список при клике
      }}
      className='select'
    >
      <div className='wrapper-value'>
        <span className='value'>
          {/* Выводим выбранные опции и поле ввода для поиска */}
          {underground.map((selectedOption, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation(); // Останавливаем всплытие события
                onChange(selectedOption); // Удаляем опцию из выбранных
              }}
              className='option-badge'
            >
              {selectedOption.name} {/* Выводим название опции */}
              <span className='remove-btn'>&times;</span>{' '}
              {/* Кнопка удаления опции */}
            </button>
          ))}
          <input
            placeholder='Название станции' // Плейсхолдер для поля ввода
            className='search-value' // Класс для стилизации
            value={inputValue} // Устанавливаем значение поля ввода
            onChange={(e) => setInputValue(e.target.value)} // Обновляем текст поиска при вводе
          />
        </span>
      </div>
      <ul className={`options ${isOpen ? 'show' : ''}`}>
        {/* Выводим список опций */}
        {searchOption.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation(); // Останавливаем всплытие события
              onChange(option); // Выбираем опцию при клике
              setIsOpen(false); // Закрываем список
              setInputValue(''); // Очищаем поле поиска
            }}
            key={index} // Уникальный ключ для списка опций
            className={`option${
              isOptionSelected(option.name) ? ' selected' : ''
            }`}
          >
            {option.name} {/* Выводим название опции */}
          </li>
        ))}
      </ul>
    </div>
  );
});

// Определение типов для props компонента
SelectOption.propTypes = {
  value: PropTypes.array, // Принимаемые значения
  onChange: PropTypes.func, // Функция обработки изменений
  options: PropTypes.array, // Доступные опции
};

// Значения по умолчанию для props компонента
SelectOption.defaultProps = {
  value: ['Новогиреево'], // Значение по умолчанию для выбранных опций
  onChange: undefined, // По умолчанию функция не установлена
  options: [], // Пустой массив опций по умолчанию
};
