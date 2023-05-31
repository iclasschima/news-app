import { createSlice } from "@reduxjs/toolkit";
import {
  fetchArticlesAsync,
  setFilterSource,
  fetchArticlesSourcesAync,
} from "../actions/articleActions";

const initialState = {
  articles: [],
  loading: false,
  error: null,
  filterSource: "",
  sources: [],
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
      })
      .addCase(fetchArticlesSourcesAync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticlesSourcesAync.fulfilled, (state, action) => {
        state.loading = false;
        state.sources = action.payload;
      })
      .addCase(fetchArticlesSourcesAync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default articleSlice.reducer;
