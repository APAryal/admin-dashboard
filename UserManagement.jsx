import React, { useState } from "react";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "User",
      status: "Inactive",
    },
    // Add more user data here
  ]);

  const handleEdit = (index) => {
    // Add edit logic here
  };

  const handleDelete = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div className="user-management">
      <h1>User Management</h1>
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
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

export default UserManagement;
