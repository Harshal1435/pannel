// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../CSS/login.css";

// function LoginForm({ toggleForm, onLoginSuccess }) {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await fetch("https://pannel-1.onrender.com/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setMessage("Login successful!");
//         setFormData({ email: "", password: "" });
//         onLoginSuccess(); // Notify parent about authentication
//         navigate("/dashboard"); // Redirect to Dashboard
//       } else {
//         const errorText = await response.text();
//         setMessage(`Error: ${errorText}`);
//       }
//     } catch (error) {
//       setMessage("An error occurred. Please try again later.");
//       console.error("Error during login:", error);
//     }
//   };

//   return (
//     <div className="login-form-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn">Login</button>
//       </form>
//       {message && <p className="message">{message}</p>}
//       <p>
//         Don't have an account?{" "}
//         <a href="#" onClick={toggleForm}>
//           Sign Up
//         </a>
//       </p>
//     </div>
//   );
// }

// export default LoginForm;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/login.css";

function LoginForm({ toggleForm, onLoginSuccess }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("https://pannel-1.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        const { token, role } = data; // Extract token and role from response

        // Store the token in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("role", role); // Optional: store the role if needed

        setMessage("Login successful!");
        setFormData({ email: "", password: "" });
        onLoginSuccess(); // Notify parent about authentication

        // Redirect based on user role (if applicable)
        if (role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/dashboard");
        }
      } else {
        const errorText = await response.text();
        if (response.status === 401) {
          setMessage("Invalid email or password. Please try again.");
        } else {
          setMessage(`Error: ${errorText}`);
        }
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p>
        Don't have an account?{" "}
        <a href="#" onClick={toggleForm}>
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default LoginForm;

