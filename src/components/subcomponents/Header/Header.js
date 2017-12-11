import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./bodybuilder_logo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="headLogo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav className="navigation">
          <div>
            <Link to="/exercises">Workout List</Link>
          </div>
          <div>
            <Link to="/create">Create Workout</Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
