import React from "react";
import ContactHero from "./components/contact-hero";
import ContactForm from "./components/contact-form";

const Contact = () => {
    return (
        <div className="flex flex-col">
            <ContactHero />
            <ContactForm />
      </div>
  )
};

export default Contact;
