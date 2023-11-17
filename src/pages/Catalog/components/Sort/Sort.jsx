import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { useClickOutside } from '../../../../hooks/useClickOutside';
import { sortButtons } from '../../../../utils/filterData';
import './Sort.scss';

export function Sort({ sortHandler, sortDirectionHandler }) {
  // Состояние для активности/неактивности панели сортировки
  const [isActive, setIsActive] = useState(false);

  // Получение значения сортировки из хранилища Redux
  const { ordering } = useSelector((state) => state.filter);

  // Создание ссылки на DOM-элемент для определения клика вне области сортировки
  const sortRef = useRef(null);

  // Использование кастомного хука, который определяет клик вне определенной области
  useClickOutside(sortRef, () => {
    if (isActive) setTimeout(() => setIsActive(false), 200);
  });

  // Обработчик клика для открытия/закрытия панели сортировки
  const onClickNavTab = () => {
    setIsActive(!isActive);
  };

  // Обработчик сортировки при выборе опции сортировки
  const onClickSortHandler = (e) => {
    sortHandler(e.target.id);
  };

  return (
    <div className='sort'>
      {/* Контейнер для функционала сортировки */}
      <div className={`sort-wrapper ${isActive ? 'sort-wrapper_active' : ''}`}>
        {/* Кнопка для переключения видимости опций сортировки */}
        <button className='sort__button' type='button' onClick={onClickNavTab}>
          Сортировать
        </button>
        {/* Кнопка для направления сортировки, активирует обработчик сортировки */}
        <button
          className='sort__button-arrow'
          type='button'
          aria-label='sort'
          onClick={sortDirectionHandler}
        />
      </div>
      {/* Список опций сортировки */}
      <ul
        ref={sortRef}
        className={`sort-list ${isActive ? 'sort-list_active' : ''}`}
      >
        {/* Перебор sortButtons для отображения отдельных опций сортировки */}
        {sortButtons.map((button) => {
          return (
            <li className='sort-list__item' key={button.id}>
              {/* Кнопка, представляющая каждую опцию сортировки */}
              <button
                id={button.id}
                type='button'
                className={`sort-list__button ${
                  ordering === button.id ? 'sort-list__button_selected' : ''
                }`}
                onClick={onClickSortHandler}
              >
                {button.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
