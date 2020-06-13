import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "TOGGLE":
      return state.map((item) => {
        return item.id === action.id
          ? { ...item, completed: !item.completed }
          : item;
      });
    case "EDIT":
      return state.map((item) => {
        return item.id === action.id ? { ...item, task: action.task } : item;
      });
    default:
      return state;
  }
};

export default reducer;
