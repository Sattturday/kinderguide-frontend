import { useDeferredValue, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  FILTER_ITEMS_KINDERGARTENS,
  FILTER_ITEMS_SCHOOLS,
  NAV_CATEGORY,
} from '../../utils/filterData';
import { ShowList } from '../../components/ShowList';
import { SearchForm } from './components/SearchForm';
import { useGetFilteredDataQuery } from '../../api/filterApi';
import {
  setCategoryFilter,
  setRequestFilter,
  setSortFilter,
  setSortDirectionFilter,
  setCheckboxFilter,
  setFilterDefault,
  setFilterAllData,
} from '../../store/filterSlice';

import { FilterList } from './components/FilterList/FilterList';
import { Sort } from './components/Sort';
import './Catalog.scss';

export function Catalog() {
  // Получение текущего состояния фильтров через Redux
  const { filter } = useSelector((state) => state, { noopCheck: 'never' });
  // Использование отложенного значения для фильтров, чтобы уменьшить нагрузку на пользовательский интерфейс
  const deferredFilter = useDeferredValue(filter);

  // Хранение выбранной категории (школы или сады)
  const [selected, setSelected] = useState(filter.category);

  // Управление URL и путем для получения данных с сервера
  const [paramsUrl, setParamsUrl] = useState('');
  const path = useLocation().pathname;

  const dispatch = useDispatch();

  // Получение отфильтрованных данных с сервера на основе выбранных фильтров
  const { data = [], isLoading } = useGetFilteredDataQuery([
    filter.category,
    paramsUrl,
  ]);

  // Эффекты React для обработки изменений фильтров, сохранения в localStorage и загрузки сохраненных данных из localStorage при загрузке страницы
  useEffect(() => {
    // Обработка изменений в фильтрах сортировки
    filteredDataHandler(filter);
  }, [filter.ordering]);

  useEffect(() => {
    // Сохранение текущих фильтров в localStorage
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  useEffect(() => {
    // Получение сохраненных данных из localStorage и применение их, если мы находимся на странице "catalog"
    const filterData = JSON.parse(localStorage.getItem('filter'));
    if (path === '/catalog' && filterData) {
      dispatch(setFilterAllData(filterData));
    }
  }, [path]);

  // Обработчик переключения между категориями "школы" и "сады"
  const onClickNavHandler = (e) => {
    dispatch(setFilterDefault()); // Сброс всех фильтров
    setSelected(e.target.id); // Сохранение выбранной категории в состоянии
    dispatch(setCategoryFilter(e.target.id)); // Сохранение выбранной категории в хранилище (Redux)
    filteredDataHandler(filter); // Обработка отфильтрованных данных
  };

  // Обработчик отправки формы с фильтрами
  const handleSubmit = (evt) => {
    evt.preventDefault();
    filteredDataHandler(filter);
  };

  // Обработчик изменения флажков (checkbox)
  const checkboxHandler = (key, value) => {
    dispatch(setCheckboxFilter({ key, value }));
  };

  // Обработчик изменения способа сортировки
  const sortHandler = (btnId) => {
    dispatch(setSortFilter(btnId));
  };

  // Обработчик изменения направления сортировки
  const sortDirectionHandler = () => {
    const ordering =
      filter.ordering.slice(0, 1) === '-'
        ? filter.ordering.slice(1)
        : `-${filter.ordering}`;
    console.log(ordering, filter.ordering.slice(0, 1), `-${filter.ordering}`);
    dispatch(setSortFilter(ordering));
  };

  // Обработчик изменения строки поиска
  const searchHandler = (e) => {
    dispatch(setRequestFilter(e.target.value));
  };

  // Обработчик сброса всех фильтров
  const handleReset = () => {
    dispatch(setFilterDefault());
  };

  // Функция для обработки отфильтрованных данных перед запросом на сервер
  function filteredDataHandler(sort) {
    // Создание нового экземпляра URLSearchParams, который представляет строку параметров URL
    const params = new URLSearchParams();

    // Проходимся по всем ключам объекта sort
    for (const key in sort) {
      // Пропускаем обработку ключа 'category', так как это обозначение категории (школы или сады)
      if (key === 'category') continue;

      // Если значение ключа является булевым типом, добавляем его в параметры URL
      if (typeof sort[key] === 'boolean') {
        params.append(key, sort[key]);
        continue;
      }

      // Если значение ключа не имеет длины (пустое), переходим к следующему ключу
      if (!sort[key].length) continue;

      // Если значение ключа является массивом, добавляем каждый элемент массива в параметры URL
      if (Array.isArray(sort[key])) {
        sort[key].forEach((value) => params.append(key, value));
        continue;
      }

      // Если значение ключа является объектом, перебираем его свойства и добавляем их в параметры URL
      if (typeof sort[key] === 'object') {
        for (const item in sort[key]) {
          params.append(item, sort[key][item]);
        }
        continue;
      }

      // В остальных случаях добавляем значение ключа в параметры URL
      params.append(key, sort[key]);
    }

    // Устанавливаем строку параметров URL в состояние (или в переменную) для дальнейшего использования
    setParamsUrl(params.toString());
  }

  return (
    <section className='catalog'>
      {/* Навигация между категориями: школы и сады */}
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
          {/* Форма поиска */}
          <SearchForm
            onChange={searchHandler}
            value={deferredFilter.request}
            onSubmit={handleSubmit}
          />
          {/* Компонент для сортировки данных */}
          <Sort
            sortHandler={sortHandler}
            sortDirectionHandler={sortDirectionHandler}
          />
        </div>
        {/* Компонент для отображения списка фильтров */}
        <FilterList
          handleSubmit={handleSubmit}
          filter={deferredFilter}
          checkboxHandler={checkboxHandler}
          selectHandler={checkboxHandler} // Возможно, ошибка: должен быть selectHandler
          handleReset={handleReset}
          filterItems={
            selected === 'kindergartens'
              ? FILTER_ITEMS_KINDERGARTENS
              : FILTER_ITEMS_SCHOOLS
          }
        />
        {/* Компонент для отображения списка данных */}
        <ShowList
          data={data ? data.results : []}
          selected={selected}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
}
