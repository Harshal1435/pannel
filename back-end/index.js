// // // filepath: /back-end/index.js
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const cloudinary = require("cloudinary").v2;
// // require("dotenv").config();

// // const userRoutes = require("./routes/userRoutes");
// // const itemRoutes = require("./routes/itemRoutes");

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// // .then(() => console.log("Connected to MongoDB"))
// // .catch(err => console.error("MongoDB connection error:", err));

// // cloudinary.config({
// //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// //   api_key: process.env.CLOUDINARY_API_KEY,
// //   api_secret: process.env.CLOUDINARY_API_SECRET
// // });

// // app.use("/user", userRoutes);
// // app.use("/items", itemRoutes);

// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// // const express = require("express");
// // const mongoose = require("mongoose");
// // const path = require("path");
// // const cors = require("cors");
// // const multer = require("multer");
// // const cloudinary = require("cloudinary").v2;
// // require("dotenv").config();

// // const port = 3000;
// // const app = express();

// // // Middleware
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(cors());
// // app.use(express.static(path.join(__dirname, 'public')));

// // // MongoDB Connection
// // mongoose.connect("mongodb+srv://pratikmeshram0021:TXuofrZ8LwBkduNS@cluster0.hui2a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // })
// //     .then(() => console.log("MongoDB connected"))
// //     .catch((err) => {
// //         console.error("MongoDB connection error:", err.message);
// //         process.exit(1);
// //     });

// // // Cloudinary Configuration
// // cloudinary.config({
// //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// //     api_key: process.env.CLOUDINARY_API_KEY,
// //     api_secret: process.env.CLOUDINARY_API_SECRET,
// // });

// // // Schemas and Models
// // const userSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   email: { type: String, required: true, unique: true },
// //   password: { type: String, required: true },
// //   createdAt: { type: Date, default: Date.now }
// // });
// // userSchema.pre('save', async function(next) {
// //     if (this.isModified('password')) {
// //       this.password = await bcrypt.hash(this.password, 10);
// //     }
// //     next();
// //   });
  

// // const itemSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   description: { type: String, required: true },
// //   price: { type: Number, required: true },
// //   category: { type: String, required: true },
// //   imageUrl: { type: String },
// //   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// //   createdAt: { type: Date, default: Date.now }
// // });

// // const User = mongoose.model("User", userSchema);
// // const Item = mongoose.model("Item", itemSchema);

// // // Multer Configuration
// // const upload = multer({
// //     storage: multer.memoryStorage(),
// //     fileFilter: (req, file, cb) => {
// //         const ext = file.mimetype.split("/")[1];
// //         if (!["jpeg", "jpg", "png"].includes(ext)) {
// //             return cb(new Error("File type is not supported"), false);
// //         }
// //         cb(null, true);
// //     },
// // });

// // // Routes
// // // Test Route
// // app.get('/get', (req, res) => {
// //     console.log("Connection done");
// //     res.send("Server is working!");
// // });
// // const authenticate = (req, res, next) => {
// //     try {
// //       const token = req.header('Authorization').replace('Bearer ', '');
// //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //       req.userId = decoded.id;
// //       next();
// //     } catch (error) {
// //       res.status(401).json({ message: 'Authentication required' });
// //     }
// //   };

// // // User Registration
// // app.post("/register", async (req, res) => {
// //     try {
// //         const { name, email, password } = req.body;

// //         if (!name || !email || !password) {
// //             return res.status(400).send("All fields (name, email, password) are required");
// //         }

// //         const newUser = new User({ name, email, password });
// //         await newUser.save();
// //         res.status(201).send("User registered successfully");
// //     } catch (err) {
// //         console.error("Error saving user data:", err);

// //         if (err.code === 11000) {
// //             return res.status(400).send("Email is already registered");
// //         }

// //         res.status(500).send("An error occurred");
// //     }
// // });

// // // User Login
// // app.post("/login", async (req, res) => {
// //     try {
// //         const { email, password } = req.body;

// //         if (!email || !password) {
// //             return res.status(400).send("Email and password are required");
// //         }

// //         const user = await User.findOne({ email });
// //         if (!user || user.password !== password) {
// //             return res.status(401).send("Invalid email or password");
// //         }

// //         res.status(200).send("Login successful");
// //     } catch (err) {
// //         console.error("Error during login:", err);
// //         res.status(500).send("Internal Server Error");
// //     }
// // });

// // //catogoty itself








// // // Add Item with Image
// // app.post("/items", upload.single("image"), async (req, res) => {
// //   try {
// //       const { name, description, price, category } = req.body;
// //       const userId = req.user._id; // Assuming `req.user` contains the logged-in user's info

// //       if (!name || !description || price == null || !category) {
// //           return res
// //               .status(400)
// //               .json({ message: "All fields (name, description, price, category) are required" });
// //       }

