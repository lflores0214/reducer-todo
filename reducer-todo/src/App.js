import React, { useState, useReducer } from "react";
import TaskList from "./comonents/TaskList";
import TaskForm from "./comonents/TaskForm";
import { initialState, taskReducer } from "./reducers/taskReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  console.log(state)
  
  // const addTask = (e) => {
  //   dispatch({ type: "ADD_TASK", payload: task });
  //   e.preventDefault();
  // };

  return (
    <div className="App">
      <TaskForm dispatch={dispatch}/>
      <TaskList tasks={state} />
    </div>
  );
}

export default App;
