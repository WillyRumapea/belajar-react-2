import TaskAction from "./TaskAction";

export default function TaskItem({ task }) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.message}
      </p>
      <TaskAction task={task} />
    </div>
  );
}
