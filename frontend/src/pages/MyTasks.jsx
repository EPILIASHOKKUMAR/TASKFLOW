
import { useState } from "react";

function MyTasks({ tasks, onToggle, onDelete }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Pending" && !task.completed) ||
      (filter === "Completed" && task.completed);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="page-content">

      <div className="page-heading">
        <p className="welcome">WORKSPACE / TASKS</p>
        <h1>My Tasks</h1>
        <p>View and manage all your tasks here.</p>
      </div>

      <div className="task-toolbar">
        <input
          type="search"
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="task-list-card">

        {filteredTasks.length === 0 ? (
          <div className="empty-message">
            <h3>No tasks found</h3>
            <p>Add a task or change your search filter.</p>
          </div>
        ) : (
          filteredTasks.map(task => (
            <div className="task-row" key={task.id}>

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />

              <div className="task-details">
                <h3 className={task.completed ? "done" : ""}>
                  {task.title}
                </h3>

                <p>
                  {task.category}
                  {task.description
                    ? ` · ${task.description}`
                    : ""}
                </p>
              </div>

              <span className={`priority ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>

              <span className="due-date">
                {task.dueDate || "No due date"}
              </span>

              <button
                className="delete-button"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default MyTasks;
