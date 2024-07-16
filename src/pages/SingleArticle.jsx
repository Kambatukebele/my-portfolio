import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSinglePost } from "../services/WordpressService";
import Paragraph from "../components/Paragraph";
const SingleArticle = () => {
  const { articleId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await fetchSinglePost(articleId);
        setPost(postData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [articleId]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }
  // Extract featured image URL
  const featuredImage = post._embedded && post._embedded["wp:featuredmedia"];
  const imageUrl = featuredImage && featuredImage[0].source_url;

  return (
    <section className="w-full h-fit bg-bg-longue bg-cover bg-center bg-no-repeat p-3">
      <main className="container mx-auto rounded-2xl pt-8 pb-16 lg:pt-16 lg:pb-24 bg-purple50 dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  {post.author && (
                    <>
                      <img
                        className="mr-4 w-16 h-16 rounded-full"
                        src={post._embedded.author[0].avatar_urls[96]}
                        alt={post._embedded.author[0].name}
                      />
                      <div>
                        <span
                          href="#"
                          rel="author"
                          className="text-xl font-bold text-gray-900 capitalize dark:text-white"
                        >
                          <strong>Author:</strong>{" "}
                          {post._embedded.author[0].name}
                        </span>
                        <p className="text-base text-gray-500 dark:text-gray-400">
                          {post._embedded.author[0].description}
                        </p>
                        <p className="text-base text-gray-500 dark:text-gray-400">
                          <time
                            pubdate
                            datetime="2022-02-08"
                            title="February 8th, 2022"
                          >
                            <strong>Published on:</strong>{" "}
                            {formatDate(post.date)}
                          </time>
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {post.title.rendered}
              </h1>
            </header>
            {imageUrl && (
              <figure>
                <img src={imageUrl} alt={post.title.rendered} />
              </figure>
            )}
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>
        </div>
      </main>
    </section>
  );
};
export default SingleArticle;
