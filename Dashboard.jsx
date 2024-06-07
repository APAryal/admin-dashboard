import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    {
      country: "USA",
      users: 120,
      projects: 50,
    },
    {
      country: "Germany",
      users: 80,
      projects: 30,
    },
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard Overview</h1>
      <div className="widgets">
        <div className="widget">Total Users: 200</div>
        <div className="widget">Active Projects: 80</div>
        <div className="widget">Errors Reported: 150</div>
        <div className="widget">Errors Resolved: 120</div>
      </div>
      <div className="charts">
        <div className="chart">
          <h2>Error Trends Over Time</h2>
          <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            axisBottom={{
              orient: "bottom",
              legend: "Country",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              legend: "Users",
              legendOffset: -40,
              legendPosition: "middle",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
