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

const Homepage = lazy(() => import("./pages/Homepage"));
const Articlespage = lazy(() => import("./pages/Articlespage"));

const App = () => {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.articles.loading);
  const error = useSelector((state) => state.articles.error);

  useEffect(() => {
    const params = {
      source: "",
      page: 1,
      limit: 12,
    };
    dispatch(fetchArticlesAsync(params));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchArticlesSourcesAync());
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Suspense>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[70vh] mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/news" element={<Articlespage />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
