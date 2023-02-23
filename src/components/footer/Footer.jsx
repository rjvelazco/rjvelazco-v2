import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">rjvelazco</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/rjvelazco"
            className="footer__social-link footer__social-link__github"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/rafael-velazco"
            className="footer__social-link footer__social-link__linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>

          <a
            href="mailto:rjvelazco21@gmail.com"
            className="footer__social-link footer__social-link__gmail"
            target="_blank"
            rel="noreferrer"
            solor
          >
            <i class="fas fa-at"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Rafael Velazco. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
