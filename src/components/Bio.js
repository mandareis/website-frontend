import React from "react";
import { Link } from "react-router-dom";

const Bio = () => {
  return (
    <div>
      <div className="inner-container-bio">
        <img
          src="http://localhost:8080/images/amanda-selfie.jpeg"
          alt="avatar"
          className="avatar center"
        ></img>
        <h2 id="full-name">Amanda Reis</h2>
        <p id="bio-p">(she/her)</p>
        <p id="bio-p">
          Junior software engineer based in San Francisco, Ca. My passions
          include coffee, React, chocolate and fine wine.
        </p>
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
