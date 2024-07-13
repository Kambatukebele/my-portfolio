import H4 from "../H4";
const UpFooterBlockTwo = () => {
  return (
    <div className="w-full flex justify-center items-start flex-col py-4 gap-4">
      <div>
        <H4 h4Title="Quick Links" />
      </div>
      <ul className="flex flex-col justify-center items-center gap-2">
        <li className="text-gray50 text-base lg:text-center">
          <a href="#">Home</a>
        </li>
        <li className="text-gray50 text-base">
          <a href="#">Home</a>
        </li>
        <li className="text-gray50 text-base">
          <a href="#">Home</a>
        </li>
        <li className="text-gray50 text-base">
          <a href="#">Home</a>
        </li>
        <li className="text-gray50 text-base">
          <a href="#">Home</a>
        </li>
      </ul>
    </div>
  );
};
export default UpFooterBlockTwo;
