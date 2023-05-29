// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: {
//     articles: articlesSlice.reducer,
//   },
// });

// export default store;


// // src/redux/store.js

// import { configureStore } from '@reduxjs/toolkit';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchNewsArticles } from '../services/api';

// // Initial state
// const initialState = {
//   articles: [],
//   loading: false,
//   error: null,
// };

// // Async thunk for fetching news articles
// export const fetchArticles = createAsyncThunk(
//   'articles/fetch',
//   async () => {
//     try {
//       const response = await fetchNewsArticles();
//       return response.data.articles;
//     } catch (error) {
//       throw new Error('Failed to fetch articles');
//     }
//   }
// );

// // Slice for articles
// const articlesSlice = createSlice({
//   name: 'articles',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchArticles.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchArticles.fulfilled, (state, action) => {
//         state.loading = false;
//         state.articles = action.payload;
//       })
//       .addCase(fetchArticles.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// Create the Redux store
import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./reducers/articleReducer";

const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});

export default store;
