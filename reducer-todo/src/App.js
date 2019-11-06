import React, { useState, useReducer } from "react";
import TaskList from "./comonents/TaskList";
import TaskForm from "./comonents/TaskForm";
import { initialState, taskReducer } from "./reducers/taskReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  console.log(state)
  

  return (
    <div className="App">
      <TaskForm dispatch={dispatch}/>
      <TaskList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
