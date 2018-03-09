import React, { Component } from "react";
import UnfilteredList from "./UnfilteredList";
import axios from "axios";
import "./WorkoutList.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyPart: "",
      isLoading: true,
      exercises: [],
      name: "",
      description: ""
    };
    this.filterByExercise = this.filterByExercise.bind(this);
    this.destroy = this.destroy.bind(this);
    this.add = this.add.bind(this);
    this.nameUpdate = this.nameUpdate.bind(this);
    this.descriptionUpdate = this.descriptionUpdate.bind(this);
    this.update = this.update.bind(this);
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

  filterByExercise(e) {
    this.setState({
      bodyPart: e.target.value
    });
  }

  destroy(id) {
    axios
      .delete(`/api/exercises/${id}`)
      .then(response => {
        this.setState({
          exercises: response.data
        });
      })
      .catch(console.log);
  }

  add() {
    let ex = {
      name: this.state.name,
      description: this.state.description,
      license_author: "wger.de"
    };
    axios
      .post("/api/exercises", ex)
      .then(response => {
        this.setState({
          exercises: response.data
        });
      })
      .catch(console.log);
  }

  update(id, description) {
    this.setState(
      {
        isLoading: true
      },
      () =>
        axios
          .put(`/api/exercises/${id}`, { description })
          .then(response => {
            this.setState({
              exercises: response.data,
              isLoading: false
            });
          })
          .catch(console.log)
    );
  }

  nameUpdate(val) {
    this.setState({
      name: val
    });
  }

  descriptionUpdate(val) {
    this.setState({
      description: val
    });
  }

  render() {
    if (this.state.isLoading) return <h1>Page Is Loading...</h1>;
    const exerciseList = this.state.exercises
      .filter((e, i) => {
        return (
          JSON.stringify(e.category) === this.state.bodyPart ||
          this.state.bodyPart === ""
        );
      })
      .map((exercise, i) => {
        return (
          <UnfilteredList
            destroy={this.destroy}
            key={exercise.id}
            exercise={exercise}
            update={this.update}
            index={i}
          />
        );
      });
    return (
      <div className="workout-container">
        <div className="big-container">
          <select
            className="filter-container"
            value={this.state.bodyPart}
            onChange={this.filterByExercise}
          >
            <option value="">Filter By Body Part</option>
            <option value="11">Chest</option>
            <option value="12">Back</option>
            <option value="13">Shoulders</option>
            <option value="8">Arms</option>
            <option value="10">Abs</option>
            <option value="9">Legs</option>
            <option value="14">Calves</option>
          </select>
          <div className="list-container">{exerciseList}</div>
        </div>
        <div className="post-container">
          <input
            id="post-title"
            onChange={e => this.nameUpdate(e.target.value)}
            type="text"
            placeholder="Title"
            value={this.state.name}
          />
          <textarea
            id="text-container"
            onChange={e => this.descriptionUpdate(e.target.value)}
            placeholder="Description"
            value={this.state.description}
          />
          <button className="post-button" onClick={this.add}>
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default List;
