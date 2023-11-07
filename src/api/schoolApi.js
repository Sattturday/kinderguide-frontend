import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const schoolApi = createApi({
  reducerPath: 'schoolApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getSchool: build.query({
      query: (school_id) => `schools/${school_id}/`,
    }),
    getSchoolFavorites: build.query({
      query: () => ({
        url: 'me/favoriteschools/',
      }),
    }),
    addSchoolFavorites: build.mutation({
      query: (school_id) => ({
        url: `schools/${school_id}/favorite/`,
        method: 'POST',
      }),
    }),
    removeSchoolFavorites: build.mutation({
      query: (school_id) => ({
        url: `schools/${school_id}/favorite/`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetSchoolQuery,
  useGetSchoolFavoritesQuery,
  useAddSchoolFavoritesMutation,
  useRemoveSchoolFavoritesMutation,
} = schoolApi;
