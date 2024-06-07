import React from "react";
import "./SystemMonitoring.css";

const SystemMonitoring = () => {
  const metrics = [
    { name: "Server Health", value: "Good" },
    { name: "API Response Times", value: "120ms" },
    { name: "Error Rates", value: "1%" },
    // Add more metrics data here
  ];

  return (
    <div className="system-monitoring">
      <h1>System Monitoring</h1>
      <div className="metrics-list">
        <ul>
          {metrics.map((metric, index) => (
            <li key={index}>
              <span className="metric-name">{metric.name}:</span>
              <span className="metric-value">{metric.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SystemMonitoring;
