import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filterApi = createApi({
  reducerPath: 'filterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinder.acceleratorpracticum.ru/api/v1/',
  }),
  endpoints: (build) => ({
    getFilteredData: build.query({
      query: ([category = '', params = '']) =>
        `${category}${params ? '?' + params : ''}`,
    }),
  }),
});

export const { useGetFilteredDataQuery } = filterApi;
