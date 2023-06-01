import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const fetchArticles = async (params) => {
  const { page, source } = params;
  let url = `https://newsapi.org/v2/top-headlines?language=en&page=${page}&pageSize=10&apiKey=${API_KEY}`;

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
