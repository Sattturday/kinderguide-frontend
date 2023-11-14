import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const schoolApi = createApi({
  reducerPath: 'schoolApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Schools'],
  endpoints: (build) => ({
    getSchoolAll: build.query({
      query: () => 'schools/',
      providesTags: ['Schools'],
    }),
    getSchool: build.query({
      query: (school_id) => `schools/${school_id}/`,
      providesTags: ['Schools'],
    }),
    getSchoolFavorites: build.query({
      query: () => ({
        url: 'me/favoriteschools/',
      }),
      providesTags: ['Schools'],
    }),
    addSchoolFavorites: build.mutation({
      query: (school_id) => ({
        url: `schools/${school_id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: ['Schools'],
    }),
    removeSchoolFavorites: build.mutation({
      query: (school_id) => ({
        url: `schools/${school_id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Schools'],
    }),
  }),
});

export const {
  useGetSchoolAllQuery,
  useGetSchoolQuery,
  useGetSchoolFavoritesQuery,
  useAddSchoolFavoritesMutation,
  useRemoveSchoolFavoritesMutation,
} = schoolApi;
