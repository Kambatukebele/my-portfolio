import Label from "../Label";
import FieldInput from "../FieldInput";
const ContactFormNameEmail = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 sm:flex-row">
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <Label labelTitle="Your Name" />
        <FieldInput
          fieldInputName="name"
          fieldInputPlaceholder="Your Name"
          fieldInputType="text"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <Label labelTitle="Your Email" />
        <FieldInput
          fieldInputName="email"
          fieldInputPlaceholder="Your Email"
          fieldInputType="email"
        />
      </div>
    </div>
  );
};
export default ContactFormNameEmail;
