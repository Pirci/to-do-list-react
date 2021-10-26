import React, { Component } from "react";
import _ from "lodash";

import "./App.css";
import NewTaskGenerator from "./components/new-task-generator";
import ListOfTasks from "./components/list-of-tasks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfTasks: [],
      listOfCompleted: [],
    };
  }

  updateListOfTasks = (newTask) => {
    this.setState({ listOfTasks: [...this.state.listOfTasks, newTask] });
  };

  render() {
    return (
      <div className='my-container'>
        
        <NewTaskGenerator updateListOfTasks={this.updateListOfTasks} />
        <ListOfTasks listOfTasks={this.state.listOfTasks} />
      </div>
    );
  }
}

export default App;
