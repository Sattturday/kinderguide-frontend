import React, { useState, useRef } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import './Sort.scss';

export function Sort() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('name');
  const sortRef = useRef(null);

  useClickOutside(sortRef, () => {
    if (isActive) setTimeout(() => setIsActive(false), 200);
  });

  const onClickNavTab = () => {
    setIsActive(!isActive);
  };

  const onClickSortHandler = (e) => {
    setSelected(e.target.id);
  };

  return (
    <div className='sort'>
      <div className={`sort-wrapper ${isActive ? 'sort-wrapper_active' : ''}`}>
        <button className='sort__button' type='button' onClick={onClickNavTab}>
          Сортировать
        </button>
        <button
          className='sort__button-arrow'
          type='button'
          aria-label='sort'
          onClick={onClickNavTab}
        />
      </div>
      <ul
        ref={sortRef}
        className={`sort-list ${isActive ? 'sort-list__active' : ''}`}
      >
        <li className='sort-list__item'>
          <button
            id='name'
            type='button'
            className={`sort-list__button ${
              selected === 'name' ? 'sort-list__button_selected' : ''
            }`}
            onClick={onClickSortHandler}
          >
            По названию
          </button>
        </li>
        <li className='sort-list__item'>
          <button
            id='cost'
            type='button'
            className={`sort-list__button ${
              selected === 'cost' ? 'sort-list__button_selected' : ''
            }`}
            onClick={onClickSortHandler}
          >
            По стоимости
          </button>
        </li>
        <li className='sort-list__item'>
          <button
            id='feedback'
            type='button'
            className={`sort-list__button ${
              selected === 'feedback' ? 'sort-list__button_selected' : ''
            }`}
            onClick={onClickSortHandler}
          >
            По отзывам
          </button>
        </li>
        <li className='sort-list__item'>
          <button
            id='rate'
            type='button'
            className={`sort-list__button ${
              selected === 'rate' ? 'sort-list__button_selected' : ''
            }`}
            onClick={onClickSortHandler}
          >
            По рейтингу
          </button>
        </li>
      </ul>
    </div>
  );
}
