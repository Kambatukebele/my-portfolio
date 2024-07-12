import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Button = ({ buttonText, buttonBg }) => {
  const [isRotated, setIsRotated] = useState(false);
  const handleMouseOver = () => {
    setIsRotated(true);
  };
  const handleMouseLeave = () => {
    setIsRotated(false);
  };
  return (
    <>
      <button
        className={`flex justify-center items-center gap-2 ${buttonBg} py-2 px-4 text-white rounded-full mt-0 hover:bg-blue hover:shadow-2xl hover:shadow-blue hover:-mt-2 duration-200 ease-in-out`}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <a className="block" href="#">
          {buttonText}
        </a>{" "}
        <span className="text-sm w-8 h-8 bg-white text-blue flex justify-center items-center rounded-full">
          <FontAwesomeIcon
            className={`${
              isRotated ? "rotate-0" : "-rotate-45"
            } duration-200 ease-in-out`}
            icon={faArrowRight}
          />
        </span>
      </button>
    </>
  );
};
export default Button;
