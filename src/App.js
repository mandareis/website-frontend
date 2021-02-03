import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Bio from "./components/Bio";
import ContactForm from "./components/ContactForm";
import ItemGallery from "./components/ItemGallery";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="container">
              <div className="row">
                <div className="col">
                  <ItemGallery />
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="col-sm-4 col-md-6 col-lg-6 ">
                  <Bio />
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/contact">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <ContactForm />
              </div>
            </div>
            <div className="row justify-content-center">
              <div id="back-btn-container">
                <Link to="/" id="back-btn">
                  Go back <i className="fas fa-chevron-circle-left"></i>
                </Link>
              </div>
            </div>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <div className="col">
        <div id="footer">
          <a
            className="footer-colors"
            href="https://www.linkedin.com/in/amanda-depaula-reis/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
            &nbsp; LinkedIn
          </a>
          <a
            className="footer-colors"
            href="https://github.com/mandareis"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
            &nbsp; GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
