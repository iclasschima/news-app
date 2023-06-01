import { useSelector, useDispatch } from "react-redux";
import Article from "../components/Article";
import ArticleSkeleton from "../components/ArticleSkeleton";
import Pagination from "../components/articlespage/Pagination";
import Filteroptions from "../components/articlespage/Filteroptions";
import { useEffect, useState } from "react";
import { fetchArticlesAsync } from "../store/actions/articleActions";

export default function ArticlesPage() {
  const { articles, noOfResults, filterSource, loading } = useSelector(
    (state) => state.articles
  );

  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const fetchArticles = () => {
    const params = {
      source: filterSource,
      page: currentPage,
    };
    dispatch(fetchArticlesAsync(params));
  };

  useEffect(() => {
    fetchArticles();
  }, [currentPage]);

  useEffect(() => {
    currentPage !== 1 ? setCurrentPage(1) : fetchArticles();
  }, [filterSource]);

  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-secondary text-2xl">All News</h1>
        <Filteroptions />
      </div>

      <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-4 my-8">
        {loading
          ? [...Array(8)].map(() => <ArticleSkeleton />)
          : articles.map((article) => (
              <Article
                key={article.title}
                title={article.title}
                urlToImage={article?.urlToImage}
                author={article?.author}
                publishedAt={article?.publishedAt}
                description={article?.description}
                content={article?.content}
              />
            ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.floor(noOfResults / 10)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
