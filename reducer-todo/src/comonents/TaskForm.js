import React, { useReducer, useState } from "react"
import { taskReducer, initialState } from "../reducers/taskReducer"

const TaskForm = ({dispatch}) => {
    const [newTask, setNewTask] = useState("");
    
    
    
   const handleChange = e =>{
       setNewTask(e.target.value);
       
    }
    const addTask = (e) => {
        e.preventDefault();
        console.log(newTask)
        dispatch({ type: "ADD_TASK", payload: newTask });
        setNewTask('')
      };
    
return(
    <form>
        <label htmlFor="task">Add Task</label>
        <input 
        type="text" name="task" id="task" value={newTask} onChange={handleChange} />
        <button onClick={addTask} >Add Task</button>
    </form>
)
}

export default TaskForm