// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import "./index.css";
// // import Dashboard from "../src/Components/Dashboard";
// // import Views from "./Components/Views";
// // import LoginForm from "./Components/LoginForm";
// // import SignUpForm from "./Components/SignUpForm";
// // import LoginImage from "./Components/LoginImage";

// // function App() {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login status
// //   const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

// //   const handleAuthentication = () => {
// //     setIsAuthenticated(true); // Set authenticated status to true
// //   };

// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Login/Signup Page */}
// //         <Route
// //           path="/auth"
// //           element={
// //             <div className="form-wrapper">
// //               <div className="form-container">
// //                 <LoginImage />
// //                 <div className="form-content">
// //                   {isLogin ? (
// //                     <LoginForm toggleForm={() => setIsLogin(false)} onLoginSuccess={handleAuthentication} />
// //                   ) : (
// //                     <SignUpForm toggleForm={() => setIsLogin(true)} />
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           }
// //         />

// //         {/* Dashboard Page */}
// //         <Route
// //           path="/dashboard"
// //           element={
// //             isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />
// //           }
// //         />

// //         {/* Views Page */}
// //         <Route
// //           path="/views"
// //           element={
// //             isAuthenticated ? <Views /> : <Navigate to="/auth" />
// //           }
// //         />

// //         {/* Default Redirect */}
// //         <Route path="*" element={<Navigate to="/auth" />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "./index.css";
// import Dashboard from "../src/Components/Dashboard";
// import Views from "./Components/Views";
// import LoginForm from "./Components/LoginForm";
// import SignUpForm from "./Components/SignUpForm";
// import LoginImage from "./Components/LoginImage";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login status
//   const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

//   return (
//     <Router>
//       <Routes>
//         {/* Login/Signup Page */}
//         <Route
//           path="/auth"
//           element={
//             <div className="form-wrapper">
//               <div className="form-container">
//                 <LoginImage />
//                 <div className="form-content">
//                   {isLogin ? (
//                     <LoginForm
//                       toggleForm={() => setIsLogin(false)}
//                       onLoginSuccess={() => setIsAuthenticated(true)}
//                     />
//                   ) : (
//                     <SignUpForm toggleForm={() => setIsLogin(true)} />
//                   )}
//                 </div>
//               </div>
//             </div>
//           }
//         />

//         {/* Dashboard Page */}
//         <Route
//           path="/dashboard"
//           element={
//             isAuthenticated ? <Dashboard /> : <Navigate to="/auth" replace />
//           }
//         />

//         {/* Views Page */}
//         <Route
//           path="/views"
//           element={
//             isAuthenticated ? <Views /> : <Navigate to="/auth" replace />
//           }
//         />

//         {/* Default Redirect */}
//         <Route path="*" element={<Navigate to="/auth" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Dashboard from "./Components/Dashboard"; // Main Dashboard Component
import Views from "./Components/Views"; // Views Page
import LoginForm from "./Components/LoginForm"; // Login Form Component
import SignUpForm from "./Components/SignUpForm"; // Signup Form Component
import LoginImage from "./Components/LoginImage"; // Login Side Image Component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks login status
  const [isLogin, setIsLogin] = useState(true); // Toggles between login and signup forms

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Set authenticated status to true upon login success
  };

  return (
    <Router>
      <Routes>
        {/* Login/Signup Page */}
        <Route
          path="/auth"
          element={
            <div className="form-wrapper">
              <div className="form-container">
                {/* Side Image */}
                <LoginImage />

                {/* Login or Signup Form */}
                <div className="form-content">
                  {isLogin ? (
                    <LoginForm
                      toggleForm={() => setIsLogin(false)} // Switch to Signup Form
                      onLoginSuccess={handleLoginSuccess} // Trigger login success handler
                    />
                  ) : (
                    <SignUpForm
                      toggleForm={() => setIsLogin(true)} // Switch to Login Form
                    />
                  )}
                </div>
              </div>
            </div>
          }
        />

        {/* Dashboard Page */}
        <Route
          path="/dashboard/*"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/auth" replace /> // Redirect to Login/Signup if not authenticated
            )
          }
        />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}

export default App;



