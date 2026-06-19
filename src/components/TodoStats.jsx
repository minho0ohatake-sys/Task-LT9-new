export default function TodoStats({
  total,
  completed,
  remaining,
}) {
  return (
    <div className="mt-3 border-top pt-3">
      <h5>Statistics</h5>

      <p className="mb-1">
        <strong>Total:</strong> {total}
      </p>

      <p className="mb-1">
        <strong>Completed:</strong> {completed}
      </p>

      <p className="mb-0">
        <strong>Remaining:</strong> {remaining}
      </p>
    </div>
  );
}