import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import H4 from "../H4";
import Paragraph from "../Paragraph";
import Image from "../Image";
const CardPortfolio = ({ img, title, description, link, stack, tech }) => {
  return (
    <div className="w-[300px] h-full flex flex-col justify-start items-start shadow-md rounded-2xl bg-white cursor-pointer duration-300 ease-in-out hover:shadow-lg hover:-mt-5">
      <div className="w-full">
        <Image image={img} imageExtraClass="rounded-t-2xl" />
      </div>
      <div className="p-4 flex justify-center items-start flex-col gap-4 h-[260px] md:h-fit">
        <H4 h4Title={title} h4ExtraClass="font-medium text-black900" />
        <Paragraph paraText={description} width="text-gray50" />
      </div>
    </div>
  );
};
export default CardPortfolio;
