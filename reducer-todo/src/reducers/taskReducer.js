

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
       return state.map(task=>{
         return task.id === action.payload ? {...task, completed: !task.completed} : task;
        });
        case "CLEAR_COMPLETED":
          return state.filter(task => {
            return task.completed === false;
          });
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
