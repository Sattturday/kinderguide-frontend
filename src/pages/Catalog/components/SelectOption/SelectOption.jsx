import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { useClickOutside } from '../../../../hooks/useClickOutside';
import './SelectOption.scss';

export const SelectOption = React.memo(({ onChange, options }) => {
  const { metro } = useSelector((state) => state.filter); // Получаем выбранные опции из Redux

  const [inputValue, setInputValue] = useState(''); // Состояние для текста поиска
  const [searchOption, setSearchOption] = useState([options]); // Состояние для отфильтрованных опций
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия списка опций
  const [highlightedIndex, setHighlightedIndex] = useState(0); // Состояние для выделения опций

  const containerRef = useRef(null); // Ссылка на внешний контейнер компонента для определения кликов вне области

  // Хук, который закрывает список опций при клике вне области компонента
  useClickOutside(containerRef, () => {
    if (isOpen) setTimeout(() => setIsOpen(false), 200); // Закрываем список с небольшой задержкой
  });

  // Функция для фильтрации опций по введенному тексту
  function searchOptions() {
    const searchOpt = options.filter((option) => {
      return option.toLowerCase().includes(inputValue.toLowerCase()); // Фильтруем по вхождению текста в название опции (регистронезависимо)
    });
    setSearchOption(searchOpt); // Обновляем состояние отфильтрованных опций
  }

  // Изменяем список опций при изменении ввода в поле поиска
  useEffect(() => {
    searchOptions();
  }, [inputValue, options]);

  // Функция проверяет, выбрана ли опция в списке
  function isOptionSelected(option) {
    return metro.includes(option);
  }

  // Устанавливаем индекс первой опции при открытии списка
  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  // Возвращаем разметку выпадающего списка и поля ввода
  return (
    <div
      ref={containerRef}
      onClick={(e) => {
        e.stopPropagation(); // Останавливаем всплытие события
        setIsOpen((prev) => !prev); // Открываем/закрываем список при клике
      }}
      tabIndex={0} // Добавляем возможность фокусировки
      className='select'
    >
      <div className='wrapper-value'>
        <span className='value'>
          {/* Выводим выбранные опции и поле ввода для поиска */}
          {metro.map((v, index) => (
            <button
              key={index + Date.now()}
              onClick={(e) => {
                e.stopPropagation(); // Останавливаем всплытие события
                onChange(v); // Выбираем опцию при клике
              }}
              className='option-badge' // Класс для стилизации
            >
              {v} {/* Выводим название опции */}
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
      <ul className={`options ${isOpen ? 'show' : ''}`} tabIndex={1}>
        {/* Выводим список опций */}
        {searchOption.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation(); // Останавливаем всплытие события
              onChange(option); // Выбираем опцию при клике
              setIsOpen(false); // Закрываем список
              setInputValue(''); // Очищаем поле поиска
            }}
            onMouseEnter={() => setHighlightedIndex(index)} // Выделяем опцию при наведении
            key={index + Date.now()} // Уникальный ключ для списка опций
            className={`option ${isOptionSelected(option) ? 'selected' : ''} ${
              index === highlightedIndex ? 'highlighted' : '' // Выделяем активную опцию
            }`}
          >
            {option} {/* Выводим название опции */}
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
