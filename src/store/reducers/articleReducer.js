import { createSlice } from "@reduxjs/toolkit";
import {
  fetchArticlesAsync,
  setFilterSource,
  fetchArticlesSourcesAsync,
} from "../actions/articleActions";

const initialState = {
  articles: [],
  loading: false,
  error: null,
  filterSource: "",
  sources: [],
  noOfResults: 0,
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesAsync.pending, (state) => {
        // Update loading state and reset error
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticlesAsync.fulfilled, (state, action) => {
        // Update loading state, set fetched articles and number of results
        state.loading = false;
        state.articles = action.payload.articles;
        state.noOfResults = action.payload.noOfResults;
      })
      .addCase(fetchArticlesAsync.rejected, (state, action) => {
        // Update loading state and set error message
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(setFilterSource, (state, action) => {
        // Update filter source
        state.filterSource = action.payload;
      })
      .addCase(fetchArticlesSourcesAsync.pending, (state) => {
        // Update loading state and reset error
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticlesSourcesAsync.fulfilled, (state, action) => {
        // Update loading state and set fetched sources
        state.loading = false;
        state.sources = action.payload;
      })
      .addCase(fetchArticlesSourcesAsync.rejected, (state, action) => {
        // Update loading state and set error message
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default articleSlice.reducer;
