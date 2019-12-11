import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  font-family: "Rock Salt", cursive;
  font-size: 2rem;
  color: #e0dbd1;
`;
const Input = styled.input`
font-family: 'Rock Salt', cursive;
width:90%;
height: 50px
background-color: #15534a;
color:#e0dbd1
font-size:1.2rem;
text-align:center;
`;

const Button = styled.button`
width: 150px;
height:30px;
border-radius:5px
background-color:#242c3c
color:#e0dbd1;
font-family: 'Rock Salt', cursive;
margin-top:2%;
`;

const TaskForm = ({ dispatch }) => {
  const [newTask, setNewTask] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleChange = e => {
    setNewTask(e.target.value);
  };
  const addTask = e => {
    e.preventDefault();
    console.log(newTask);
    dispatch({
      type: "ADD_TASK",
      payload: { newTask: newTask, finBy: newDate }
    });
    setNewTask("");
  };
  const handleDate = e => {
    setNewDate(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Form>
      <Label htmlFor="task">To Do List</Label>
      <Input
        type="text"
        name="task"
        id="task"
        value={newTask}
        onChange={handleChange}
      />

      <Input
        type="date"
        name="task-date"
        id="task-date"
        value={newDate}
        onChange={handleDate}
      />
      <Button onClick={addTask}>Add Task</Button>
    </Form>
  );
};

export default TaskForm;
