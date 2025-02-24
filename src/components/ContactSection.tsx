import React from "react";
import { Button } from "./Button";

export const ContactSection = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-2 text-center">Get in touch</h2>
      <p className="text-gray-500 mb-8 text-center">Contact Me</p>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="space-y-4 mb-8 md:mb-0">
          <ContactCard title="Email" detail="rjvelazco21@gmail.com" />
          <ContactCard title="Whatsapp" detail="+58 424-6947763" />
          <ContactCard title="LinkedIn" detail="Rafael Velazco" />
        </div>
        <form className="space-y-4 md:ml-8 flex-1" aria-label="Contact Form">
          <InputField label="Name" placeholder="Insert your name" />
          <InputField label="Email" placeholder="Insert your email" />
          <TextAreaField label="Project" placeholder="Write your project" />
          <button
            type="submit"
            className="bg-black text-white font-medium py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactCard = ({ title, detail }: { title: string; detail: string }) => (
  <div className="p-4 bg-white border rounded-lg text-center">
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-600">{detail}</p>
    <p className="text-blue-500">Write me</p>
  </div>
);

const InputField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor={label.toLowerCase()}>{label}</label>
    <input
      type="text"
      id={label.toLowerCase()}
      placeholder={placeholder}
      className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-required="true"
    />
  </div>
);

const TextAreaField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor={label.toLowerCase()}>{label}</label>
    <textarea
      id={label.toLowerCase()}
      placeholder={placeholder}
      className="mt-1 block w-full border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-required="true"
    />
  </div>
); 