import H4 from "../H4";
import Paragraph from "../Paragraph";
const CardSolutions = ({ id, icon, description }) => {
  return (
    <div
      key={id}
      className="w-full flex flex-col justify-start items-start gap-4 shadow-md py-4 px-4 rounded-2xl bg-transparent cursor-pointer duration-200 ease-in-out hover:bg-blue"
    >
      <span className="w-10 h-10 rounded-full flex justify-center items-center bg-blue text-white text-base">
        {icon}
      </span>
      <Paragraph paraText={description} width="text-black" />
    </div>
  );
};
export default CardSolutions;
