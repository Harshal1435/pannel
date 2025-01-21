// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     const user = new User({ name, email, password });
//     await user.save();

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//     res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// router.post("/register", async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         if (!name || !email || !password) {
//             return res.status(400).send("All fields (name, email, password) are required");
//         }

//         const newUser = new User({ name, email, password });
//         await newUser.save();
//         res.status(201).send("User registered successfully");
//     } catch (err) {
//         console.error("Error saving user data:", err);

//         if (err.code === 11000) {
//             return res.status(400).send("Email is already registered");
//         }

//         res.status(500).send("An error occurred");
//     }
// });
// // router.post("/login", async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     const user = await User.findOne({ email });

// //     if (!user) {
// //       return res.status(400).json({
// //         message: "Please Signin First !",
// //       });
// //     }

// //     const passwordVaild = await bcrypt.compare(password, user.password);

// //     if (!passwordVaild) {
// //       // console.log("hello");
// //       return res.status(400).json({
// //         message: "Invalid Credentials !",
// //       });
// //     }

// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "7d",
// //     });

// //     if (!token) {
// //       return res
// //         .status(400)
// //         .json({ message: "Access token generation Failed in Login !" });
// //     }

// //     res.status(200).json({
// //       message: `User Login Successfully ! Welcome ${user.name}`,
// //       data: user,
// //       token: token,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });
// route.post("/login", async (req, res) => {
//       try {
//           const { email, password } = req.body;
  
//           if (!email || !password) {
//               return res.status(400).send("Email and password are required");
//           }
  
//           const user = await User.findOne({ email });
//           if (!user || user.password !== password) {
//               return res.status(401).send("Invalid email or password");
//           }
  
//           res.status(200).send("Login successful");
//       } catch (err) {
//           console.error("Error during login:", err);
//           res.status(500).send("Internal Server Error");
//       }
//   });

// module.exports = router;

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register route
// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Internal Server Error");
  }
});


// Login route
// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;
