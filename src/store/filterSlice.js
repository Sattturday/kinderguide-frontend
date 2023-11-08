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
    // Меняет направление сортировки
    // setSortDirectionFilter(state) {
    //   state.sortDirection = !state.sortDirection;
    // },
    // Фильтр для установки чекбокса
    setCheckboxFilter(state, action) {
      // Проверяет, содержит ли ключ в массиве определенное значение.
      if (state[action.payload.key].includes(action.payload.value)) {
        return {
          ...state,
          [action.payload.key]: state[action.payload.key].filter(
            (i) => i !== action.payload.value
          ),
        };
      } else {
        return {
          ...state,
          [action.payload.key]: state[action.payload.key].concat(
            action.payload.value
          ),
        };
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
  setPriceFilter,
  setFilterDefault,
  setFilterAllData,
} = filterSlice.actions;

export default filterSlice.reducer; // Экспорт reducer для использования в хранилище
