import React, { useState } from 'react';
import { Input } from '../../components/common/Input';
import { Sort } from '../../components/common/Sort';
import { INITIAL_FILTER_STATE, NAV_CATEGORY } from '../../constants/filterData';
import './Catalog.scss';
import { FilterList } from './components/FilterList/FilterList';
import { ShowList } from './components/ShowList';
import { itemsData } from './itemsData'; // временные школы

export function Catalog() {
  const [selected, setSelected] = useState('school');
  const [initialCards] = useState(itemsData);
  const [sortedCards, setSortedCards] = useState(itemsData);
  const [filteredValues, setFilteredValues] = useState(INITIAL_FILTER_STATE);

  const onClickNavHandler = (e) => {
    setSelected(e.target.id);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    //const data = getFilteredData(filteredValues)
    //setSortedCards(data)
  }

  function checkboxHandler(category, item) {
    if (filteredValues[category].includes(item)) {
      setFilteredValues((prevState) => ({
        ...prevState,
        [category]: prevState[category].filter((i) => i !== item),
      }));
    } else {
      setFilteredValues((prevState) => ({
        ...prevState,
        [category]: prevState[category].concat(item),
      }));
    }
  }

  function selectHandler(category, item) {
    if (filteredValues[category].includes(item)) {
      setFilteredValues((prevState) => ({
        ...prevState,
        [category]: prevState[category].filter((i) => i !== item),
      }));
    } else {
      setFilteredValues((prevState) => ({
        ...prevState,
        [category]: prevState[category].concat(item),
      }));
    }
  }

  function rangeHandler(category, value) {
    if (category === 'price') {
      setFilteredValues((prevState) => ({
        ...prevState,
        [category]: { minPrice: value.minVal, maxPrice: value.maxVal },
      }));
    }
  }

  function handleReset() {
    setSortedCards(initialCards);
    setFilteredValues(INITIAL_FILTER_STATE);
  }

  return (
    <section className='catalog'>
      <nav className='catalog__nav'>
        {NAV_CATEGORY.map((item, index) => {
          return (
            <button
              id={item.category}
              type='button'
              key={index}
              className={`catalog__nav-item ${
                selected === item.category ? 'catalog__nav-item_selected' : ''
              }`}
              onClick={onClickNavHandler}
            >
              {item.name}
            </button>
          );
        })}
      </nav>
      <div className='list-wrapper'>
        <div className='search-wrapper'>
          <Input />
          <Sort cards={initialCards} />
        </div>
        <FilterList
          handleSubmit={handleSubmit}
          filter={filteredValues}
          checkboxHandler={checkboxHandler}
          selectHandler={selectHandler}
          rangeHandler={rangeHandler}
          handleReset={handleReset}
        />
        <ShowList cards={sortedCards} />
      </div>
    </section>
  );
}