// //       let imageUrl = null;

// //       if (req.file) {
// //           const result = await new Promise((resolve, reject) => {
// //               const uploadStream = cloudinary.uploader.upload_stream(
// //                   { folder: "uploads" },
// //                   (error, result) => {
// //                       if (error) reject(error);
// //                       else resolve(result);
// //                   }
// //               );
// //               uploadStream.end(req.file.buffer);
// //           });

// //           imageUrl = result.secure_url;
// //       }

// //       const newItem = new Item({ name, description, price, category, imageUrl, userId });
// //       const savedItem = await newItem.save();
// //       res
// //           .status(201)
// //           .json({ message: "Item created successfully", item: savedItem });
// //   } catch (err) {
// //       console.error("Error saving item data:", err);
// //       res.status(500).json({ message: "An error occurred while saving the item" });
// //   }
// // });


// // // Delete Item by ID
// // app.delete("/items/:id", async (req, res) => {
// //     try {
// //         const { id } = req.params;

// //         if (!mongoose.Types.ObjectId.isValid(id)) {
// //             return res.status(400).json({ message: "Invalid ID format" });
// //         }

// //         const deletedItem = await Item.findByIdAndDelete(id);

// //         if (!deletedItem) {
// //             return res.status(404).json({ message: "Item not found" });
// //         }

// //         res.status(200).json({ message: "Item deleted successfully" });
// //     } catch (err) {
// //         console.error("Error deleting item:", err.message);
// //         res.status(500).json({ message: "An error occurred while deleting the item" });
// //     }
// // });

// // // Default Route
// // app.use("/", (req, res) => {
// //     res.send("Panel server running");
// // });

// // // Start Server
// // app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// // });

// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path");
// const cors = require("cors");
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// require("dotenv").config();

// const port = 3000;
// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

// // MongoDB Connection
// mongoose.connect("mongodb+srv://pratikmeshram0021:TXuofrZ8LwBkduNS@cluster0.hui2a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => {
//         console.error("MongoDB connection error:", err.message);
//         process.exit(1);
//     });

// // Cloudinary Configuration
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Schemas and Models
// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// const itemSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     category: { type: String, required: true },
//     imageUrl: { type: String },
//     quantity: { type: Number, required: true},

// });

// const User = mongoose.model("User", userSchema);
// const Item = mongoose.model("Item", itemSchema);

// // Multer Configuration
// const upload = multer({
//     storage: multer.memoryStorage(),
//     fileFilter: (req, file, cb) => {
//         const ext = file.mimetype.split("/")[1];
//         if (!["jpeg", "jpg", "png"].includes(ext)) {
//             return cb(new Error("File type is not supported"), false);
//         }
//         cb(null, true);
//     },
// });

// // Routes
// // Test Route
// app.get('/get', (req, res) => {
//     console.log("Connection done");
//     res.send("Server is working!");
// });

// // User Registration
// app.post("/register", async (req, res) => {
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

// // User Login
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).send("Email and password are required");
//         }

//         const user = await User.findOne({ email });
//         if (!user || user.password !== password) {
//             return res.status(401).send("Invalid email or password");
//         }

//         res.status(200).send("Login successful");
//     } catch (err) {
//         console.error("Error during login:", err);
//         res.status(500).send("Internal Server Error");
//     }
// });

// //catogoty itself

// app.get("/category", async (req, res) => {  
//     try {
//         // Fetch all items from the database
//         const items = await Item.find({}, "category imageUrl"); 

//         res.status(200).json({
//             message: "Items retrieved successfully",
//             items: items.map(item => ({
//                 category: item.category,
//                 imageUrl: item.imageUrl,
//             })),
//         });
//     } catch (err) {
//         console.error("Error fetching items:", err);
//         res.status(500).json({ message: "An error occurred while fetching the items" });
//     }
// });






// // Add Item with Image
// app.post("/items", upload.single("image"), async (req, res) => {
//     try {
//         const { name, description, price, category,quantity } = req.body;

//         if (!name || !description || price == null || !category||!quantity) {
//             return res
//                 .status(400)
//                 .json({ message: "All fields (name, description, price, category) are required" });
//         }

//         let imageUrl = null;

//         // If an image is uploaded, upload it to Cloudinary
//         if (req.file) {
//             const result = await new Promise((resolve, reject) => {
//                 const uploadStream = cloudinary.uploader.upload_stream(
//                     { folder: "uploads" },
//                     (error, result) => {
//                         if (error) reject(error);
//                         else resolve(result);
//                     }
//                 );
//                 uploadStream.end(req.file.buffer);
//             });

//             imageUrl = result.secure_url;
//         }

