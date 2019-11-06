import TaskList from "../comonents/TaskList";

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        task: action.payload,
        id: Date.now(),
        completed: false
      };
      console.log(action.payload)
      return [...state, newTask];
      case "TOGGLE_COMPLETED":
       let task = state.map(task=>{
          if(task.id === action.payload){
            return{...task, completed: !completed}
          } else {
            return task;
          }
        })
    default:
      return state;
  }
};

export const initialState = [
  {
    task: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];
