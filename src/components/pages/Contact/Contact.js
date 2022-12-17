import React from "react";
import { ContactContainer } from "./ContactStyle";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h1>Contact me</h1>
      <div className="form_Container">
        <form>
          <div className="form-outline text">
            <input type="text" id="typeText" className="form-control" />
            <label className="form-label" for="typeText">
              Your name
            </label>
          </div>

          <div className="d-flex">
            <div className="form-outline  phone_number">
              <input type="tel" id="typePhone" className="form-control" />
              <label className="form-label " for="typePhone">
                Your phone number
              </label>
            </div>

            <div className="form-outline email">
              <input type="email" id="typeEmail" className="form-control " />
              <label className="form-label" for="typeEmail">
                Your email adress
              </label>
            </div>
          </div>
          <div className="form-outline text">
            <textarea
              className="form-control"
              id="textAreaExample"
              rows="4"
            ></textarea>
            <label className="form-label" for="textAreaExample">
              Your message
            </label>
          </div>
          <div className="container_btn">
            <button className="bg">Send</button>
          </div>
        </form>
      </div>
    </ContactContainer>
  );
};

export default Contact;
