import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react"; // from Formspree
import Label from "../Label";
import ContactFormBusinessBuget from "./ContactFormBusinessBuget";
import ContactFormNameEmail from "./ContactFormNameEmail";
const ContactFormInputs = () => {
  const [state, handleSubmit] = useForm("mpwpykea"); // your form ID from Formspree

  if (state.succeeded) {
    return <p className="text-green-500 text-lg">Thanks for reaching out!</p>;
  }
  return (
    <form
      className="w-full flex flex-col justify-center items-start gap-4"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col justify-center items-center gap-4 sm:flex-row">
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label className="block text-gray50 text-sm" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="block w-full h-[53px] border border-purple50 rounded-lg px-4 text-sm"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label className="block text-gray50 text-sm" htmlFor="email">
            Your Email
          </label>
          <input
            id="email"
            className="block w-full h-[53px] border border-purple50 rounded-lg px-4 text-sm"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      {/* <ContactFormBusinessBuget /> */}
      <div className="w-full flex flex-col justify-center items-start gap-1 ">
        <label className="block text-gray50 text-sm" htmlFor="message">
          Describe your project
        </label>
        <div className=" w-full">
          <textarea
            name="message"
            className="w-full block border pl-5 py-5 border-purple50 rounded-xl"
            rows="10"
            placeholder="Describe your idea"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      <div className="">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-purple900 text-white h-14 w-36 flex justify-center items-center gap-3 py-2 px-4 rounded-full mt-0 hover:bg-blue hover:shadow-2xl hover:shadow-blue duration-200 ease-in-out"
        >
          {state.submitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};
export default ContactFormInputs;
