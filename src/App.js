import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchArticlesAsync,
  setFilterSource,
} from "./store/actions/articleActions";

const App = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const filterSource = useSelector((state) => state.articles.filterSource);
  const loading = useSelector((state) => state.articles.loading);
  const error = useSelector((state) => state.articles.error);

  useEffect(() => {
    const params = {
      source: filterSource,
      page: 1,
    };
    dispatch(fetchArticlesAsync(params));
  }, [filterSource, dispatch]);

  const handleFilterChange = (event) => {
    dispatch(setFilterSource(event.target.value));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>News Articles</h1>
      <div>
        Filter by source:
        <select value={filterSource} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="cnn">CNN</option>
          <option value="bbc-news">BBC News</option>
        </select>
      </div>
      <ul>
        {articles.map((article) => (
          <li key={article.publishedAt}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>Author: {article.author}</p>
            <p>Published: {article.publishedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
