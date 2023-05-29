import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { fetchArticles } from "../../services/api";

export const fetchArticlesAsync = createAsyncThunk(
  "articles/fetchArticles",
  async (payload) => {
    try {
      const response = await fetchArticles(payload); // Call the API function to fetch articles
      return response.articles; // Return the fetched articles
    } catch (error) {
      throw new Error("Failed to fetch articles"); // Throw an error if the API request fails
    }
  }
);

export const setFilterSource = createAction("articles/setFilterSource");
