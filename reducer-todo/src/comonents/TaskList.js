import React from "react";
import Task from "./Task";

const TaskList = ({state,dispatch}) => {
    console.log(state)

    const clearCompleted = () => {
        dispatch({type: "CLEAR_COMPLETED"})
    }

  return (
    <div>
        {state.map(task =>(
            <Task tasks={task} dispatch={dispatch}/>
        ))}
      <button onClick={()=> clearCompleted()} >Clear Completed</button>
    </div>
  );
};

export default TaskList;
