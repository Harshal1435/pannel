import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Sidebar.css";

const Sidebar = ({ isCollapsed }) => {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="profile">
        {!isCollapsed && <h3>John David</h3>}
        {/* <span className="role">{!isCollapsed && "Manufacturer"}</span> */}
      </div>

      <nav className="menu">
        <Link to="/dashboard" className="menu-item">
          <i className="fas fa-home"></i> {!isCollapsed && "Dashboard"}
        </Link>
        <Link to="/dashboard/views" className="menu-item">
          <i className="fas fa-th"></i> {!isCollapsed && "Products"}
        </Link>
        <Link to="/dashboard/AddProduct" className="menu-item">
          <i className="fas fa-table"></i> {!isCollapsed && "AddProduct"}
        </Link>
        <Link to="/" className="menu-item">
          <i className="fas fa-cogs"></i> {!isCollapsed && "Settings"}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;  