import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/subcomponents/Header/Header";
import Home from "./components/Home";
import WorkoutList from "./components/WorkoutList/WorkoutList";
import CreateWorkout from "./components/CreateWorkout/CreateWorkout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/exercises" component={WorkoutList} />
          <Route path="/create" component={CreateWorkout} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
