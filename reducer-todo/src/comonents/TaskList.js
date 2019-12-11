import React from "react";
import Task from "./Task";
import styled from "styled-components";

const ListContainer = styled.div`
  height: 60vh;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
`;

const Button = styled.button`
width: 350px;
height:50px;
border-radius:5px
background-color:#242c3c
color:#e0dbd1;
font-family: 'Rock Salt', cursive;
margin-bottom:5%;
font-size: 1.2rem;
align-self: flex-end;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskList = ({ state, dispatch }) => {
  console.log(state);

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <Container>
      <ListContainer>
        {state.map(task => (
          <Task tasks={task} dispatch={dispatch} />
        ))}
      </ListContainer>
      <Button onClick={() => clearCompleted()}>Clear Completed</Button>
    </Container>
  );
};

export default TaskList;
