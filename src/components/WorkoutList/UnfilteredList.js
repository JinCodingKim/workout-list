import React, { Component } from "react";
import "./WorkoutList.css";

class UnfilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      description: this.props.exercise.description
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.save = this.save.bind(this);
    this.changeDes = this.changeDes.bind(this);
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  save() {
    const { exercise: { id }, update } = this.props;
    update(id, this.state.description);
    this.toggleEdit();
  }

  changeDes(e) {
    this.setState({
      description: e.target.value
    });
  }
  render() {
    return (
      <div className="exercise" key={this.props.exercise.id}>
        <h2 id="exercise-title">{this.props.exercise.name}</h2>

        {!this.state.edit ? (
          <p id="description-container">
            {this.props.exercise.description
              .replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")
              .replace(/(<li[^>]+?>|<li>|<\/li>)/gim, "")
              .replace(/(<ol[^>]+?>|<ol>|<\/ol>)/gim, "")
              .replace(/(<ul[^>]+?>|<ul>|<\/ul>)/gim, "")
              .replace(/(<em[^>]+?>|<em>|<\/em>)/gim, "")
              .replace(/(<strong[^>]+?>|<strong>|<\/strong>)/gim, "")}
          </p>
        ) : (
          <textarea
            id="edit-container"
            onChange={this.changeDes}
            value={this.state.description}
          />
        )}
        <button
          id="delete-button"
          onClick={() => this.props.destroy(this.props.index)}
        >
          Delete Exercise
        </button>

        {!this.state.edit && (
          <button className="edit-button" onClick={this.toggleEdit}>
            Edit{" "}
          </button>
        )}
        {this.state.edit && (
          <button className="edit-button" onClick={this.save}>
            Save{" "}
          </button>
        )}
        <br />
      </div>
    );
  }
}
export default UnfilteredList;
