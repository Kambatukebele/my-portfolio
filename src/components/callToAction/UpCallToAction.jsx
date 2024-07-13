import H6 from "../H6";
import H2 from "../H2";
import Paragraph from "../Paragraph";
import Button from "../Button";
const UpCallToAction = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <H6 h6Title="Take the action" />
      <H2
        h2Title="Ready To Take Your SEO To The Next Level"
        h2ExtraClass="font-semibold text-white sm:text-center sm:w-[400px] md:w-[550px]"
      />
      <Paragraph
        paraText="Effective SEO strategies not only elevate a website's visibility but also drive
targeted traffic, enhance user experience,"
        width="text-white sm:text-center sm:w-[400px] md:w-[550px]"
      />
      <Button
        buttonText="Hire me today"
        buttonExtraClass="bg-white"
        buttonIconClass="bg-purple900 text-white"
      />
    </div>
  );
};
export default UpCallToAction;
