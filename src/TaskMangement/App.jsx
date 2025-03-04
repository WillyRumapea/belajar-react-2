import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <h1>Management Task</h1>
      <TaskInput />
      <TaskList />
    </TaskProvider>
  );
}
