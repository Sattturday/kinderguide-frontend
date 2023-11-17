import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

// const BASE_URL = 'https://kinder.acceleratorpracticum.ru/api/v1/';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token');

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (body) => ({
        url: 'auth/signup/',
        method: 'POST',
        body,
      }),
    }),

    login: build.mutation({
      query: (body) => ({
        url: 'auth/signin/',
        method: 'POST',
        body,
      }),
    }),

    resetPas: build.mutation({
      query: (body) => ({
        url: 'auth/reset/',
        method: 'POST',
        body,
      }),
    }),

    confirmResetPas: build.mutation({
      query: (body) => ({
        url: 'auth/reset/confirm/',
        method: 'POST',
        body,
      }),
    }),

    getYandexLink: build.query({
      query: () =>
        `${BASE_URL}auth/o/yandex-oauth2/?redirect_uri=https://kinder.acceleratorpracticum.ru/api/v1/auth/response_social/`,
    }),

    loginWithYandex: build.mutation({
      query: (body) => ({
        url: 'auth/o/yandex-oauth2/',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        fetchOptions: {
          credentials: 'include', // Установите credentials только для этого конкретного запроса
        },
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginMutation,
  useResetPasMutation,
  useConfirmResetPasMutation,
  useGetYandexLinkQuery,
  useLoginWithYandexMutation,
} = authApi;
