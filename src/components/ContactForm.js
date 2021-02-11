import React, { useRef, useEffect, useState } from "react";
import NameLogo from "./NameLogo";
const ContactFormInput = (props) => {
  return (
    <div className={`input-container ${props.longtext ? "ic-big" : ""}`}>
      <div className="input-prefix-icon">
        <i className={`fas ${props.icon}`}></i>
      </div>
      <div className={`input-inner-container`}>
        {props.longtext ? (
          <textarea
            placeholder={props.placeholder}
            rows="5"
            name={props.name}
          ></textarea>
        ) : (
          <input
            type="text"
            autoComplete="off"
            placeholder={props.placeholder}
            name={props.name}
          />
        )}
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerDone(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const form = useRef(null);
  let done = false;
  if (window.location.search.includes("done")) {
    done = true;
  }
  return (
    <div>
      <div className="logo-pages">
        <NameLogo />
      </div>
      <div className="inner-container-contact-form">
        <div className="form">
          {done && !timerDone ? "Thank You" : null}
          <form
            ref={form}
            action="https://submit-form.com/Z78IPcBD"
            method="post"
          >
            <ContactFormInput
              icon="fa-user-alt"
              placeholder="Name"
              name="Name"
            />
            <ContactFormInput icon="fa-at" placeholder="Email" name="Email" />
            <ContactFormInput
              icon="fa-comment-alt"
              placeholder="e.g. Hello!"
              name="Message"
              longtext
            />
            <input
              type="hidden"
              name="_redirect"
              value="amanda.depaula.xyz/contact?done=1"
            />
            <input type="hidden" name="_append" value="false" />
            <div>
              <div>
                <button
                  type="submit"
                  className="btn"
                  onClick={() => {
                    form.current.submit();
                  }}
                >
                  <i className="far fa-paper-plane fa-lg"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
