import { useDeferredValue, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ShowList } from '../../components/ShowList';
import { buildUrlParams, getFilterItems } from '../../utils/filtersUtils';
import {
  useGetFilteredDataQuery,
  useGetFilteredDataFullQuery,
  useGetAreaFiltersQuery,
  useGetMetroFiltersQuery,
  useGetProfileFiltersQuery,
  useGetClassFiltersQuery,
  useGetLanguageFiltersQuery,
  useGetGroupSizeFiltersQuery,
  useGetWorkingFiltersQuery,
  useGetAgeFiltersQuery,
} from '../../api/filterApi';
import {
  setCategoryFilter,
  setRequestFilter,
  setSortFilter,
  setCheckboxFilter,
  setFilterDefault,
  setObjectFilter,
  setFilterReset,
} from '../../store/filterSlice';

import { FilterList } from './components/FilterList';
import { Sort } from './components/Sort';
import { SearchForm } from './components/SearchForm';
import { Nav } from './components/Nav';
import './Catalog.scss';

export function Catalog() {
  const { filter } = useSelector((state) => state, { noopCheck: 'never' });
  const isResetRef = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false); // Открытие закрытие фильтров

  // Хранение выбранной категории (школы или сады)
  const [selected, setSelected] = useState(filter.category);

  // Управление URL для получения данных с сервера
  const [paramsUrl, setParamsUrl] = useState('');

  // Использование отложенного значения для фильтров, чтобы уменьшить нагрузку на пользовательский интерфейс
  const deferredFilter = useDeferredValue(filter);

  // // Стейты для пагинации
  // const [currentPage, setCurrentPage] = useState(1);
  // const [fetching, setFetching] = useState(false);
  // const [totalCount, setTotalCount] = useState(0);
  // const [list, setList] = useState([]);

  const dispatch = useDispatch();

  // Получение списка всех объектов фильтров
  const { data: workingFilters } = useGetWorkingFiltersQuery();
  const { data: groupSizeFilters } = useGetGroupSizeFiltersQuery();
  const { data: ageFilters } = useGetAgeFiltersQuery();
  const { data: profileFilters } = useGetProfileFiltersQuery();
  const { data: classFilters } = useGetClassFiltersQuery();
  const { data: languageFilters } = useGetLanguageFiltersQuery();
  const { data: areaFilters } = useGetAreaFiltersQuery();
  const { data: metroFilters } = useGetMetroFiltersQuery();

  //   const { data = [], isLoading } = useGetFilteredDataQuery([
  //     filter.category,
  //     paramsUrl,
  //   ]);

  // const { data = [], isLoading } = useGetFilteredDataQuery([
  //   filter.category,
  //   paramsUrl,
  //   //currentPage,
  // ]);

  const { data: fullData = [], isLoading } = useGetFilteredDataFullQuery([
    filter.category,
    paramsUrl,
  ]);

  // useEffect(() => {
  //   setList(data);
  // }, [data]);

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);

  //   return function () {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, []);

  // const scrollHandler = (evt) => {
  //   console.log(list);
  //   setTotalCount(list.count);
  //   if (
  //     evt.target.documentElement.scrollHeight -
  //       (evt.target.documentElement.scrollTop + window.innerHeight) <
  //       100 &&
  //     list.results.length < totalCount
  //   ) {
  //     setFetching(true);
  //     console.log('скролл');
  //     console.log(totalCount);
  //     console.log(data.results.length);
  //   }
  // };

  // Формирование списка фильтров
  const filterItems = getFilterItems(
    selected,
    workingFilters,
    groupSizeFilters,
    ageFilters,
    profileFilters,
    classFilters,
    languageFilters,
    areaFilters,
    metroFilters
  );
  // Обработка изменений фильтра после сброса
  useEffect(() => {
    if (isResetRef.current) {
      updateParamsUrl(filter);
      isResetRef.current = false;
    }
  }, [filter]);

  // Обработка изменений фильтра сортировки
  useEffect(() => {
    updateParamsUrl(filter);
  }, [filter.ordering]);

  const sortHandler = (btnId) => {
    dispatch(setSortFilter(btnId));
  };

  const sortDirectionHandler = (e) => {
    const ordering = filter.ordering.startsWith('-')
      ? filter.ordering.slice(1)
      : `-${filter.ordering}`;

    dispatch(setSortFilter(ordering));
  };

  // Обработчик изменения строки поиска
  const searchHandler = (e) => {
    dispatch(setRequestFilter(e.target.value));
  };

  // Обработчик очистки поля
  const clearSearchField = () => {
    dispatch(setRequestFilter(''));
  };

  // Обработчик переключения между категориями "школы" и "сады"
  const onClickNavHandler = (e) => {
    dispatch(setFilterDefault()); // Сброс всех фильтров
    setSelected(e.target.id); // Сохранение выбранной категории в состоянии
    dispatch(setCategoryFilter(e.target.id)); // Сохранение выбранной категории в хранилище (Redux)
    updateParamsUrl(filter); // Обработка отфильтрованных данных
  };

  // Обработчик изменения флажков (checkbox)
  const checkboxHandler = (key) => {
    dispatch(setCheckboxFilter({ key }));
  };

  // Обработчик изменения флажков (select)
  const selectHandler = (key, value) => {
    dispatch(setObjectFilter({ key, value }));
  };

  // Функция для обработки отфильтрованных данных перед запросом на сервер
  function updateParamsUrl(filters) {
    const paramsUrl = buildUrlParams(filters);
    setParamsUrl(paramsUrl);
  }

  // Обработчик отправки формы с фильтрами
  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateParamsUrl(filter);
  };

  // Обработчик сброса всех фильтров
  const handleReset = () => {
    isResetRef.current = true;
    dispatch(setFilterReset());
  };

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
    console.log('click');
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('page_lock');
    } else {
      document.body.classList.remove('page_lock');
    }
  }, [menuOpen]);

  return (
    <section className='catalog'>
      <div
        className={`catalog__background ${
          (menuOpen && ' catalog__background_active') || ''
        }`}
        onClick={handleMenuClick}
      />
      <div className='wrapper'>
        <Nav selected={selected} onClickNavHandler={onClickNavHandler} />
        <div className={`catalog__wrapper catalog__wrapper_type_${selected}`}>
          <div
            className={`catalog__filter-menu${
              (menuOpen && ' catalog__filter-menu_active') || ''
            }`}
          >
            <FilterList
              handleSubmit={handleSubmit}
              filter={deferredFilter}
              checkboxHandler={checkboxHandler}
              selectHandler={selectHandler}
              handleReset={handleReset}
              filterItems={filterItems}
              onMenuClick={handleMenuClick}
            />
          </div>
          <div className='catalog__grid'>
            <SearchForm
              onChange={searchHandler}
              value={deferredFilter.search}
              onSubmit={handleSubmit}
              onClear={clearSearchField}
            />
            <Sort
              sortHandler={sortHandler}
              sortDirectionHandler={sortDirectionHandler}
            />
            <ShowList
              // data={data ? data.results : []}
              data={fullData ? fullData : []}
              fullData={fullData ? fullData : []}
              selected={selected}
              isLoading={isLoading}
              menuOpen={menuOpen}
              onMenuClick={handleMenuClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
