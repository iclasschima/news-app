import { useSelector } from "react-redux";
import { formattedDate } from "../../utils";

export default function Headline() {
  const { articles } = useSelector((state) => state.articles);

  const selectedArticle = articles.find(
    (article) => article.urlToImage && article.title && article.description
  );

  return (
    <div className="sm:grid-cols-2 grid gap-6 sm:my-20 ">
      <div className="rounded">
        <img
          src={selectedArticle?.urlToImage}
          className="rounded"
          alt={selectedArticle?.title}
        />
      </div>
      <div>
        <span className="text-gray-500 text-sm">
          By {selectedArticle?.author}
          {"     -   "}
          {formattedDate(selectedArticle?.publishedAt)}
        </span>
        <h5 className="mt-1 mb-3 sm:mb-5 text-lg md:text-3xl ">
          {selectedArticle?.title}
        </h5>

        <p>{selectedArticle?.description}</p>
      </div>
    </div>
  );
}
