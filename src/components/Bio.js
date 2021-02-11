import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/amanda-selfie.jpeg";
// import NameLogo from "./NameLogo";

const Bio = () => {
  return (
    <div>
      {/* <NameLogo /> */}
      <div className="inner-container-bio">
        <img src={avatar} alt="avatar" className="avatar center"></img>
        <div id="full-name">
          <p>Amanda de Paula (Reis)</p>
        </div>

        <div id="bio-p">
          <p id="bio-p">(she/her)</p>
          Hi! My name is Amanda, and I am front end engineer based in San
          Francisco, Ca. My passions include coffee, React.js, chocolate and
          fine wine.
          <div className="current-project" style={{ textAlign: "center" }}>
            <p>Ongoing project:</p>
            <a
              href="https://exploretravel.tips"
              rel="noreferrer"
              target="_blank"
            >
              www.exploretravel.tips
            </a>
          </div>
        </div>
        <div id="contact-container">
          <Link to="/contact" id="contact-btn">
            Connect with me <i className="fas fa-chevron-circle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bio;
