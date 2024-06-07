import React, { useState } from "react";
import "./ProjectManagement.css";

const ProjectManagement = () => {
  const [projects, setProjects] = useState([
    {
      name: "Project Alpha",
      owner: "John Doe",
      status: "Active",
      lastUpdated: "2024-06-01",
    },
    {
      name: "Project Beta",
      owner: "Jane Smith",
      status: "Inactive",
      lastUpdated: "2024-05-25",
    },
    // Add more project data here
  ]);

  const handleEdit = (index) => {
    // Add edit logic here
  };

  const handleDelete = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  return (
    <div className="project-management">
      <h1>Project Management</h1>
      <div className="project-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>{project.owner}</td>
                <td>{project.status}</td>
                <td>{project.lastUpdated}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectManagement;
