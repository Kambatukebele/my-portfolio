import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import H4 from "../H4";
import Paragraph from "../Paragraph";
import Image from "../Image";
const CardPortfolio = ({ img, link }) => {
  return (
    <a
      href={link}
      className="w-full mx-auto rounded-lg  h-full flex flex-col justify-center items-center shadow-sm border border-purple50 rounded-b-2xl sm:w-full lg:w-[430px] xl:w-[550px] 2xl:w-[650px]"
    >
      <div className="w-full rounded-lg block h-full sm:w-full sm:h-[400px] lg:w-[430px] xl:w-[550px] 2xl:w-[650px] ">
        <Image image={img} imageExtraClass="" />
      </div>
    </a>
  );
};
export default CardPortfolio;
