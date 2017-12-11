import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <section className="mainContainer">
        <div className="bodyContainer">
          <div className="bodyInfo">
            <h1 className="title">Workout</h1>
            <h4 className="bodyHeader">Reasons You Should Workout:</h4>
            <p id="bodyParagraph">
              <ul>
                <li>Mental Release</li>
                <li>Confidence Boost</li>
                <li>More Energy</li>
                <li>Combat Depression</li>
              </ul>
            </p>
          </div>
          <div className="imageContainer" />
        </div>
      </section>
    );
  }
}
export default Home;
