import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {!item.private ? (
        <div className="work__card__action">
          <a href={item.demo} className="work__button">
            Demo
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          <a href={item.repo} className="work__button">
            Code
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
      ) : (
        <div className="work__card__action" style={{ maxWidth: "250px" }}>
          <span style={{ fontSize: ".8rem" }}>{item.label}</span>
        </div>
      )}
    </div>
  );
};

export default WorkItems;
