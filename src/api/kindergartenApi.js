import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const kindergartenApi = createApi({
  reducerPath: 'kindergartenApi',
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
  tagTypes: ['Kindergartens'],
  endpoints: (build) => ({
    getKindergartenAll: build.query({
      query: () => 'kindergartens/',
      providesTags: ['Kindergartens'],
    }),
    getKindergarten: build.query({
      query: (kindergarten_id) => `kindergartens/${kindergarten_id}/`,
      providesTags: ['Kindergartens'],
    }),
    getKindergartenFavorites: build.query({
      query: () => ({
        url: 'me/favoritekindergartens/',
      }),
      providesTags: ['Kindergartens'],
    }),
    addKindergartenFavorites: build.mutation({
      query: (kindergarten_id) => ({
        url: `kindergartens/${kindergarten_id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: ['Kindergartens'],
    }),
    removeKindergartenFavorites: build.mutation({
      query: (kindergarten_id) => ({
        url: `kindergartens/${kindergarten_id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Kindergartens'],
    }),
  }),
});

export const {
  useGetKindergartenAllQuery,
  useGetKindergartenQuery,
  useGetKindergartenFavoritesQuery,
  useAddKindergartenFavoritesMutation,
  useRemoveKindergartenFavoritesMutation,
} = kindergartenApi;
