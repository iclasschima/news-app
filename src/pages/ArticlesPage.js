import { useSelector, useDispatch } from "react-redux";
import Article from "../components/Article";
import ArticleSkeleton from "../components/ArticleSkeleton";
import Pagination from "../components/articlespage/Pagination";
import FilterOptions from "../components/articlespage/FilterOptions";
import { useEffect, useState } from "react";
import { fetchArticlesAsync } from "../store/actions/articleActions";

export default function ArticlesPage() {
  const { articles, noOfResults, filterSource, loading } = useSelector(
    (state) => state.articles
  );

  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  // Fetch articles based on current page and filter source
  const fetchArticles = () => {
    const params = {
      source: filterSource,
      page: currentPage,
    };
    dispatch(fetchArticlesAsync(params));
  };

  useEffect(() => {
    fetchArticles();
  }, [currentPage, filterSource]);

  // Reset to first page when filter source changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filterSource]);

  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-secondary text-2xl">All News</h1>
        <FilterOptions />
      </div>

      <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-4 my-8">
        {loading
          ? // Render article skeletons when loading
            [...Array(8)].map((_, index) => <ArticleSkeleton key={index} />)
          : // Render articles when not loading
            articles.map((article) => (
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
