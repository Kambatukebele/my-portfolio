import { Link } from "react-router-dom";
import Button from "../components/Button";
const ErrorComponent = () => {
  return (
    <section className="bg-white dark:bg-gray-900 w-full h-screen relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple900 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link className="flex justify-center items-center" to="/">
            <Button
              buttonText=" Back to Homepage"
              buttonType="button"
              buttonExtraClass="bg-purple900 text-white"
              buttonIconClass="bg-white text-purple900"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ErrorComponent;
