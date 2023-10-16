import { configureStore } from '@reduxjs/toolkit';

import modalsReducer from './modalsSlice';
import { authApi } from '../api/authApi';
import { userApi } from '../api/userApi';
import { schoolApi } from '../api/schoolApi';
import { kindergartenApi } from '../api/kindergartenApi';
import { schoolReviewsApi } from '../api/schoolReviewsApi';
import { kindergartenReviewsApi } from '../api/kindergartenReviewsApi';

export default configureStore({
  reducer: {
    modals: modalsReducer,
    [authApi.reducerPath]: authApi.reducer,
    [schoolApi.reducerPath]: schoolApi.reducer,
    [kindergartenApi.reducerPath]: kindergartenApi.reducer,
    [schoolReviewsApi.reducerPath]: schoolReviewsApi.reducer,
    [kindergartenReviewsApi.reducerPath]: kindergartenReviewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      schoolApi.middleware,
      kindergartenApi.middleware,
      schoolReviewsApi.middleware,
      kindergartenReviewsApi.middleware
    ),
});
