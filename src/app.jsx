import React, { useState } from "react";
import "./App.css";
// Importing Components
import Form from './components/form'
import TodoList from './components/TodoList'
// import NewTaskGenerator from "./components/new-task-generator";
// import ListOfTasks from "./components/list-of-tasks";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>TO-DO List App</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       listOfTasks: [],
//       listOfCompleted: [],
//     };
//   }

//   updateListOfTasks = (newTask) => {
//     this.setState({ listOfTasks: [...this.state.listOfTasks, newTask] });
//   };

//   render() {
//     return (
//       <div className='my-container'>
//         <NewTaskGenerator updateListOfTasks={this.updateListOfTasks} />
//         <ListOfTasks listOfTasks={this.state.listOfTasks} />
//       </div>
//     );
//   }
// }

export default App;
