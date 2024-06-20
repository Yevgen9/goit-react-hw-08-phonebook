import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",

  // reducers: {
  //   setFilter: (_, { payload }) => payload,
  // },

  reducers: {
    setFilter(state, { payload }) {
      return (state = payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const { reducer: filterReducer } = filterSlice;
