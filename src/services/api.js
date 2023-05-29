import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const fetchArticles = async (params) => {
  const { page, source } = params;
  let url = `https://newsapi.org/v2/top-headlines?language=en&page=${page}&apiKey=${API_KEY}`;

  url += source ? `&sources=${source}` : "";

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch articles");
  }
};
