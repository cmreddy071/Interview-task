import { configureStore } from '@reduxjs/toolkit';
import NotrealMenuReducer from './NotrealMenuSlice';
import ResultReducer from './ResultSlice';

export const store = configureStore({
  reducer: {
      features: NotrealMenuReducer,
      results: ResultReducer
  },
})