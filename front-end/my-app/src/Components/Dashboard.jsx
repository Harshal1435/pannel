// import React, { useState } from "react";
// import { Link, Route, Routes, useLocation } from "react-router-dom";
// import "../CSS/Sidebar.css"; // Import CSS
// import Modal from "../Components/Modal"; // Modal component for "Add"
// import Views from "../Components/Views"; // Views component for "View"
// import DashboardHome from "../Components/Dashboard"; // Create a Dashboard Home component

// function Dashbord() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <div className="container">
//       {/* Sidebar */}
//       <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
//         <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//           ☰
//         </button>

//         {/* Profile Section */}
//         <div className="profile">
//           <img src="https://via.placeholder.com/100" alt="Profile" className="profile-img" />
//           {isSidebarOpen && (
//             <div className="profile-info">
//               <h5>John David</h5>
//               <span className="status">Online</span>
//             </div>
//           )}
//         </div>

//         {/* Navigation Menu */}
//         <nav className="menu">
//           <Link to="/dashboard" className="menu-item">
//             <i className="fas fa-home"></i> {isSidebarOpen && "Dashboard"}
//           </Link>
//           <Link to="/dashboard/views" className="menu-item">
//             <i className="fas fa-th"></i> {isSidebarOpen && "Views"}
//           </Link>
//           <button className="sidebar-button menu-item" onClick={() => setIsModalOpen(true)}>
//             <i className="fas fa-layer-group"></i> {isSidebarOpen && "Add Products"}
//           </button>
//           <Link to="/dashboard/tables" className="menu-item">
//             <i className="fas fa-table"></i> {isSidebarOpen && "Tables"}
//           </Link>
//           <Link to="/dashboard/apps" className="menu-item">
//             <i className="fas fa-cogs"></i> {isSidebarOpen && "Apps"}
//           </Link>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="dashboard-container">
//         <Routes>
//           {/* Dashboard Home */}
//           <Route path="/dashboard" element={<DashboardHome />} />

//           {/* View Page */}
//           <Route path="/views" element={<Views />} />

//           {/* Add more routes as needed */}
//         </Routes>
//       </div>

//       {/* Modal Component */}
//       <Modal isModalOpen={isModalOpen} handleCloseModal={() => setIsModalOpen(false)} />
//     </div>
//   );
// }

// export default Dashbord;


import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Components/Sidebar"; // Sidebar Component
 // Dashboard Home Component
 import Home from "../Components/Home";
import Views from "../Components/Views";
import "../CSS/new.css" // Views Component
import Header from "../Components/Header"
import Modal from "../Components/Modal";
import Setting from "../Components/Setting";



const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} />

      {/* Main Area */}
      <div className={`main-area ${isSidebarCollapsed ? "collapsed" : ""}`}>
        {/* Header */}
        <Header onToggleSidebar={toggleSidebar} />

        {/* Content */}
        <div className="content">
          
        <Routes>
          {/* Dashboard Home */}
          <Route path="/" element={<Home />} />

         {/* View Page */}
          <Route path="/views" element={<Views />} />

          {/* Add more routes as needed */}
          <Route path="/AddProduct" element={<Modal />} />
          <Route path="/Setting" element={<Setting />} />

        </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
