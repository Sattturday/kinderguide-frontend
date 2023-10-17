import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: 'me',
      }),
    }),
    updateUser: build.mutation({
      query: (body) => ({
        url: 'me',
        method: 'PATCH',
        body,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
