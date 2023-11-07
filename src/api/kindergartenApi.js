import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const kindergartenApi = createApi({
  reducerPath: 'kindergartenApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getKindergarten: build.query({
      query: (kindergarten_id) => `kindergartens/${kindergarten_id}/`,
    }),
    getKindergartenFavorites: build.query({
      query: () => ({
        url: 'me/kindergartens/',
      }),
    }),
    addKindergartenFavorites: build.mutation({
      query: (kindergarten_id) => ({
        url: `kindergartens/${kindergarten_id}/favorite/`,
        method: 'POST',
      }),
    }),
    removeKindergartenFavorites: build.mutation({
      query: (kindergarten_id) => ({
        url: `kindergartens/${kindergarten_id}/favorite/`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetKindergartenQuery,
  useGetKindergartenFavoritesQuery,
  useAddKindergartenFavoritesMutation,
  useRemoveKindergartenFavoritesMutation,
} = kindergartenApi;
