import { useSelector } from "react-redux";
import { formattedDate } from "../../utils";

export default function Headline() {
  const { articles, loading } = useSelector((state) => state.articles);

  const selectedArticle = articles.find(
    (article) => article.urlToImage && article.title && article.description
  );

  return (
    <div className="sm:grid-cols-2 grid gap-6 sm:my-20">
      {loading ? (
        <>
          <div className="rounded bg-gray-300 md:h-[20rem] h-[10rem] sm:mb-2"></div>
          <div>
            <div>
              <div className="h-[15px] md:w-[50%] bg-gray-300 rounded mb-2"></div>
              <div className="h-[3rem] md:h-[4rem] bg-gray-300 rounded"></div>
              <div className="hidden md:block md:h-[4rem] bg-gray-300 rounded mt-5"></div>
            </div>
          </div>
        </>
      ) : (
        <>
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
            <h5 className="mt-1 mb-3 sm:mb-5 text-lg md:text-3xl hover:text-primary cursor-pointer">
              {selectedArticle?.title}
            </h5>

            <p>{selectedArticle?.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
