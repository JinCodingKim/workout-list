import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <section className="main-container">
        <div className="body-container">
          <div className="image-container" />
          <div className="body-info">
            <h2 className="body-header">REASONS TO WORKOUT</h2>
            <div id="body-paragraph">
              <ul>
                <li>MENTAL RELEASE</li>
                <li>CONFIDENCE BOOST</li>
                <li>MORE ENERGY</li>
                <li>COMBAT DEPRESSION</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Home;
