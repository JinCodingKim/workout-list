import React, { Component } from "react";
import axios from "axios";
import MWFList from "./DiffWorkouts/MWF/MWFList";
import MTTFList from "./DiffWorkouts/MTTF/MTTFList";
import LoaderSVG from "../../three-dots.svg";
import "./CreateWorkout.css";

class CreateWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: [],
      days1: [],
      days2: [],
      workouts1: [],
      workouts2: [],
      isLoading: true,
      numberOfDays: 0
    };
    this.threeDays = this.threeDays.bind(this);
    this.fourDays = this.fourDays.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/exercises")
      .then(response => {
        this.setState({
          exercises: response.data,
          isLoading: false
        });
      })
      .catch(console.log);
  }

  threeDays() {
    let mwfWorkouts = this.state.exercises.filter(
      exercise =>
        exercise.category === 11 ||
        exercise.category === 12 ||
        exercise.category === 9 ||
        exercise.category === 10
    );
    this.setState({
      workouts1: mwfWorkouts,
      numberOfDays: 3,
      days1: [
        "Monday (4 Sets x 8-12 Repetitions Per Exercise):",
        "Wednesday (4 Sets x 8-12 Repetitions Per Exercise):",
        "Friday (4 Sets x 8-12 Repetitions Per Exercise):"
      ]
    });
  }

  fourDays() {
    let mttfWorkouts = this.state.exercises.filter(
      exercise =>
        exercise.category === 11 ||
        exercise.category === 12 ||
        exercise.category === 13 ||
        exercise.category === 8 ||
        exercise.category === 10 ||
        exercise.category === 9 ||
        exercise.category === 14
    );
    this.setState({
      workouts2: mttfWorkouts,
      numberOfDays: 4,
      days2: [
        "Monday (4 Sets x 8-12 Repetitions Per Exercise):",
        "Tuesday (4 Sets x 8-12 Repetitions Per Exercise):",
        "Thursday (3 Sets x 12-15 Repetitions Per Exercise):",
        "Friday (3 Sets x 12-15 Repetitions Per Exercise):"
      ]
    });
  }

  render() {
    if (this.state.isLoading)
      return (
        <div className="create-loader-container">
          <img className="create-loader" src={LoaderSVG} />
        </div>
      );
    return (
      <div className="create-container">
        <h2 id="create-title">CHOOSE A PLAN</h2>
        <div className="buttons-container">
          <button className="create-button" onClick={this.threeDays}>
            FULL BODY
            <br />
            <span>(3 DAYS)</span>
          </button>
          <button className="create-button" onClick={this.fourDays}>
            UPPER / LOWER
            <br />
            <span>(4 DAYS)</span>
          </button>
        </div>

        <div className="program-container">
          {this.state.isLoading ? (
            <div className="create-loader-container">
              <img className="create-loader" src={LoaderSVG} />
            </div>
          ) : !this.state.isLoading && this.state.numberOfDays === 3 ? (
            <MWFList mwf={this.state.workouts1} days={this.state.days1} />
          ) : (
            <MTTFList mttf={this.state.workouts2} days={this.state.days2} />
          )}
        </div>
      </div>
    );
  }
}
export default CreateWorkout;
