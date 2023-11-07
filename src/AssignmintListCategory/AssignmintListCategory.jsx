import { useLoaderData } from "react-router-dom";
import Category from "../components/Category/Category";

const AssignmintListCategory = () => {
    const category = useLoaderData();
    console.log(category);

    return (


        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    category?.map(cate => <Category key={cate._id} cate={cate}></Category>)
                }
            </div>
        </>
    );
};

export default AssignmintListCategory;
