
function Dashboard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  const progress = total
    ? Math.round((completed / total) * 100)
    : 0;

  return (
    <div className="page-content">

      <div className="page-heading">
        <p className="welcome">WORKSPACE / OVERVIEW</p>
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your productivity overview.</p>
      </div>

      <section className="about-card">
        <h2>Welcome to TaskFlow 👋</h2>
        <p>
          TaskFlow helps you organize your daily activities,
          manage priorities and track your productivity
          in one place.
        </p>
      </section>

      <h2 className="section-title">Your Overview</h2>

      <div className="stats-grid">

        <div className="stat-card">
          <p>Total Tasks</p>
          <h2>{total}</h2>
          <span>All your tasks</span>
        </div>

        <div className="stat-card">
          <p>Pending Tasks</p>
          <h2>{pending}</h2>
          <span>Tasks to complete</span>
        </div>

        <div className="stat-card">
          <p>Completed Tasks</p>
          <h2>{completed}</h2>
          <span>Successfully finished</span>
        </div>

        <div className="stat-card">
          <p>Progress</p>
          <h2>{progress}%</h2>
          <span>Overall completion</span>
        </div>

      </div>

      <section className="progress-card">
        <h3>Overall Productivity</h3>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p>{progress}% of your tasks completed.</p>
      </section>

    </div>
  );
}

export default Dashboard;
