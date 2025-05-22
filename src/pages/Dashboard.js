import React from 'react';
import '../styles/global.css';
import '../styles/dashboard.css'; // We'll add a few styles here

const UserDashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <h2>Welcome, {user?.name || "User"} 👋</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>My Profile</h3>
          <p>View and update your personal information.</p>
          <button className="btn-secondary">Go to Profile</button>
        </div>

        <div className="dashboard-card">
          <h3>My Listings</h3>
          <p>Check your posted properties or create a new one.</p>
          <button className="btn-secondary">Manage Listings</button>
        </div>

        <div className="dashboard-card">
          <h3>Settings</h3>
          <p>Adjust preferences and account settings.</p>
          <button className="btn-secondary">Go to Settings</button>
        </div>

        <div className="dashboard-card logout-card">
          <h3>Logout</h3>
          <p>Sign out of your account.</p>
          <button className="btn-danger">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
