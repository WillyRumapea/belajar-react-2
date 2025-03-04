import { useReducer, createContext } from "react";
import { taskReducer } from "./TaskReducer";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <>
      <TaskContext.Provider value={{ tasks, dispatch }}>
        {children}
      </TaskContext.Provider>
    </>
  );
}
