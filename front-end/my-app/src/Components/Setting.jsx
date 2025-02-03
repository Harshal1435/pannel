
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const [userSettings, setUserSettings] = useState({
    name: "",
    email: "",
    password: "", // Add password field to state
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  const [showPassword, setShowPassword] = useState(false); 
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState); // Toggle the visibility
  };
  // Use Effect to load user settings from the API
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("id");

    // Redirect to login if no token or user ID is found
    if (!token || !storedUserId) {
      setMessage("No user data found. Please log in again.");
      navigate("/auth");
      return;
    }

    const fetchUserSettings = async () => {
      try {
        const response = await fetch(`https://pannel-1.onrender.com/${storedUserId}/settings`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        // console.log(response.json());

        if (response.ok) {
          const data = await response.json();
          setUserSettings(data);
        } else {
          setMessage("Error fetching user settings.");
        }
      } catch (error) {
        console.error("Error fetching user settings:", error);
        setMessage("An error occurred while fetching settings.");
      }
    };

    fetchUserSettings();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSettings((prevSettings) => ({ ...prevSettings, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message on form submission
    setLoading(true); // Set loading state to true during the update process

    try {
      const token = localStorage.getItem("token");
      const storedUserId = localStorage.getItem("id");

      const response = await fetch(`https://pannel-1.onrender.com/${storedUserId}/settings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(userSettings),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message || "Settings updated successfully.");
      } else {
        const errorText = await response.text();
        setMessage(`Error: ${errorText}`);
      }
    } catch (error) {
      setMessage("An error occurred while updating settings.");
      console.error("Error during settings update:", error);
    } finally {
      setLoading(false); // Reset loading state after request completes
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update Settings</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userSettings.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userSettings.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'} // Change input type based on state
          id="password"
          name="password"
          value={userSettings.password}
          onChange={handleChange}
          placeholder="Enter new password (optional)"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
        >
          {showPassword ? 'Hide' : 'Show'} {/* Toggle button text */}
        </button>
      </div>
    </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md text-white ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Settings"}
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
    </div>
  );
}

export default Settings;
