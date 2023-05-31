import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { fetchArticles, fetchArticlesSources } from "../../services/api";

export const fetchArticlesAsync = createAsyncThunk(
  "articles/fetchArticles",
  async (payload) => {
    try {
      const response = await fetchArticles(payload); // Call the API function to fetch articles

      // I had to hardcode 100 as the noOfResults because that is the maximum number of data you can fetch on a developer account, else you will get the error below
      // You have requested too many results. Developer accounts are limited to a max of 100 results. You are trying to request results 96 to 108. Please upgrade to a paid plan if you need more results.
      return {
        articles: response.articles,
        noOfResults: response.totalResults > 100 ? 100 : response.totalResults,
      }; // Return the fetched articles
    } catch (error) {
      throw new Error("Failed to fetch articles"); // Throw an error if the API request fails
    }
  }
);

export const fetchArticlesSourcesAync = createAsyncThunk(
  "articles/fetchArticlesSources",
  async () => {
    try {
      const response = await fetchArticlesSources(); // Call the API function to fetch sources
      return response.sources; // Return the fetched sources
    } catch (error) {
      throw new Error("Failed to fetch sorces"); // Throw an error if the API request fails
    }
  }
);

export const setFilterSource = createAction("articles/setFilterSource");
