import React, { useCallback, useEffect, useState } from 'react';
import { Sort } from './components/Sort';
import { INITIAL_FILTER_STATE, NAV_CATEGORY } from '../../utils/filterData';
import './Catalog.scss';
import { FilterList } from './components/FilterList/FilterList';
import { ShowList } from './components/ShowList';
import { itemsData } from './itemsData'; // временные школы
import { SearchForm } from '../../components/SearchForm/SearchForm';

export function Catalog() {
  const [selected, setSelected] = useState('school');
  const [initialCards] = useState(itemsData);
  const [sortedCards, setSortedCards] = useState(itemsData);
  const [filteredValues, setFilteredValues] = useState(INITIAL_FILTER_STATE);

  console.log(filteredValues);

  const onClickNavHandler = (e) => {
    setSelected(e.target.id);
    setFilteredValues((prevState) => ({
      ...prevState,
      category: e.target.id,
    }));
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

  const selectHandler = useCallback((category, item) => {
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
  }, []);

  function rangeHandler(category, value) {
    if (category === 'price') {
      setFilteredValues((prevState) => ({
        ...prevState,
        [category]: { minVal: value.minVal, maxVal: value.maxVal },
      }));
    }
  }

  function sortHandler(btnId) {
    setFilteredValues((prevState) => ({
      ...prevState,
      sort: btnId,
    }));
  }

  function sortDirectionHandler() {
    setFilteredValues((prevState) => ({
      ...prevState,
      sortDirection: !prevState.sortDirection,
    }));
  }

  function searchHandler(e) {
    setFilteredValues((prevState) => ({
      ...prevState,
      request: e.target.value,
    }));
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
          <SearchForm onChange={searchHandler} value={filteredValues.request} />
          <Sort
            cards={initialCards}
            sortHandler={sortHandler}
            sortDirectionHandler={sortDirectionHandler}
          />
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
