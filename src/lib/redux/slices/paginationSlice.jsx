import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  pageSize: 10,
  total: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },

    setTotalItem: (state, action) => {
      state.total = action.payload;
    },
    updateURL: (state) => {
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set("page", state.page);
      queryParams.set("pageSize", state.pageSize);

      const newURL = `${window.location.pathname}?${queryParams.toString()}`;

      window.history.replaceState({}, "", newURL);
    },
  },
});

export const { setPage, setPageSize, setTotalItem, updateURL } =
  paginationSlice.actions;

export default paginationSlice.reducer;
