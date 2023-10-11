import { configureStore } from '@reduxjs/toolkit';

import modalsReducer from './modalsSlice';

export default configureStore({
  reducer: {
    modals: modalsReducer,
  },
});
