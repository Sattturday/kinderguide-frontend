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
      const { key, value } = action.payload;
      // Проверяет, содержит ли ключ в массиве определенное значение.
      if (state[key].includes(value)) {
        state[key] = state[key].filter((i) => i !== value);
      } else {
        state[key].push(value);
      }
    },
    setObjectFilter(state, action) {
      const { key, value } = action.payload;

      const objIndex = state[key].findIndex((obj) => obj.slug === value.slug);

      if (objIndex !== -1) {
        // Уже существует, удаляем
        state[key] = state[key].filter((obj) => obj.slug !== value.slug);
      } else {
        // Не существует, добавляем
        state[key].push(value);
      }
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
  setFilterAllData,
} = filterSlice.actions;

export default filterSlice.reducer; // Экспорт reducer для использования в хранилище
