import React from "react";
import { ServiceConatiner } from "./ServiceStyle";
import { Icon } from "@iconify/react";

const Service = () => {
  return (
    <ServiceConatiner id="service">
      <div className="title">
        <h1>Services</h1>
      </div>
      <div className="Service_card container">
        <div className="cards">
          <div>
            <Icon icon="teenyicons:appointments-outline" className="icon" />
          </div>
          <div>
            {" "}
            <h2> Prendre rendez-vous</h2>
            <p>
              realization of all the technical functionalities of a website or a
              web application.
            </p>
          </div>
        </div>
        <div className="cards">
          <div>
            <Icon icon="icon-park-outline:form-one" className="icon" />
          </div>
          <h2>soumettre le document</h2>
          <p>
            techniques allowing to think and create interfaces, meeting the
            expectations of the user when designing a platform.
          </p>
        </div>
        <div className="cards">
          <div>
            <Icon icon="uit:web-grid-alt" className="icon" />
          </div>
          <h2>Obtenir le visa</h2>
          <p>
            design and realization of the visual aspect of a website or an
            application.
          </p>
        </div>
      </div>
    </ServiceConatiner>
  );
};
export default Service;
