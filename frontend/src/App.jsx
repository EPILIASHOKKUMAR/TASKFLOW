
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import MyTasks from "./pages/MyTasks";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as removeTask
} from "./services/taskService";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load tasks from backend
  useEffect(() => {
    async function loadTasks() {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        setError("Unable to load tasks. Check your backend.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadTasks();
  }, []);

  // Add task to database
  async function addTask(newTask) {
    const savedTask = await createTask(newTask);

    setTasks(previous => [savedTask, ...previous]);
  }

  // Update completion status
  async function toggleTask(id) {
    const currentTask = tasks.find(task => task.id === id);

    if (!currentTask) return;

    const updatedTask = {
      ...currentTask,
      completed: !currentTask.completed
    };

    const savedTask = await updateTask(id, updatedTask);

    setTasks(previous =>
      previous.map(task =>
        task.id === id ? savedTask : task
      )
    );
  }

  // Delete task from database
  async function handleDeleteTask(id) {
    await removeTask(id);

    setTasks(previous =>
      previous.filter(task => task.id !== id)
    );
  }

  if (loading) {
    return <div className="page-content">Loading tasks...</div>;
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">

        {error && <p>{error}</p>}

        <Routes>
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard tasks={tasks} />}
          />

          <Route
            path="/add-task"
            element={<AddTask onAddTask={addTask} />}
          />

          <Route
            path="/my-tasks"
            element={
              <MyTasks
                tasks={tasks}
                onToggle={toggleTask}
                onDelete={handleDeleteTask}
              />
            }
          />

          <Route
            path="*"
            element={<Navigate to="/dashboard" replace />}
          />
        </Routes>

      </main>
    </div>
  );
}

export default App;