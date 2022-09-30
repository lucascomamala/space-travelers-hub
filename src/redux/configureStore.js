import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerMissions from './missionsSlice';
import rockets from './rocketsSlice';

const store = configureStore({
  reducer: {
    rockets,
    missions: reducerMissions,
  },
  middleware: [thunk, logger],
});

export default store;
