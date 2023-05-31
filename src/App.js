import { useEffect, Suspense, lazy } from "react";
import "./styles/global.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchArticlesAsync,
  setFilterSource,
  fetchArticlesSourcesAync,
} from "./store/actions/articleActions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Homepage = lazy(() => import("./pages/Homepage"));

const App = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const filterSource = useSelector((state) => state.articles.filterSource);
  const loading = useSelector((state) => state.articles.loading);
  const error = useSelector((state) => state.articles.error);
  const sources = useSelector((state) => state.articles.sources);

  useEffect(() => {
    const params = {
      source: filterSource,
      page: 1,
    };
    dispatch(fetchArticlesAsync(params));
  }, [filterSource, dispatch]);

  useEffect(() => {
    dispatch(fetchArticlesSourcesAync());
  }, []);

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
    <Suspense>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
        {/* <h1>News Articles</h1>
      <div>
        Filter by source:
        <select value={filterSource} onChange={handleFilterChange}>
          <option value="">All</option>
          {sources.map((source) => (
            <option value={source.id}>{source.name}</option>
          ))}
        </select>
      </div>
      <ul className="">
        {articles.map((article) => (
          <li key={article.publishedAt}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>Author: {article.author}</p>
            <p>Published: {article.publishedAt}</p>
          </li>
        ))}
      </ul> */}
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
