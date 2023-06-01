import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function ErrorPanel() {
  const { error } = useSelector((state) => state.articles);

  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Error: </strong>
      <span className="block sm:inline">{error}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <AiOutlineClose />
      </span>
    </div>
  );
}
