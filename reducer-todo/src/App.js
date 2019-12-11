import React, { useReducer } from "react";
//components
import TaskList from "./comonents/TaskList";
import TaskForm from "./comonents/TaskForm";
//reducer
import { initialState, taskReducer } from "./reducers/taskReducer";
//styling
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <Container>
      <div>
        <TaskForm dispatch={dispatch} />
      </div>
      <div>
        <TaskList state={state} dispatch={dispatch} />
      </div>
    </Container>
  );
}

export default App;
