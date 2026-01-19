import { Link } from "react-router-dom";
import "./Sidebar.css";
import userImg from "../assets/react.svg";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* User Profile */}
      <div className="sidebar-profile">
        <img
          src={userImg}
          alt="User profile"
          className="profile-image"
        />
        <h2 className="profile-name">User Name</h2>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="income" className="nav-link">Income</Link>
        <Link to="expense" className="nav-link">Expenses</Link>
        <Link to="logout" className="nav-link logout">Logout</Link>
      </nav>
    </aside>
  );
}
