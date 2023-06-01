import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

// Fetch articles based on the provided parameters
export const fetchArticles = async (params) => {
  const { page, source } = params;
  let url = `https://newsapi.org/v2/top-headlines?language=en&page=${page}&pageSize=10&apiKey=${API_KEY}`;

  // Append the source parameter if it exists
  url += source ? `&sources=${source}` : "";

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    if (error?.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Failed to fetch articles");
  }
};

// Fetch article sources
export const fetchArticlesSources = async () => {
  let url = `https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=${API_KEY}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    if (error?.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Failed to fetch sources");
  }
};
