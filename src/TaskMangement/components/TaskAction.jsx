import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskAction({ task }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "TOGGLE_TASK", id: task.id })}>
        {task.completed ? "batal" : "selesai"}
      </button>
      <button onClick={() => dispatch({ type: "REMOVE_TASK", id: task.id })}>
        hapus
      </button>
    </div>
  );
}
