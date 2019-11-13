export let today = new Date();
export let date = `${today.getFullYear()}-${today.getMonth() +
  1}-${today.getDate()}`;
export let dateFormat = `${today.getMonth() +
  1}-${today.getDate()}-${today.getFullYear()}`;

export const taskReducer = (state, action) => {
  switch (action.type) {
    
    
    case "ADD_TASK":
      const newTask = {
        task: action.payload.newTask,
        id: Date.now(),
        completed: false,
        finBy: action.payload.finBy
      };
      console.log(action.payload);
      return [...state, newTask];
    
    
    
    
      case "TOGGLE_COMPLETED":
      return state.map(task => {
        return task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task;
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
    finBy: "10-31-2019",
    id: 3892987589
  }
];
