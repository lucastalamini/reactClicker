import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ icon }) => {
  return (
    <nav className="navbar bg-dark">
      <Link to="/" className="text-light large-text">
        React Clicker <i className="far fa-hand-point-up"></i>
      </Link>
      <ul>
        <li>
          <Link to="/about" className="medium-text">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
