import React, { useState } from "react";
import { motion } from "framer-motion";

const LoginFormInput = (props) => {
  return (
    <div className="input-container">
      <div className="input-prefix-icon">
        <i className={`fas ${props.icon}`}></i>
      </div>
      <div className={`input-inner-container`}>
        <input
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          autoComplete="off"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(false);
  const [isButtonAnimating, setIsButtonAnimating] = useState(false);

  const getLoginBtn = () => {
    let loginBtn = {};
    if (loginErr && isButtonAnimating) {
      loginBtn = {
        color: "#d62828",
      };
    }
    const innerLoginBtn = (
      <button type="submit" className="login-btn" style={loginBtn}>
        <i className="fas fa-sign-in-alt fa-lg"></i>
      </button>
    );

    if (loginErr && isButtonAnimating) {
      const movement = 17;
      return (
        <motion.div
          onAnimationComplete={() => {
            setIsButtonAnimating(false);
          }}
          animate={{
            translateX: [0, -movement, movement, -movement, movement, 0],
          }}
          transition={{ duration: 0.6, ease: "easeInOut", loop: 0 }}
        >
          {innerLoginBtn}
        </motion.div>
      );
    }
    return innerLoginBtn;
  };
  const handlesLogin = async (e) => {
    e.preventDefault();
    let response = await fetch("/sessions", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username: name, password }),
    });
    if (!response.ok) {
      setLoginErr(true);
      setIsButtonAnimating(true);
    } else {
      const data = await response.json();
      props.onLogin({ id: data.admin_id, username: data.username });
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="inner-container">
            <form className="form" onSubmit={handlesLogin}>
              <LoginFormInput
                type="text"
                icon="fa-user"
                placeholder="Name"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <LoginFormInput
                type="password"
                icon="fa-lock"
                placeholder="Password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {getLoginBtn()}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
