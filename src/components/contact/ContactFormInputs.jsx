import Button from "../Button";
import Label from "../Label";
import ContactFormBusinessBuget from "./ContactFormBusinessBuget";
import ContactFormNameEmail from "./ContactFormNameEmail";
const ContactFormInputs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <ContactFormNameEmail />
      <ContactFormBusinessBuget />
      <div className="w-full flex flex-col justify-center items-start gap-1 ">
        <Label
          labelHtmlFor="message"
          labelTitle="Describe your project or request"
        />
        <div className="border border-purple50 rounded-2xl w-full">
          <textarea name="message" className="w-full" rows="7"></textarea>
        </div>
      </div>
      <div>
        <Button
          buttonText="Send"
          buttonType="submit"
          buttonExtraClass="bg-purple900 text-white"
          buttonIconClass="text-white"
        />
      </div>
    </div>
  );
};
export default ContactFormInputs;
