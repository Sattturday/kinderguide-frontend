import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

// Создание API для выполнения запросов
export const filterApi = createApi({
  // Имя редюсера, который будет создан
  reducerPath: 'filterApi',

  // Установка базового URL для запросов
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  // Определение конечных точек для выполнения запросов
  endpoints: (build) => ({
    getFilteredData: build.query({
      // Определение запроса для получения отфильтрованных данных
      query: ([category = '', params = '']) =>
        // Формирование URL-запроса с учетом переданных параметров
        `${category}${params ? '?' + params : ''}`,
    }),
  }),
});

// Деструктуризация для использования сгенерированного хука запроса
export const { useGetFilteredDataQuery } = filterApi;
