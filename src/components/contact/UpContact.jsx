import H6 from "../H6";
import H2 from "../H2";
import Paragraph from "../Paragraph";
const UpContact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <H6 h6Title="Take the action" />
      <H2
        h2Title="How I can help your business"
        h2ExtraClass="font-semibold sm:text-center sm:w-[400px] md:w-[550px]"
      />
      <Paragraph
        paraText="If you're in need of a freelance Shopify developer, want a full Shopify ecommerce website, custom theme development or just need to hear some straightforward advice on how to start your next Shopify project, I'm all ears: let's have a chat!"
        width="sm:text-center sm:w-[400px] md:w-[550px]"
      />
    </div>
  );
};
export default UpContact;
