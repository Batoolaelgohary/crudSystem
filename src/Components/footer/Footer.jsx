import React from "react";
import "./footer.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialGithub, SlSocialGoogle } from "react-icons/sl";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/batool-elgohary-15aa0518b">
            <TiSocialLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:batoolelgohary@gmail.com">
            <SlSocialGoogle />
          </a>
        </li>
        <li>
          <a href="https://github.com/Batoolaelgohary">
            <SlSocialGithub />
          </a>
        </li>
        <li>
          <a href="tel:01119907877">
            <IoCall />
          </a>
        </li>
      </ul>
      <div className="text-center">
        <p className="p">© Copyright CRUD. All Rights Reserved</p>
        <p>Designed by React.js</p>
      </div>
    </div>
  );
};

export default Footer;
