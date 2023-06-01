import { useSelector } from "react-redux";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Article from "../Article";
import { Link } from "react-router-dom";
import ArticleSkeleton from "../ArticleSkeleton";

export default function Latestposts() {
  const { articles, loading } = useSelector((state) => state.articles);

  return (
    <div className="my-20">
      <div className="flex justify-between items-center">
        <h1 className="text-secondary text-2xl">Latest News</h1>
        <Link to="/news" className="text-primary flex items-center gap-2">
          See more <HiOutlineArrowNarrowRight size={18} />
        </Link>
      </div>

      <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-4 my-8">
        {loading
          ? [...Array(4)].map((_, index) => <ArticleSkeleton key={index} />)
          : articles
              .slice(2, 6)
              .map((article) => (
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
    </div>
  );
}
