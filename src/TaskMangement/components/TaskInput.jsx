import { useContext } from "react";
import { useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskInput() {
  const [taskText, setTaskText] = useState("");
  const { dispatch } = useContext(TaskContext);

  function handleTaskText(e) {
    setTaskText(e.target.value);
  }

  function submitTask(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      message: taskText,
    });
    setTaskText("");
  }

  return (
    <div>
      <h2>Task Form</h2>
      <div>
        <form>
          <input type="text" onChange={handleTaskText} value={taskText} />
          <button onClick={submitTask}>add!!</button>
        </form>
      </div>
    </div>
  );
}
