import H6 from "../H6";
import H2 from "../H2";
import Paragraph from "../Paragraph";

const TopDiv = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <H6 h6Title="Services" />
      <H2
        h2Title="How I can support your Shopify website"
        h2ExtraClass="font-semibold sm:text-center sm:w-[400px] md:w-[550px]"
      />
      <Paragraph
        paraText="As a Shopify partner, I'm expertly positioned to help you with a range of different ecommerce projects."
        width="sm:text-center sm:w-[400px] md:w-[550px]"
      />
    </div>
  );
};
export default TopDiv;
