import { formattedDate } from "../utils";

export default function Article({
  urlToImage,
  title,
  publishedAt,
  description,
  author,
}) {
  return (
    <div className="mb-8">
      <div className="rounded h-48 overflow-hidden mb-3">
        <img
          src={urlToImage}
          className="object-cover w-full h-full"
          alt={title}
        />
      </div>
      <div>
        <span className="text-gray-500 text-sm">
          By {author}
          {"  - "}
          {formattedDate(publishedAt)}
        </span>
        <h5 className="mt-1 text-md md:text-md line-clamp-3 sm:h-24 mb-2">
          {title}
        </h5>
        <p className="line-clamp-3 text-sm">{description}</p>
      </div>
    </div>
  );
}
