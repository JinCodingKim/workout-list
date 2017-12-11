import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./main_image.png";
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
          <div className="button">
            <NavLink to="/exercises" activeClassName="active">
              Workout List
            </NavLink>
          </div>
          <div className="button">
            <NavLink to="/create" activeClassName="active">
              Create Workout
            </NavLink>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
