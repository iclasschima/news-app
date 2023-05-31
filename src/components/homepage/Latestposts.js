import { useSelector } from "react-redux";
import { formattedDate } from "../../utils";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Article from "../Article";

export default function Latestposts() {
  const { articles } = useSelector((state) => state.articles);

  return (
    <div className="my-20">
      <div className="flex justify-between items-center">
        <h1 className="text-secondary text-2xl">Latest News</h1>
        <span className="text-primary flex items-center gap-2">
          See more <HiOutlineArrowNarrowRight size={18} />
        </span>
      </div>

      <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-4 my-8">
        {articles.slice(3, 7).map((article) => (
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
