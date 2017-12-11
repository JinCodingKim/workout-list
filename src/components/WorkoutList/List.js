import React, { Component } from "react";
import PropTypes from "prop-types";
import UnfilteredList from "./UnfilteredList";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      exercises: [],
      name: "",
      description: ""
    };
    this.destroy = this.destroy.bind(this);
    this.add = this.add.bind(this);
    this.nameUpdate = this.nameUpdate.bind(this);
    this.descriptionUpdate = this.descriptionUpdate.bind(this);
    // this.update = this.update.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/exercises")
      .then(response => {
        console.log(response);
        this.setState({
          exercises: response.data,
          isLoading: false
        });
      })
      .catch(console.log);
  }
  destroy(id) {
    console.log("asdf");
    axios.delete(`/api/exercises/${id}`).then(response => {
      console.log(response.data);
      this.setState({
        exercises: response.data
      });
    });
  }
  add() {
    let ex = {
      name: this.state.name,
      description: this.state.description,
      license_author: "wger.de"
    };
    axios.post("/api/exercises", ex).then(response => {
      return this.setState({
        exercises: response.data
      });
    });
  }
  // update(id, name, description) {
  //   let ex = {
  //     name: this.state.name,
  //     description: this.state.description,
  //     license_author: "wger.de"
  //   };
  //   axios.put(`/api/exercises/${id}`, ex).then(response => {
  //     return this.setState({
  //       exercises: response.data
  //     });
  //   });
  // }
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
          JSON.stringify(e.category) === this.props.bodyPart ||
          this.props.bodyPart === ""
        );
      })
      .map((exercise, i) => {
        return (
          <UnfilteredList
            destroy={this.destroy}
            key={exercise.id}
            exercise={exercise}
            index={i}
          />
        );
      });
    return (
      <div>
        <div>{exerciseList}</div>
        <div>
          <input
            onChange={e => this.nameUpdate(e.target.value)}
            type="text"
            value={this.state.name}
          />
        </div>

        <div>
          <textarea
            onChange={e => this.descriptionUpdate(e.target.value)}
            placeholder="Description here"
            value={this.state.description}
          />
        </div>
        <div>
          <button onClick={this.add}>Post</button>
        </div>
      </div>
    );
  }
}
List.propTypes = {
  bodyPart: PropTypes.oneOf(["", "11", "12", "13", "10", "14", "8"]).isRequired
};

export default List;
