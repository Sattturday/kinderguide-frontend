import { configureStore } from '@reduxjs/toolkit';

import modalsReducer from './modalsSlice';
import authReducer from './authSlice';
import { authApi } from '../api/authApi';
import { userApi } from '../api/userApi';

export default configureStore({
  reducer: {
    modals: modalsReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});
