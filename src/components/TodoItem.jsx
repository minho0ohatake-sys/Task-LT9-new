import { useState } from "react";

export default function TodoItem({
    todo,
    onToggle,
    onDelete,
    onEdit,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleSave = () => {
        const trimmed = editTitle.trim();

        if (!trimmed) {
            setEditTitle(todo.title);
        } else {
            onEdit(todo.id, trimmed);
        }

        setIsEditing(false);
    };

    const getPriorityBadge = () => {
        switch (todo.priority) {
            case "high":
                return (
                    <span className="badge bg-danger">
                        High
                    </span>
                );

            case "medium":
                return (
                    <span className="badge bg-warning text-dark">
                        Medium
                    </span>
                );

            default:
                return (
                    <span className="badge bg-success">
                        Low
                    </span>
                );
        }
    };

    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-center ${todo.priority === "high"
                    ? "border-start border-4 border-danger"
                    : ""
                }`}
        >
            <div className="d-flex align-items-center gap-2 flex-grow-1">

                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />

                {getPriorityBadge()}

                {isEditing ? (
                    <input
                        autoFocus
                        className="form-control"
                        value={editTitle}
                        onChange={(e) =>
                            setEditTitle(e.target.value)
                        }
                        onBlur={handleSave}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSave();
                            }
                        }}
                    />
                ) : (
                    <span
                        role="button"
                        onClick={() => setIsEditing(true)}
                        className={`flex-grow-1 ${todo.completed
                                ? "text-decoration-line-through text-secondary opacity-75"
                                : ""
                            }`}
                        style={{
                            transition: "all 0.2s ease",
                        }}
                    >
                        {todo.title}
                    </span>
                )}
            </div>

            <button
                className="btn btn-sm btn-danger ms-2"
                onClick={() => onDelete(todo.id)}
            >
                Delete
            </button>
        </li>
    );
}