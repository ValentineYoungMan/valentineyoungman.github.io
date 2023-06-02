import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import dishesSlice from './slices/dishesSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    dishesSlice,
  },
});
