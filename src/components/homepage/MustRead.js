import { useSelector } from "react-redux";
import Article from "../Article";

export default function MustRead() {
  const { articles } = useSelector((state) => state.articles);

  return (
    <div className="mt-14">
      <h1 className="text-secondary text-2xl">Must Read</h1>

      <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-4 my-8">
        {articles.slice(6, 10).map((article) => (
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
