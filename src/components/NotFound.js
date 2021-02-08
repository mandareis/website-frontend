import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const NotFound = () => {
  const [timerDone, setTimerDone] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerDone(true);
      history.push("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, [setTimerDone, history]);

  return (
    <div className="not-found-container">
      <div className="not-found">
        {timerDone}
        <h1>404: Page Not Found</h1>
        <h3>WHAT ARE&nbsp; YOU DOING HERE? YOU AREN'T SUPPOSED TO SEE THIS!</h3>
      </div>

      <Link to="/" className="back-home-btn">
        <p>GET OUT OF HERE!</p>
        <div>
          <i className="fas fa-chevron-circle-left"></i>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
