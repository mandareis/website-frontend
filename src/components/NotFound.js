import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h1>404: Page Not Found</h1>
        <h3>WHAT ARE&nbsp; YOU DOING HERE? YOU AREN'T SUPPOSED TO SEE THIS!</h3>
      </div>

      <Link to="/" className="back-home-btn">
        <div>GET OUT OF HERE!</div>
        <div>
          <i className="fas fa-chevron-circle-left"></i>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
