import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../redux/TaskSlice';

export const store = configureStore({
  reducer: {
    booksData: booksReducer
  },
});

export default store;

