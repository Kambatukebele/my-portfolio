import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import H4 from "../H4";
import Paragraph from "../Paragraph";
import Image from "../Image";
import Blog from "./Blog";
const CardBlog = ({ title, author, excerpt, date, featured_media }) => {
  const stripTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerHTML || "";
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <a
      href=""
      className="w-full h-full flex flex-col justify-start items-start shadow-md rounded-2xl bg-white cursor-pointer duration-300 ease-in-out hover:shadow-lg hover:-mt-5"
    >
      <div className="w-full">
        <Image image={featured_media} imageExtraClass="rounded-t-2xl" />
      </div>
      <div className="p-4 flex justify-center items-start flex-col gap-4 h-[260px] md:h-fit">
        <div className="flex justify-center items-center gap-4">
          <span className="flex justify-center items-center gap-2">
            <FontAwesomeIcon className="text-gray50" icon={faUser} />
            <small className="block capitalize">{author}</small>
          </span>
          <span className="flex justify-center items-center gap-2">
            <FontAwesomeIcon className="text-gray50" icon={faCalendarDays} />
            <small className="block capitalize">{formatDate(date)}</small>
          </span>
        </div>
        <H4 h4Title={title.rendered} h4ExtraClass="font-medium text-black900" />
        <Paragraph paraText={stripTags(excerpt.rendered)} width="text-gray50" />
      </div>
    </a>
  );
};
export default CardBlog;
