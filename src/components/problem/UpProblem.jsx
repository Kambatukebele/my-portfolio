import H6 from "../H6";
import H2 from "../H2";
import Paragraph from "../Paragraph";

const UpProblem = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <H6 h6Title="Is This is one of your problems?" />
      <H2
        h2Title="My Shopify consultancy services can help in several ways:"
        h2ExtraClass="font-semibold sm:text-center sm:w-[400px] md:w-[550px]"
      />
      {/* <Paragraph paraText="As a Shopify partner, I'm expertly positioned to help you with a range of different ecommerce projects." /> */}
    </div>
  );
};
export default UpProblem;
