import React from "react";
import { Icon } from "@iconify/react";

import { FooterContainer } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="d-flex container_content">
        <div className="d-flex">
          <div className="icon">
            <Icon
              icon="fontisto:email"
              width="30
            "
            />
          </div>

          <div className="icon">
            <a href="mailto: arskabinda@gmail.com">arskabinda@gmail.com</a>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <Icon
              icon="clarity:phone-handset-line"
              width="30
            "
            />
          </div>
          <div className="icon">
            <a href="tel: +243824005630">+243824005630</a>
          </div>
        </div>
        <div className="d-flex">
          <div className="icon">
            <Icon
              icon="clarity:map-marker-line"
              width="30
            "
            />
          </div>
          <p className="icon">
            <span>Kinshasa/RDC</span>
          </p>
        </div>
      </div>
      <div>
        <p>Follow Me</p>
      </div>
      <div className="d-flex container_icon">
        <div>
          <a href="https://m.facebook.com/arslene.kabs">
            <Icon icon="et:facebook" className="icon" width="32" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/ArsleneKabinda">
            <Icon icon="et:twitter" className="icon" width="32" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/arsl%C3%A8ne-kabinda-1a910b213/">
            <Icon icon="et:linkedin" className="icon" width="32" />
          </a>
        </div>
      </div>
      <div className="bg"></div>
    </FooterContainer>
  );
};

export default Footer;
