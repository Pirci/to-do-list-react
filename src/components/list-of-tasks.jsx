import React, { Component } from "react";

class ListOfTasks extends Component {
  render() {
    return (
      <>
        {this.props.listOfTasks.map((task, index) => {
          return <div key={index}>{task}</div>;
        })}
      </>
    );
  }
}

export default ListOfTasks;
