import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerMissions from './missionsSlice';

const store = configureStore({
  reducer: {
    missions: reducerMissions,
  },
  middleware: [thunk, logger],
});

export default store;