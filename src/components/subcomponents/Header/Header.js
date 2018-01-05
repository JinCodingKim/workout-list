import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./barbell_image.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo-nav">
          <div className="head-logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav className="navigation">
            <div className="head-button">
              <NavLink
                to="/exercises"
                className="not-active"
                activeClassName="active"
              >
                WORKOUT LIST
              </NavLink>
            </div>
            <div className="head-button">
              <NavLink
                to="/create"
                className="not-active"
                activeClassName="active"
              >
                CREATE WORKOUT
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
