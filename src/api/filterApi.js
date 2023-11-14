import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const filterApi = createApi({
  reducerPath: 'filterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    // Определение запроса для получения отфильтрованных данных
    getFilteredData: build.query({
      query: ([category = '', params = '']) =>
        `${category}/${params ? '?' + params : ''}`,
    }),
    // Определение запросов для получения фильтров школ
    getProfileFilters: build.query({
      query: () => 'profile/',
    }),
    getClassFilters: build.query({
      query: () => 'classes/',
    }),
    // Определение запросов для получения фильтров садов
    getWorkingFilters: build.query({
      query: () => 'working_hours/',
    }),
    getGroupSizeFilters: build.query({
      query: () => 'group_size/',
    }),
    getAgeFilters: build.query({
      query: () => 'age_category/',
    }),
    // Определение запросов для получения общих фильтров
    getLanguageFilters: build.query({
      query: () => 'languages/',
    }),
    getAreaFilters: build.query({
      query: () => 'area/',
    }),
    getMetroFilters: build.query({
      query: () => 'underground/',
    }),
  }),
});

export const {
  useGetFilteredDataQuery,
  useGetProfileFiltersQuery,
  useGetClassFiltersQuery,
  useGetWorkingFiltersQuery,
  useGetGroupSizeFiltersQuery,
  useGetAgeFiltersQuery,
  useGetLanguageFiltersQuery,
  useGetAreaFiltersQuery,
  useGetMetroFiltersQuery,
} = filterApi;
