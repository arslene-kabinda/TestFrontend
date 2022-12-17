import React from "react";
import { HomeContainer } from "./HomeStyle";

const Home = () => {
  return (
    <HomeContainer id="home">
      <div className="container">
        <div className="ctr">
          {" "}
          <p>Bonjour,</p>
          <h1> Obtenez votre visas d'etude canadien avec nous!</h1>
        </div>
        <div></div>
      </div>
      <div className="link container">
        <div className="linkcontainer">
          <a
            className="link1"
            href="#contact
"
          >
            Contact
          </a>
        </div>
        <div className="linkcontainer">
          <a
            className="link2"
            href="#service"
          >
            Services
          </a>
        </div>
      </div>
    </HomeContainer>
  );
};
export default Home;
