import { useState } from "react";

export default function TodoInput({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = () => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    onAddTodo(trimmedTitle, priority);

    setTitle("");
    setPriority("medium");
  };

  return (
    <div className="d-flex gap-2 mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Nhập công việc..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />

      <select
        className="form-select"
        style={{ maxWidth: "140px" }}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}