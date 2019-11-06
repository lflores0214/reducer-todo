import React from "react";
import Task from "./Task";

const TaskList = (props) => {
    console.log(props.tasks)
  return (
    <div>
        {props.tasks.map(task =>(
            <Task tasks={task} />
        ))}
      
    </div>
  );
};

export default TaskList;
