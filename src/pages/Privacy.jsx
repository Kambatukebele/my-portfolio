import { Link } from "react-router-dom";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
const Privacy = () => {
  return (
    <section className="w-full h-fit lg:pb-10 bg-bg-longue bg-no-repeat bg-cover bg-center relative">
      <div className="container mx-auto flex flex-col justify-center items-center gap-4">
        <div className="h-[300px] w-full flex-col gap-4 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-start md:text-6xl">
            Privacy Policy
          </h1>
          <Paragraph
            paraText="This Privacy Policy describes how your personal information is collected, used, and shared when you visit  https://kambatukebele.com (the “Site”)."
            width="text-center sm:w-[400px] md:w-[550px]"
          />
          <Link to="/">
            <Button
              buttonText="Go Back Home"
              buttonType="button"
              buttonExtraClass="bg-blue text-white"
              buttonIconClass="bg-white text-purple900"
            />
          </Link>
        </div>
        <div>
          <Paragraph paraText="These terms and conditions outline the rules and regulations for the use of the Rob Kendal website, located at robkendal.co.uk." />
          <Paragraph paraText="By accessing this website we assume you accept these terms and conditions. Do not continue to use Rob Kendal if you do not agree to take all of the terms and conditions stated on this page." />
          <Paragraph paraText="{``}" />
        </div>
      </div>
    </section>
  );
};
export default Privacy;
