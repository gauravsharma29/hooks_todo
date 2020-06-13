import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  return {
    todos,
    addTodo: (newTodo) => {
      setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
    },
    removeTodo: (id) => {
      const data = todos.filter((item) => item.id !== id);
      setTodos(data);
    },
    toggleTodo: (id) => {
      const data = todos.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      });
      setTodos(data);
    },
    editTodo: (id, newTask) => {
      const data = todos.map((item) => {
        return item.id === id ? { ...item, task: newTask } : item;
      });
      setTodos(data);
    },
  };
};
