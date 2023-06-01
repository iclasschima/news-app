import { useLocation, useNavigate } from "react-router-dom";
import { formattedDate } from "../utils";
import { CgArrowLongLeft } from "react-icons/cg";

export default function ArticleDetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="mt-5 mb-12">
      <span
        className="text-primary flex items-center gap-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <CgArrowLongLeft />
        Back
      </span>
      <div className="rounded md:h-[32rem] overflow-hidden my-4">
        <img
          src={state.urlToImage}
          className="md:object-contain object-fill w-full h-full"
          alt={state.title}
        />
      </div>
      <span className="text-gray-500 text-sm">
        By {state.author}
        {" - "}
        {formattedDate(state.publishedAt)}
      </span>
      <h5 className="mt-1 mb-3 text-md md:text-2xl">{state.title}</h5>
      <p className="mb-3">
        <span className="text-gray-500">Desc.: </span>
        {state.description}
      </p>
      <p>{state.content}</p>
    </div>
  );
}
