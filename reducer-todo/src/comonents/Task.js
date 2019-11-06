import React from "react"



const Task = (props) => {
    console.log(props)
    console.log(props.tasks)
return(
    <div className={props.tasks.completed ? 'completed:' : null}>
        <p>{props.tasks.task}</p>
    </div>
)
}

export default Task