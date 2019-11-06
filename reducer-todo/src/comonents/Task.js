import React from "react"



const Task = ({tasks, dispatch}) => {
    console.log(tasks)
    console.log(tasks.task)

    const toggleCompleted = id => {
        dispatch({type: "TOGGLE_COMPLETED", payload: id})
    }
return(
    <div className={tasks.completed ? 'completed:' : null}
    onClick={()=>toggleCompleted(tasks.id)}>
        <p>{tasks.task}</p>
    </div>
)
}

export default Task