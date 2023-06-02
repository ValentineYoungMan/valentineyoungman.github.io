import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  sort: {
    name: 'Popularity Descending',
    sortProperty: 'rating',
  },
  categoryId: 0,
  subCategoryIds: [],
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCategory(state, action) {
      state.categoryId = action.payload;
    },

    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchValue, setSort, setCategory, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
