export default function CounterControls({
  step,
  onIncrease,
  onDecrease,
  onReset,
}) {
  return (
    <div className="d-flex gap-2 mb-3">
      <button
        className="btn btn-success"
        onClick={onIncrease}
      >
        +{step}
      </button>

      <button
        className="btn btn-warning"
        onClick={onDecrease}
      >
        -{step}
      </button>

      <button
        className="btn btn-secondary"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}