import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import ContactFormTile from "../contact/ContactFormTitle";
import ContactFormInputs from "./ContactFormInputs";

// I am using Email Js to send react email to my gmail
const ContactForm = () => {
  return (
    <section className="w-full h-fit bg-white rounded-2xl shadow-sm lg:lg:w-2/3">
      <div className="w-full flex flex-col justify-center items-start gap-7 p-4 sm:p-10">
        <ContactFormTile />
        <ContactFormInputs />
      </div>
    </section>
  );
};
export default ContactForm;
