import React, { Component } from "react";

class NewTaskGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  handleOnChange = (event) => {
    event.stopPropagation();
    this.setState({ task: event.target.value });
  };

  render() {
    return (
      <>
        <input
          type='text'
          placeholder='Type your task here'
          onChange={this.handleOnChange}
          value={this.state.task}
        />

        <button onClick={() => this.props.updateListOfTasks(this.state.task)}>
          Add Task
        </button>
      </>
    );
  }
}

export default NewTaskGenerator;
