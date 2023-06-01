import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilterSource } from "../../store/actions/articleActions";

export default function Sources() {
  const { sources } = useSelector((state) => state.articles);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="my-20">
      <h1 className="text-secondary text-2xl">Top Sources</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-none lg:grid-flow-col lg:auto-cols-max justify-between my-8">
        {sources.slice(3, 11).map((source) => (
          <span
            key={source.id}
            className="mb-5 cursor-pointer hover:text-primary"
            onClick={() => {
              dispatch(setFilterSource(source.id));
              navigate("/news");
            }}
          >
            {source.name}
          </span>
        ))}
      </div>
    </div>
  );
}
