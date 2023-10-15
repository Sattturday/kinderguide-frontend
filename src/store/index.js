import { configureStore } from '@reduxjs/toolkit';

import modalsReducer from './modalsSlice';
import { authApi } from '../api/authApi';

export default configureStore({
  reducer: {
    modals: modalsReducer,
    [authApi.reducerPath]: authApi.reducer,
    // [schoolApi.reducerPath]: schoolApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
