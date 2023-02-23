import React from "react";

export const ContactCard = ({ title, subTitle, link }) => {
  return (
    <div className="contact__card">
      <i className="bx bxl-whatsapp contact__card-icon"></i>

      <h3 className="contact__card-title">{title}</h3>
      <span className="contact__card-data">{subTitle}</span>

      <a href={link} className="contact__button">
        Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
      </a>
    </div>
  );
};
