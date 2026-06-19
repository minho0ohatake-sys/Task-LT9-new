import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats";


export default function TodoPanel() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Học React",
            completed: false,
            priority: "high",
        },
    ]);

    const [filter, setFilter] = useState("all");

    const handleAddTodo = (title, priority) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
            priority,
        };

        setTodos([...todos, newTodo]);
    };

    const handleToggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                        ...todo,
                        completed: !todo.completed,
                    }
                    : todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        );
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") {
            return !todo.completed;
        }

        if (filter === "completed") {
            return todo.completed;
        }

        return true;
    });

    const total = todos.length;
    const completed = todos.filter(
        (todo) => todo.completed
    ).length;
    const remaining = total - completed;
    const handleEditTodo = (id, newTitle) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                        ...todo,
                        title: newTitle,
                    }
                    : todo
            )
        );
    };

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="fw-bold fs-3 mb-4">
                    Todo Panel
                </h2>

                <TodoInput
                    onAddTodo={handleAddTodo}
                />

                <div className="d-flex gap-2 mb-3">
                    <button
                        className={`btn ${filter === "all"
                            ? "btn-primary"
                            : "btn-outline-primary"
                            }`}
                        onClick={() => setFilter("all")}
                    >
                        All
                    </button>

                    <button
                        className={`btn ${filter === "active"
                            ? "btn-primary"
                            : "btn-outline-primary"
                            }`}
                        onClick={() => setFilter("active")}
                    >
                        Active
                    </button>

                    <button
                        className={`btn ${filter === "completed"
                            ? "btn-primary"
                            : "btn-outline-primary"
                            }`}
                        onClick={() => setFilter("completed")}
                    >
                        Completed
                    </button>
                </div>

                <TodoList
                    todos={filteredTodos}
                    onToggle={handleToggleComplete}
                    onDelete={handleDeleteTodo}
                    onEdit={handleEditTodo}
                />

                <TodoStats
                    total={total}
                    completed={completed}
                    remaining={remaining}
                />
            </div>
        </div>
    );
}