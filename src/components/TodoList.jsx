import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
}) {
  if (todos.length === 0) {
    return (
      <p className="text-muted">
        Chưa có công việc nào.
      </p>
    );
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}