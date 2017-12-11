import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./main_image.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logoNav">
          <div className="headLogo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav className="navigation">
            <div className="headButton">
              <NavLink
                to="/exercises"
                className="notActive"
                activeClassName="active"
              >
                Workout List
              </NavLink>
            </div>
            <div className="headButton">
              <NavLink
                to="/create"
                className="notActive"
                activeClassName="active"
              >
                Create Workout
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
