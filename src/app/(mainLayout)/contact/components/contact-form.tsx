import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Playfair_Display } from "next/font/google";
import React from "react";

const font = Playfair_Display({ weight : ["400","600"], subsets : ["cyrillic"] })


const ContactForm = () => {
    return (
      <div className="w-full h-auto max-w-6xl mx-auto py-10 px-10 lg:px-0">
        <div className="w-full h-full flex flex-col space-y-6">
          <p
            className={`text-center w-full ${font.className} font-semibold text-4xl`}
          >
            Contact us
          </p>
          <div className="flex gap-x-5 flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start space-y-4 lg:space-y-0">
            <div className="w-full flex flex-col space-y-8">
              <div className="w-full">
                <Input
                  className="px-4 py-5 border-[1px] border-gray-300"
                  placeholder="e.g. 'Jhon'"
                  type="text"
                />
              </div>
              <div className="w-full">
                <Input
                  className="px-4 py-5 border-[1px] border-gray-300"
                  placeholder="e.g. 'jhon@gmail.com'"
                  type="email"
                />
              </div>
              <div className="w-full">
                <Textarea
                  className="px-4 py-5 border-[1px] border-gray-300"
                  placeholder="e.g. 'write something'"
                  maxLength={200}
                />
              </div>
              <div className="w-full">
                <Button className="shadow-xl rounded-none text-xs px-6 py-4">
                  Submit
                </Button>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5208.219656010585!2d-123.0712037!3d49.2553642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486714d64f829cf%3A0xe46fe39a604e7ab6!2sCroatian%20Cultural%20Centre!5e0!3m2!1sen!2sbd!4v1734077288779!5m2!1sen!2sbd"
                className="w-full h-[400px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactForm;
