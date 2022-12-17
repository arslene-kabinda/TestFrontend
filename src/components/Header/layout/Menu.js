import React from "react";
import { MenuContainer } from "../styles/MenuStyle";
const Menu = () => {
  return (
    <MenuContainer className=" navbar-expand-lg ">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"> Menu</i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 group_items">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              <span>Accueil</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              À propos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#service">
              Service
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </MenuContainer>
  );
};
export default Menu;