//         const newItem = new Item({ name, description, price, category, imageUrl,quantity });
//         const savedItem = await newItem.save();
//         res
//             .status(201)
//             .json({ message: "Item created successfully", item: savedItem });
//     } catch (err) {
//         console.error("Error saving item data:", err);
//         res.status(500).json({ message: "An error occurred while saving the item" });
//     }
// });

// // Fetch All Items
// app.get("/items", async (req, res) => {
//     try {
//         const items = await Item.find();
//         res.status(200).json(items);
//     } catch (err) {
//         console.error("Error fetching items:", err);
//         res.status(500).json({ message: "An error occurred while fetching items" });
//     }
// });

// // Delete Item by ID
// app.delete("/items/:id", async (req, res) => {
//     try {
//         const { id } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({ message: "Invalid ID format" });
//         }

//         const deletedItem = await Item.findByIdAndDelete(id);

//         if (!deletedItem) {
//             return res.status(404).json({ message: "Item not found" });
//         }

//         res.status(200).json({ message: "Item deleted successfully" });
//     } catch (err) {
//         console.error("Error deleting item:", err.message);
//         res.status(500).json({ message: "An error occurred while deleting the item" });
//     }
// });

// // Default Route
// app.use("/", (req, res) => {
//     res.send("Panel server running");
// });

// // Start Server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });



const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose.connect("mongodb+srv://harshalraghatate28:ImMSwOE2u7V2q7sD@cluster0.a2cz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    });

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Schemas and Models
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" }, // Add role (e.g., user, manufacturer)
});

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String },
    quantity: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Item = mongoose.model("Item", itemSchema);

// Middleware for Authentication
const authenticate = (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ message: "Authentication required" });
    }
};

// Multer Configuration
const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        if (!["jpeg", "jpg", "png"].includes(ext)) {
            return cb(new Error("File type is not supported"), false);
        }
        cb(null, true);
    },
});

// Routes
// Test Route
app.get("/get", (req, res) => {
    console.log("Connection done");
    res.send("Server is working!");
});

// User Registration
app.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send("All fields (name, email, password) are required");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();
        res.status(201).send("User registered successfully");
    } catch (err) {
        console.error("Error saving user data:", err);

        if (err.code === 11000) {
            return res.status(400).send("Email is already registered");
        }

        res.status(500).send("An error occurred");
    }
});

// User Login
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send("Invalid email or password");
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ token, role: user.role });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send("Internal Server Error");
    }
});
// Add Item with Image
app.post("/items", authenticate, upload.single("image"), async (req, res) => {
    try {
        const { name, description, price, category, quantity } = req.body;

        // Validate inputs
        if (!name || !description || price == null || !category || !quantity) {
            return res
                .status(400)
                .json({ message: "All fields (name, description, price, category, quantity) are required" });
        }

        if (price <= 0 || quantity <= 0) {
            return res.status(400).json({ message: "Price and quantity must be greater than zero" });
        }

        let imageUrl = null;

        if (req.file) {
            // Upload image to Cloudinary
            const result = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "uploads" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                uploadStream.end(req.file.buffer);
            });

            imageUrl = result.secure_url;
        }

        // Save item to database
        const newItem = new Item({
            name,
            description,
            price,
            category,
            imageUrl,
            quantity,
            userId: req.userId,
        });
        const savedItem = await newItem.save();
        res.status(201).json({ message: "Item created successfully", item: savedItem });
    } catch (err) {
        console.error("Error saving item data:", err);
        res.status(500).json({ message: "An error occurred while saving the item" });
    }
});

// Fetch Items for a Specific User with Pagination and Filtering
app.get("/items", authenticate, async (req, res) => {
    try {
      const { category, minPrice, maxPrice, page = 1, limit = 10 } = req.query;
  
      const query = { userId: req.userId };
      if (category) query.category = category;
      if (minPrice) query.price = { ...query.price, $gte: Number(minPrice) };
      if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };
  
      const skip = (page - 1) * limit;
      console.log("Query:", query); // Log the query for debugging
  
      const items = await Item.find(query).skip(skip).limit(Number(limit));
      const total = await Item.countDocuments(query);
      console.log("Fetched items:", items); // Log fetched items
  
      res.status(200).json({ items, total, page: Number(page), pages: Math.ceil(total / limit) });
    } catch (err) {
      console.error("Error fetching items:", err);
      res.status(500).json({ message: "An error occurred while fetching items" });
    }
  });
  

