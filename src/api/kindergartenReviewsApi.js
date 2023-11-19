import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const kindergartenReviewsApi = createApi({
  reducerPath: 'kindergartenReviewsApi',
  tagTypes: ['KindergartenReviews'],
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
    getKindergartenReviews: build.query({
      query: (kindergarten_id) => `kindergartens/${kindergarten_id}/reviews/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'KindergartenReviews', id })),
              { type: 'KindergartenReviews', id: 'LIST' },
            ]
          : [{ type: 'KindergartenReviews', id: 'LIST' }],
    }),

    createKindergartenReview: build.mutation({
      query: ({ kindergarten_id, body }) => ({
        url: `kindergartens/${kindergarten_id}/reviews/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'KindergartenReviews', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetKindergartenReviewsQuery,
  useCreateKindergartenReviewMutation,
} = kindergartenReviewsApi;
