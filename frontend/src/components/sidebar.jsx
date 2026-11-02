
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">
        Task<span>Flow.</span>
      </h2>

      <p className="menu-label">WORKSPACE</p>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="nav-item">
          <span>▦</span> Dashboard
        </NavLink>

        <NavLink to="/add-task" className="nav-item">
          <span>＋</span> Add Task
        </NavLink>

        <NavLink to="/my-tasks" className="nav-item">
          <span>☑</span> My Tasks
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <h4>TaskFlow v1.0</h4>
        <p>Manage your day better.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
