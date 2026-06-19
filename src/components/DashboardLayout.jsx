import CounterPanel from "./CounterPanel";
import TodoPanel from "./TodoPanel";

export default function DashboardLayout() {
  return (
    <div
      className="min-vh-100 bg-light py-4"
      style={{ backgroundColor: "#f5f6fa" }}
    >
      <div className="container">
        <header className="text-center mb-5">
          <h1 className="fw-bold display-5">
            Productivity Dashboard
          </h1>
        </header>

        <main className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <CounterPanel />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <TodoPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}