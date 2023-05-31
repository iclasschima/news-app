import { useSelector, useDispatch } from "react-redux";
import Article from "../components/Article";
import Pagination from "../components/articlespage/Pagination";
import Filteroptions from "../components/articlespage/Filteroptions";
import { useEffect, useState } from "react";
import { fetchArticlesAsync } from "../store/actions/articleActions";

export default function ArticlesPage() {
  const { articles, noOfResults, filterSource } = useSelector(
    (state) => state.articles
  );
  const [pageLimit, setPageLimit] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const fetchArticles = () => {
    const params = {
      source: filterSource,
      page: currentPage,
      limit: pageLimit,
    };
    dispatch(fetchArticlesAsync(params));
  };

  useEffect(() => {
    fetchArticles();
  }, [currentPage, pageLimit]);

  useEffect(() => {
    currentPage !== 1 ? setCurrentPage(1) : fetchArticles();
  }, [filterSource]);

  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-secondary text-2xl">All News</h1>
        <Filteroptions pageLimit={pageLimit} setPageLimit={setPageLimit} />
      </div>

      <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-4 my-8">
        {articles.map((article) => (
          <Article
            key={article.title}
            title={article.title}
            urlToImage={article?.urlToImage}
            author={article?.author}
            publishedAt={article?.publishedAt}
            description={article?.description}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.floor(noOfResults / 12)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
