import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import ProjectManagement from "./components/ProjectManagement";
import ErrorReporting from "./components/ErrorReporting";
import SystemMonitoring from "./components/SystemMonitoring";
import "./App.css";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "UserManagement":
        return <UserManagement />;
      case "ProjectManagement":
        return <ProjectManagement />;
      case "ErrorReporting":
        return <ErrorReporting />;
      case "SystemMonitoring":
        return <SystemMonitoring />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className="content">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default App;
