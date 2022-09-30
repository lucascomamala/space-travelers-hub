import { configureStore } from '@reduxjs/toolkit';
import rockets from './rocketsSlice';

const store = configureStore({
  reducer: {
    rockets,
  },
});

export default store;
