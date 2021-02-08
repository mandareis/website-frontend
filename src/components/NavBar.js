import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavBarItem = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        stiffness: 300,
      }}
    >
      <Link className="nav-item " to={props.href}>
        <span>
          {props.number}&nbsp;—&nbsp;{props.content}
        </span>
      </Link>
    </motion.div>
  );
};

function NavBar() {
  return (
    <div className="navbar">
      <nav className="nav flex-column">
        <NavBarItem number="01" content="Home" href="/" />
        <NavBarItem number="02" content="About" href="/about" />
        <NavBarItem number="04" content="Contact" href="/contact" />
      </nav>
    </div>
  );
}

export default NavBar;
