import React from "react";
import { CallToActionButton } from "./CallToActionButton";

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
        <form className="space-y-4 md:ml-8 flex-1">
          <InputField label="Name" placeholder="Insert your name" />
          <InputField label="Mail" placeholder="Insert your email" />
          <TextAreaField label="Project" placeholder="Write your project" />
          <CallToActionButton href="#" label="Send Message" />
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
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
    />
  </div>
);

const TextAreaField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea
      placeholder={placeholder}
      className="mt-1 block w-full border border-gray-300 rounded-md p-2 h-32"
    />
  </div>
); 