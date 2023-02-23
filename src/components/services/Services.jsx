import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i class="fas fa-solid fa-pager services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i class="fas fa-solid fa-arrow-right"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <button
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              >
                <i class="fas fa-times"></i>
              </button>

              <h3 className="services__modal-title">Frontend Developer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="fas fa-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    User interface development.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i class="fas fa-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i class="fas fa-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web apps development.</p>
                </li>

                <li className="services__modal-service">
                  <i class="fas fa-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i class="fas fa-solid fa-server services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i class="fas fa-solid fa-arrow-right"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <button
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              >
                <i class="fas fa-times"></i>
              </button>

              <h3 className="services__modal-title">Backend Developer</h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class="fas fa-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Develope Full Rest API</p>
                </li>

                <li className="services__modal-service">
                  <i class="fas fa-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i class="fas fa-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
