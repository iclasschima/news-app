import { createSlice } from "@reduxjs/toolkit";
import { fetchArticlesAsync, setFilterSource } from "../actions/articleActions";

const initialState = {
  articles: [],
  loading: false,
  error: null,
  filterSource: "",
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticlesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticlesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(setFilterSource, (state, action) => {
        state.filterSource = action.payload;
      });
  },
});

export default articleSlice.reducer;
