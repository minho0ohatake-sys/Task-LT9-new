import { useState } from "react";

export default function CounterPanel() {
    const [counters, setCounters] = useState([]);

    const MIN = -10;
    const MAX = 10;

    const handleAddCounter = () => {
        const newCounter = {
            id: Date.now(),
            label: `Counter ${counters.length + 1}`,
            count: 0,
            step: 1,
        };

        setCounters([...counters, newCounter]);
    };

    const handleIncrease = (id) => {
        setCounters(
            counters.map((counter) =>
                counter.id === id &&
                    counter.count + counter.step <= MAX
                    ? {
                        ...counter,
                        count:
                            counter.count +
                            counter.step,
                    }
                    : counter
            )
        );
    };

    const handleDecrease = (id) => {
        setCounters(
            counters.map((counter) =>
                counter.id === id &&
                    counter.count - counter.step >= MIN
                    ? {
                        ...counter,
                        count:
                            counter.count -
                            counter.step,
                    }
                    : counter
            )
        );
    };

    const handleReset = (id) => {
        setCounters(
            counters.map((counter) =>
                counter.id === id
                    ? { ...counter, count: 0 }
                    : counter
            )
        );
    };

    const handleRemove = (id) => {
        setCounters(
            counters.filter(
                (counter) => counter.id !== id
            )
        );
    };

    const handleStepChange = (id, step) => {
        setCounters(
            counters.map((counter) =>
                counter.id === id
                    ? { ...counter, step }
                    : counter
            )
        );
    };

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="fw-bold mb-4">
                    Multi Counter Panel
                </h2>

                <button
                    className="btn btn-primary mb-4"
                    onClick={handleAddCounter}
                >
                    Add New Counter
                </button>

                {counters.length === 0 && (
                    <p className="text-muted">
                        Chưa có counter nào
                    </p>
                )}

                {counters.map((counter) => (
                    <div
                        key={counter.id}
                        className="card mb-3"
                    >
                        <div className="card-body">
                            <h5>{counter.label}</h5>

                            <h2 className="my-3">
                                {counter.count}
                            </h2>

                            <div className="mb-3">
                                <label className="form-label">
                                    Step
                                </label>

                                <select
                                    className="form-select"
                                    value={counter.step}
                                    onChange={(e) =>
                                        handleStepChange(
                                            counter.id,
                                            Number(
                                                e.target
                                                    .value
                                            )
                                        )
                                    }
                                >
                                    <option value={1}>
                                        1
                                    </option>
                                    <option value={5}>
                                        5
                                    </option>
                                    <option value={10}>
                                        10
                                    </option>
                                </select>
                            </div>

                            <div className="d-flex gap-2">
                                <button
                                    className="btn btn-success"
                                    onClick={() =>
                                        handleIncrease(
                                            counter.id
                                        )
                                    }
                                >
                                    +
                                </button>

                                <button
                                    className="btn btn-warning"
                                    onClick={() =>
                                        handleDecrease(
                                            counter.id
                                        )
                                    }
                                >
                                    -
                                </button>

                                <button
                                    className="btn btn-secondary"
                                    onClick={() =>
                                        handleReset(
                                            counter.id
                                        )
                                    }
                                >
                                    Reset
                                </button>

                                <button
                                    className="btn btn-danger ms-auto"
                                    onClick={() =>
                                        handleRemove(
                                            counter.id
                                        )
                                    }
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}