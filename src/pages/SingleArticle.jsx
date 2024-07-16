import { Link, useParams } from "react-router-dom";
import mockPosts from "../mockPosts.json";
import Paragraph from "../components/Paragraph";
const SingleArticle = () => {
  const { articleId, slugId } = useParams();
  console.log(useParams());
  const post = mockPosts.find((post) => post.id === parseInt(articleId));
  const stripTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <section className="w-full h-screen bg-bg-longue bg-cover bg-center bg-no-repeat p-3">
      <main className="container mx-auto rounded-2xl pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src={post.author.image}
                    alt={post.author.name}
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      <strong>Author:</strong> {post.author.name}
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      {post.author.position}
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        <strong>Published on:</strong> {formatDate(post.date)}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {post.title.rendered}
              </h1>
            </header>
            <figure>
              <img src={post.featured_media} alt={post.title.rendered} />
            </figure>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </article>
        </div>
      </main>
    </section>
  );
};
export default SingleArticle;
