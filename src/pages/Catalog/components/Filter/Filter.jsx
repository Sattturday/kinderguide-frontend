import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

export function Filter({ title, variant, onClick, children }) {
  // Использование хука состояния для отслеживания состояния открытия фильтра
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Заголовок фильтра с переключателем открытия/закрытия */}
      <div
        className='filter__subtitle-wrapper'
        // Вызов функции обратного вызова для обработки открытия фильтра
        onClick={() => onClick(setIsOpen, isOpen)}
      >
        <h3 className='filter__subtitle'>{title}</h3>
        {/* Стилизованный переключатель открытия/закрытия */}
        <span
          className={`filter__subtitle-caret ${
            isOpen ? 'filter__subtitle-caret_active' : ''
          }`}
        ></span>
      </div>
      {/* Список фильтра с указанным вариантом (checkbox/select) */}
      <ul
        className={`filter__list filter__list_${variant} ${
          isOpen ? `filter__list_${variant}_active` : ''
        }`}
      >
        {/* Дочерние элементы, которые будут отображаться внутри фильтра */}
        {children}
      </ul>
    </>
  );
}

// Задание типов для входных параметров компонента
Filter.propTypes = {
  variant: PropTypes.oneOf(['checkbox', 'select']), // Вариант фильтра: checkbox или select
  title: PropTypes.oneOf([
    // Название фильтра из предложенных
    'Время работы',
    'Размер группы',
    'Развитие',
    'Профиль',
    'Возраст',
    'Иностранные языки',
    'Округ',
    'Метро',
    'Стоимость',
  ]),
  children: PropTypes.node, // Дочерние элементы компонента
  onClick: PropTypes.func, // Функция обратного вызова для обработки событий
};

// Значения по умолчанию для входных параметров компонента
Filter.defaultProps = {
  variant: 'checkbox', // Значение по умолчанию для варианта - checkbox
  title: 'Профиль', // Значение по умолчанию для заголовка фильтра
  children: '', // Нет дочерних элементов по умолчанию
  onClick: undefined, // Функция обратного вызова не определена по умолчанию
};
