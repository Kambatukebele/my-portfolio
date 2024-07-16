import { useState, useEffect } from "react";
import mockPosts from "../../mockPosts.json";
import Button from "../Button";
import CardBlog from "./CardBlog";
const DownBlog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Display only the first 3 posts and reverse the order
    setPosts(mockPosts.slice().reverse().slice(0, 3));
  }, []);
  return (
    <>
      <div className="grid gap-4 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-10">
        {posts.map((post) => {
          return <CardBlog key={post.id} {...post} />;
        })}
      </div>
      <Button
        buttonText="View More"
        buttonExtraClass="bg-purple900 text-white"
        buttonIconClass="bg-white text-purple900"
      />
    </>
  );
};
export default DownBlog;
