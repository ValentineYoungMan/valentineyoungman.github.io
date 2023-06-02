import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDishes = createAsyncThunk('dish/fetchDishesStatus', async (params) => {
  const { sortBy, order, search, category, currentPage } = params;
  const { data } = await axios.get(
    `https://6340692ed1fcddf69cb841b1.mockapi.io/items?page=${currentPage}&limit=16&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
};

export const dishesSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchDishes.pending]: (state, action) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchDishes.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchDishes.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

//export const { setItems } = dishesSlice.actions;

export default dishesSlice.reducer;