// Update Item by ID
app.put("/items/:id", authenticate, upload.single("image"), async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const { name, description, price, category, quantity } = req.body;

        // Validate inputs
        if (price != null && price <= 0) {
            return res.status(400).json({ message: "Price must be greater than zero" });
        }
        if (quantity != null && quantity <= 0) {
            return res.status(400).json({ message: "Quantity must be greater than zero" });
        }

        let imageUrl;

        if (req.file) {
            const result = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "uploads" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                uploadStream.end(req.file.buffer);
            });

            imageUrl = result.secure_url;
        }

        const updatedItem = await Item.findByIdAndUpdate(
            id,
            { name, description, price, category, quantity, ...(imageUrl && { imageUrl }) },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json({ message: "Item updated successfully", item: updatedItem });
    } catch (err) {
        console.error("Error updating item:", err.message);
        res.status(500).json({ message: "An error occurred while updating the item" });
    }
});

// Delete Item by ID
app.delete("/items/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        // Find the item by ID
        const deletedItem = await Item.findByIdAndDelete(id);

        // If the item is not found
        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        // If the item has an image, delete it from Cloudinary
        if (deletedItem.imageUrl) {
            const publicId = deletedItem.imageUrl.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(publicId);
        }

        // Respond with success message
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (err) {
        console.error("Error deleting item:", err.message);
        res.status(500).json({ message: "An error occurred while deleting the item" });
    }
});

app.put("/items/:id", authenticate, upload.single("image"), async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const { name, description, price, category, quantity } = req.body;
        if (price != null && price <= 0) {
            return res.status(400).json({ message: "Price must be greater than zero" });
        }
        if (quantity != null && quantity <= 0) {
            return res.status(400).json({ message: "Quantity must be greater than zero" });
        }

        // Find the item to get the old image URL
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }

        let imageUrl = item.imageUrl;

        if (req.file) {
            // Delete the old image from Cloudinary
            if (imageUrl) {
                const publicId = imageUrl.split("/").pop().split(".")[0];
                await cloudinary.uploader.destroy(publicId);
            }

            // Upload the new image to Cloudinary
            const result = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "uploads" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                uploadStream.end(req.file.buffer);
            });

            imageUrl = result.secure_url;
        }

        // Update the item in MongoDB
        const updatedItem = await Item.findByIdAndUpdate(
            id,
            { name, description, price, category, quantity, imageUrl },
            { new: true }
        );

        res.status(200).json({ message: "Item updated successfully", item: updatedItem });
    } catch (err) {
        console.error("Error updating item:", err.message);
        res.status(500).json({ message: "An error occurred while updating the item" });
    }
});
// Fetch All Items Without Authentication
app.get("/all-items", async (req, res) => {
    try {
        const { category, minPrice, maxPrice, page = 1, limit = 10 } = req.query;

        const query = {};
        if (category) query.category = category;
        if (minPrice) query.price = { ...query.price, $gte: Number(minPrice) };
        if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };

        const skip = (page - 1) * limit;
        console.log("Query for all items:", query); // Log the query for debugging

        const items = await Item.find(query).skip(skip).limit(Number(limit));
        const total = await Item.countDocuments(query);

        console.log("Fetched items for public view:", items); // Log fetched items

        res.status(200).json({ items, total, page: Number(page), pages: Math.ceil(total / limit) });
    } catch (err) {
        console.error("Error fetching all items:", err);
        res.status(500).json({ message: "An error occurred while fetching items" });
    }
});


// Fetch Items Grouped by Category Without Authentication
// app.get("/all-items-by-category", async (req, res) => {
//     try {
//         const { minPrice, maxPrice } = req.query;

//         const query = {};
//         if (minPrice) query.price = { ...query.price, $gte: Number(minPrice) };
//         if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };

//         // Group items by category using MongoDB's aggregation framework
//         const itemsByCategory = await Item.aggregate([
//             { $match: query }, // Apply filtering
//             {
//                 $group: {
//                     _id: "$category", // Group by the `category` field
//                     items: { $push: "$$ROOT" }, // Push the entire document into the `items` array
//                 },
//             },
//             { $sort: { _id: 1 } }, // Sort categories alphabetically
//         ]);

//         res.status(200).json({ categories: itemsByCategory });
//     } catch (err) {
//         console.error("Error fetching items by category:", err);
//         res.status(500).json({ message: "An error occurred while fetching items by category" });
//     }
// });


app.get("/all-items-by-category", async (req, res) => {
    try {
        const { minPrice, maxPrice } = req.query;

        const query = {};
        if (minPrice) query.price = { ...query.price, $gte: Number(minPrice) };
        if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };

        // Fetch items grouped by category
        const items = await Item.find(query).select("category imageUrl -_id"); // Select only `category` and `imageUrl`

        // Format the response
        const categories = items.map(item => ({
            category: item.category,
            imageUrl: item.imageUrl,
        }));

        res.status(200).json({
            message: "Categories retrieved successfully",
            items: categories,
        });
    } catch (err) {
        console.error("Error fetching items by category:", err);
        res.status(500).json({ message: "An error occurred while fetching categories" });
    }
});




// Default Route
app.use("/", (req, res) => {
    res.send("Panel server running");
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
