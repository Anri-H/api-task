import { createSlice } from "@reduxjs/toolkit";
import { getCats, getCategories } from "./API";

const initialState = {
  value: [],
  categories: [],
  page: 1,
  status: "idle",
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    resetPage: (state) => {
      state.value = [];
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getCats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCats.fulfilled, (state, action) => {
        state.value.push(...action.payload);
        state.page++;

        state.status = "idle";
      });
  },
});

export const { resetPage } = catsSlice.actions;

export const selectCats = (state) => state.cats.value;
export const selectCategories = (state) => state.cats.categories;
export const selectPage = (state) => state.cats.page;
export const selectStatus = (state) => state.cats.status;

export default catsSlice.reducer;
