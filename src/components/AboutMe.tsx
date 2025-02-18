import React from "react";
import { InfoCard } from "./InfoCard";
import { CallToActionButton } from "./CallToActionButton";

export const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="mb-4 md:mb-0">
        <img
          src="https://placehold.co/200x200"
          alt="Profile"
          className="rounded-lg"
        />
      </div>
      <div className="md:ml-8">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <p className="text-gray-500 mb-4">My introduction</p>
        <div className="flex space-x-4 mb-4">
          <InfoCard title="Experience" description="+2 Years Working" />
          <InfoCard title="Completed" description="5+ Projects" />
          <InfoCard title="Support" description="Online 15/5" />
        </div>
        <p className="text-gray-600 mb-4">
          Full Stack developer, I create applications/web pages, I have more
          than 2 years of experience working in dotCMS and clients are happy
          with the projects carried out.
        </p>
        <CallToActionButton
          href="/path/to/your/asset.pdf"
          label="Download CV"
          download
        />
      </div>
    </div>
  );
}; 