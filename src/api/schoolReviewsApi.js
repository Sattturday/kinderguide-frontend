import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const schoolReviewsApi = createApi({
  reducerPath: 'schoolReviewsApi',
  tagTypes: ['SchoolReviews'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token');

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getSchoolReviews: build.query({
      query: (school_id) => `schools/${school_id}/reviews/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'SchoolReviews', id })),
              { type: 'SchoolReviews', id: 'LIST' },
            ]
          : [{ type: 'SchoolReviews', id: 'LIST' }],
    }),

    createSchoolReview: build.mutation({
      query: ({ school_id, body }) => ({
        url: `schools/${school_id}/reviews/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'SchoolReviews', id: 'LIST' }],
    }),
  }),
});

export const { useGetSchoolReviewsQuery, useCreateSchoolReviewMutation } =
  schoolReviewsApi;
