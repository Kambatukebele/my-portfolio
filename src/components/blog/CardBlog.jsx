import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import H4 from "../H4";
import Paragraph from "../Paragraph";
import Image from "../Image";
import Blog from "./Blog";
const CardBlog = ({
  id,
  author,
  img,
  title,
  description,
  published_date,
  link,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start shadow-md rounded-2xl bg-white cursor-pointer duration-300 ease-in-out hover:shadow-lg hover:-mt-5">
      <div className="w-full">
        <Image image={img} imageExtraClass="rounded-t-2xl" />
      </div>
      <div className="p-4 flex justify-center items-start flex-col gap-4 h-[260px] md:h-fit">
        <div className="flex justify-center items-center gap-4">
          <span className="flex justify-center items-center gap-2">
            <FontAwesomeIcon className="text-gray50" icon={faUser} />
            <small className="block capitalize">{author}</small>
          </span>
          <span className="flex justify-center items-center gap-2">
            <FontAwesomeIcon className="text-gray50" icon={faCalendarDays} />
            <small className="block capitalize">{published_date}</small>
          </span>
        </div>
        <H4 h4Title={title} h4ExtraClass="font-medium text-black900" />
        <Paragraph paraText={description} width="text-gray50" />
      </div>
    </div>
  );
};
export default CardBlog;
