import H4 from "../H4";
import Button from "../Button";
import Label from "../Label";
import FieldInput from "../FieldInput";
import FieldSelect from "../FieldSelect";
import FieldOption from "../FieldOption";
// import { budgets, businessType } from "../../my_data";
const ContactForm = () => {
  return (
    <form className="w-full h-fit bg-white rounded-2xl shadow-sm">
      <div className="">
        <div>
          <H4 h4Title="Project Details" />
        </div>
        <div>
          <div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <Label labelTitle="First name" />
              <FieldInput
                fieldInputName="name"
                fieldInputPlaceholder="First name"
                fieldInputType="text"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <Label labelTitle="Email" />
              <FieldInput
                fieldInputName="email"
                fieldInputPlaceholder="Email"
                fieldInputType="email"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <Label labelTitle="What type of business are you?" />
              <FieldSelect></FieldSelect>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <Label labelTitle="Email" />
              <FieldInput
                fieldInputName="email"
                fieldInputPlaceholder="Email"
                fieldInputType="email"
              />
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
      </div>
    </form>
  );
};
export default ContactForm;
