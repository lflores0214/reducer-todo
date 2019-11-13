import React from "react";
import styled from "styled-components";
const Container = styled.div`
width:22vw;
margin:0 auto;
height:100px
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items: flex-start
flex-wrap: wrap;
align-self:flex-start;
text-align:center;
`;
const P = styled.p`
  font-family: "Rock Salt", cursive;
  font-size: 1.6rem;
  color: #e0dbd1;
`;

const Task = ({ tasks, dispatch }) => {
  console.log(tasks);
  console.log(tasks.task);

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };
  return (
    <Container>
      <P
        className={tasks.completed ? "completed" : null}
        onClick={() => toggleCompleted(tasks.id)}
      >
        -{tasks.task}
      </P>
      <P>Finish By:<br/> {tasks.finBy}</P>
    </Container>
  );
};

export default Task;
