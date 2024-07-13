import { blogs } from "../../my_data";
import Button from "../Button";
import CardBlog from "./CardBlog";
const DownBlog = () => {
  return (
    <>
      <div className="grid gap-4 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-10">
        {blogs.map((blog) => {
          return <CardBlog key={blog.id} {...blog} />;
        })}
      </div>
    </>
  );
};
export default DownBlog;
