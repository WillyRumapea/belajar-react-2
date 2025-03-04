import { v4 } from "uuid";

export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = [
        ...state,
        {
          id: v4(),
          message: action.message,
          completed: false,
        },
      ];
      console.log(newTask);
      return newTask;
    }
    case "TOGGLE_TASK": {
      const toggle = state.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
      return toggle;
    }
    case "REMOVE_TASK": {
      const removeTask = state.filter((task) => task.id !== action.id);
      return removeTask;
    }
    default:
      return state;
  }
}
