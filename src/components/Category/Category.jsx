import { Link, useNavigate } from "react-router-dom";

const Category = ({ cate }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full h-44 object-cover" src={cate.url} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark-text-white">{cate.title}</h5>
        <p>{cate.marks}</p>
        <p className="mb-3 font-normal text-gray-700 dark-text-gray-400">{cate.description}</p>
        <div className="flex gap-4">
          <Link to={`/TotalassinmentUpdate/${cate._id}`}>
            <button className="btn btn-link bg-white">Update</button>
          </Link>
          <button
            className="btn btn-outline btn-warning"
            onClick={() => {
              navigate(`/TotalassinmentUpdate/${cate._id}`);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
