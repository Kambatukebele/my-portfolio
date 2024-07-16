import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { fetchPosts } from "../services/WordpressService";
import CardBlog from "../components/blog/CardBlog";
import { Link } from "react-router-dom";

const Articles = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        const reversedPosts = data.slice().reverse();
        setAllPosts(reversedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  useEffect(() => {
    if (allPosts.length > 0) {
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      setPosts(allPosts.slice(indexOfFirstPost, indexOfLastPost));
    }
  }, [allPosts, currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <article className="w-full h-fit lg:pb-10 bg-bg-longue bg-no-repeat bg-cover bg-center relative">
      <div className="container mx-auto flex flex-col justify-center items-center gap-4">
        <div className="h-[300px] w-full flex-col gap-4 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-start md:text-6xl">
            My Articles
          </h1>
          <Paragraph
            paraText="If you're a Shopify store owner seeking a remote freelance Shopify developer for seamless migrations, custom theme development, or comprehensive e-commerce website"
            width="text-center sm:w-[400px] md:w-[550px]"
          />
          <Link to="/">
            <Button
              buttonText="Go Back Home"
              buttonType="button"
              buttonExtraClass="bg-blue text-white"
              buttonIconClass="bg-white text-purple900"
            />
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-10 my-5">
          {posts.map((post) => {
            return <CardBlog key={post.id} {...post} />;
          })}
        </div>
        {/* Pagination */}
        <div className="mt-10 w-full flex items-center justify-between shadow-sm border-gray-200 bg-bg-longue px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-md bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-purple900"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative ml-3 inline-flex items-center rounded-md bg-purple900 px-4 py-2 text-sm font-medium text-white hover:bg-blue"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-black500">
                Showing
                <span className="font-medium">
                  {" "}
                  {currentPage * postsPerPage - postsPerPage + 1}{" "}
                </span>
                to
                <span className="font-medium">
                  {" "}
                  {Math.min(currentPage * postsPerPage, allPosts.length)}{" "}
                </span>
                of
                <span className="font-medium"> {allPosts.length} </span>
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-black900 ring-1 ring-inset ring-gray-300 bg-purple50 hover:bg-purple900 hover:text-white focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    aria-current={
                      currentPage === index + 1 ? "page" : undefined
                    }
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === index + 1
                        ? "bg-purple900 text-white"
                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    } focus:z-20 focus:outline-offset-0`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-black900 ring-1 ring-inset ring-gray-300 bg-purple50 hover:bg-blue hover:text-white focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Articles;
