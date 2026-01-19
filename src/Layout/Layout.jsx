import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}
