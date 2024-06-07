import React from "react";
import {
  FaDashboard,
  FaUser,
  FaProjectDiagram,
  FaBug,
  FaCog,
} from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = ({ setActiveComponent }) => {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => setActiveComponent("Dashboard")}>
          <FaDashboard /> Dashboard
        </li>
        <li onClick={() => setActiveComponent("UserManagement")}>
          <FaUser /> User Management
        </li>
        <li onClick={() => setActiveComponent("ProjectManagement")}>
          <FaProjectDiagram /> Project Management
        </li>
        <li onClick={() => setActiveComponent("ErrorReporting")}>
          <FaBug /> Error Reporting
        </li>
        <li onClick={() => setActiveComponent("SystemMonitoring")}>
          <MdMonitor /> System Monitoring
        </li>
        <li>
          <FaCog /> Settings
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
