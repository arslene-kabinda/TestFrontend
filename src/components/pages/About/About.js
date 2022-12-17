import React from "react";
import { AboutContainer } from "./AboutStyle";
import profile from "../../assets/bbb.jpg";

const About = () => {
  return (
    <AboutContainer id="about">
      <div className="container about_picture">
        <div className="  about_profile">
          <div className="profile">
            <img src={profile} alt="profile" />
          </div>
        </div>
        <div className="about_speech">
          <div>
            <h1>Immigration au Canada</h1>
            <p>
              <span>À propos de nous</span>
            </p>
            <p>
              Nous sommes une agence d'immigration cannadienne qui vous aidera à
              avancer avec votre dossier à fin d'obtenir le visas d'etude
              canadienne{" "}
            </p>
          </div>
          <div className="link">
            <div className="containerlink">
              <a className="link1" href="mailto: arskabinda@gmail.com">
                Contact
              </a>
            </div>
            <div>
              <a className="link2" href="#service">
                Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};
export default About;
