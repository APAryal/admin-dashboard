import React from "react";
import "./ErrorReporting.css";

const ErrorReporting = () => {
  const errors = [
    {
      code: "ERR001",
      description: "Null Pointer Exception",
      status: "Reported",
      reportedDate: "2024-06-01",
    },
    {
      code: "ERR002",
      description: "Index Out of Bounds",
      status: "Resolved",
      reportedDate: "2024-06-02",
    },
    // Add more error data here
  ];

  return (
    <div className="error-reporting">
      <h1>Error Reporting</h1>
      <div className="error-list">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Description</th>
              <th>Status</th>
              <th>Reported Date</th>
            </tr>
          </thead>
          <tbody>
            {errors.map((error, index) => (
              <tr key={index}>
                <td>{error.code}</td>
                <td>{error.description}</td>
                <td>{error.status}</td>
                <td>{error.reportedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ErrorReporting;
