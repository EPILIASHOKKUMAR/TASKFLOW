
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask({ onAddTask }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Development",
    priority: "Medium",
    dueDate: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm(previous => ({
      ...previous,
      [name]: value
    }));
  }
  async function handleSubmit(e) {
  e.preventDefault();

  try {
    await onAddTask({
      ...form,
      completed: false
    });

    navigate("/my-tasks");

  } catch (error) {
    console.error("Failed to create task:", error);
    alert("Unable to save task. Please try again.");
  }
}
  return (
    <div className="page-content">

      <div className="page-heading">
        <p className="welcome">WORKSPACE / CREATE</p>
        <h1>Add New Task</h1>
        <p>Create a task and organize your work.</p>
      </div>

      <form className="add-task-card" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Task Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter task title"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your task"
            rows="4"
          />
        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option>Development</option>
              <option>Learning</option>
              <option>Personal</option>
              <option>Work</option>
            </select>
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

        </div>

        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </button>

          <button type="submit" className="primary-button">
            Create Task
          </button>
        </div>

      </form>
    </div>
  );
}

export default AddTask;
