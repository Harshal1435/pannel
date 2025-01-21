import React from 'react';
import '../CSS/home.css';

function Home() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Manufacturing Dashboard</h1>
      </header>

      <div className="overview-section">
        <h2>Overview</h2>
        <div className="card-container">
          <div className="card">
            <h3>Total Production</h3>
            <p>2000 Units</p>
          </div>
          <div className="card">
            <h3>Pending Orders</h3>
            <p>50 Orders</p>
          </div>
          <div className="card">
            <h3>Completed Orders</h3>
            <p>1950 Orders</p>
          </div>
        </div>
      </div>

      <div className="production-status-section">
        <h2>Production Status</h2>
        <table className="status-table">
          <thead>
            <tr>
              <th>Machine</th>
              <th>Status</th>
              <th>Last Maintenance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Machine 1</td>
              <td>Running</td>
              <td>2025-01-15</td>
            </tr>
            <tr>
              <td>Machine 2</td>
              <td>Idle</td>
              <td>2025-01-10</td>
            </tr>
            <tr>
              <td>Machine 3</td>
              <td>Under Maintenance</td>
              <td>2025-01-18</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="action-section">
        <h2>Actions</h2>
        <button className="action-btn">Start Production</button>
        <button className="action-btn">Pause Production</button>
        <button className="action-btn">View Reports</button>
      </div>
    </div>
  );
}

export default Home;
