import React, { useState } from 'react';
import '../CSS/new.css';

function SignUpForm({ toggleForm }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://pannel-1.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Registration successful!');
        setFormData({ name: '', email: '', password: '' }); // Reset form
      } else {
        const errorText = await response.text();
        setMessage(`Error: ${errorText}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="sign-up-form-container">
      <h2>Sign Up</h2>

      {message && <p className="feedback-message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div> <div className="input-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn">Sign Up</button>

        <p>
          Already have an account?{' '}
          <a href="#" onClick={toggleForm}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;



