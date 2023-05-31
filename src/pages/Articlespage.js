import { useSelector } from "react-redux";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Article from "../components/Article";
import { Link } from "react-router-dom";

export default function ArticlesPage() {
  const { articles } = useSelector((state) => state.articles);

  return (
    <div className="my-8">
      <div className="flex justify-between items-center">
        <h1 className="text-secondary text-2xl">All News</h1>
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
    </div>
  );
}
