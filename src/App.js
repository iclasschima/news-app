import { useEffect, Suspense, lazy } from "react";
import "./styles/global.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchArticlesAsync,
  fetchArticlesSourcesAync,
} from "./store/actions/articleActions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPanel from "./components/ErrorPanel";

const Homepage = lazy(() => import("./pages/Homepage"));
const Articlespage = lazy(() => import("./pages/ArticlesPage"));
const ArticleDetailsPage = lazy(() => import("./pages/ArticleDetailsPage"));

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.articles.error);

  useEffect(() => {
    const params = {
      source: "",
      page: 1,
      limit: 10,
    };
    dispatch(fetchArticlesAsync(params));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchArticlesSourcesAync());
  }, []);

  if (error) {
    return <ErrorPanel />;
  }

  return (
    <Suspense>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[70vh] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/news/:title" element={<ArticleDetailsPage />} />
            <Route path="/news" element={<Articlespage />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
