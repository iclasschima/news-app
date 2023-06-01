import { useSelector, useDispatch } from "react-redux";
import { setFilterSource } from "../../store/actions/articleActions";

export default function Filteroptions() {
  const { sources } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const filterSource = useSelector((state) => state.articles.filterSource);
  const handleFilterChange = (event) => {
    dispatch(setFilterSource(event.target.value));
  };

  return (
    <div className="flex gap-5 md:mt-0 mt-4 flex-col md:flex-row">
      <div className="flex items-center">
        <label
          htmlFor="mySelect"
          className="text-gray-700 font-bold mr-2 text-sm"
        >
          Source:
        </label>
        <select
          id="mySelect"
          value={filterSource}
          onChange={handleFilterChange}
          className="bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary text-sm"
        >
          <option value="">All</option>
          {sources.map((source) => (
            <option className="text-sm" value={source.id}>
              {source.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
