import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (body) => ({
        url: 'auth/signup',
        method: 'POST',
        body,
      }),
    }),

    login: build.mutation({
      query: (body) => ({
        url: 'auth/signin',
        method: 'POST',
        body,
      }),
    }),

    resetPas: build.mutation({
      query: (body) => ({
        url: 'auth/reset',
        method: 'POST',
        body,
      }),
    }),

    confirmResetPas: build.mutation({
      query: (body) => ({
        url: 'auth/reset/confirm',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginMutation,
  useResetPasMutation,
  useConfirmResetPasMutation,
} = authApi;
