import React, { useState } from 'react';
import { ShowList } from './components/ShowList';
import { Input } from '../../components/common/Input';
import { Sort } from '../../components/common/Sort';
import './Catalog.scss';
import { itemsData } from './itemsData'; // временные школы
import FilterList from '../../components/Filter/FilterList';

const navItems = [
  { name: 'Школы', category: 'school' },
  { name: 'Сады', category: 'garden' },
  { name: 'Курсы', category: 'course' },
];

export function Catalog() {
  const [selected, setSelected] = useState('school');
  const [initialCards, setInitialCards] = useState(itemsData);
  const [sortedCards, setSortedCards] = useState(itemsData);

  const onClickNavHandler = (e) => {
    setSelected(e.target.id);
  };

  return (
    <section className='catalog'>
      <nav className='catalog__nav'>
        {navItems.map((item, index) => {
          return (
            <button
              id={item.category}
              type='button'
              key={index}
              className={`catalog__nav-item ${
                selected !== item.category ? 'catalog__nav-item_selected' : ''
              }`}
              onClick={onClickNavHandler}
            >
              {item.name}
            </button>
          );
        })}
      </nav>
      <div className='search-wrapper'>
        <Input />
        <Sort cards={initialCards} />
      </div>
      <div className='list-wrapper'>
        <FilterList cards={initialCards} />
        <ShowList cards={sortedCards} />
      </div>
    </section>
  );
}
