import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const filterSlice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    setFilter(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const { reducer: filterReducer } = filterSlice;
