import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_FILTER_STATE } from '../utils/filterData';

// Здесь инициализируется начальное состояние фильтра
const initialState = INITIAL_FILTER_STATE;

// Создается срез состояния (slice) для хранения фильтра в Redux Store
const filterSlice = createSlice({
  name: 'filter', // Имя среза состояния
  initialState, // Начальное состояние

  // Объявление редьюсеров (reducers) для обновления состояния
  reducers: {
    // Устанавливает выбранную категорию (например, Школы или Сады)
    setCategoryFilter(state, action) {
      state.category = action.payload;
    },
    // Устанавливает значение текста запроса
    setRequestFilter(state, action) {
      state.search = action.payload;
    },
    // Устанавливает фильтр сортировки
    setSortFilter(state, action) {
      state.ordering = action.payload;
    },
    // Фильтр для установки чекбокса
    setCheckboxFilter(state, action) {
      const { key } = action.payload;

      state[key] = !state[key];
    },
    setObjectFilter(state, action) {
      const { key, value } = action.payload;
      const objIndex = state[key].findIndex((obj) => obj.slug === value.slug);

      state[key] =
        objIndex !== -1
          ? state[key].filter((obj) => obj.slug !== value.slug)
          : [...state[key], value];
    },
    // Устанавливает фильтр цены
    setPriceFilter(state, action) {
      state.price.minVal = Math.max(0, action.payload.minVal);
      state.price.maxVal = Math.max(0, action.payload.maxVal);
    },
    // Возвращает состояние фильтра к начальному состоянию
    setFilterDefault() {
      return initialState;
    },
    // Возвращает состояние фильтра к начальному состоянию, кроме категории
    setFilterReset(state) {
      return { ...initialState, category: state.category };
    },
    // Устанавливает все данные фильтра
    setFilterAllData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

// Экспортируются actions и reducer из filterSlice
export const {
  setCategoryFilter,
  setRequestFilter,
  setSortFilter,
  setSortDirectionFilter,
  setCheckboxFilter,
  setObjectFilter,
  setPriceFilter,
  setFilterDefault,
  setFilterReset,
  setFilterAllData,
} = filterSlice.actions;

export default filterSlice.reducer; // Экспорт reducer для использования в хранилище
