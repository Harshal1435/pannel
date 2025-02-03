

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { version } = require("process");
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
    stock: { type: Number, required: true },
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
        res.status(200).json({ token, role: user.role, email: user.email, id: user._id, name: user.name });
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).send("Internal Server Error");
    }
});





app.post("/items", authenticate, upload.single("image"), async (req, res) => {
    try {
        const items = req.body.items; // Expecting an array of items
        
        // Check if it's a bulk insert
        if (Array.isArray(items)) {
            // Validate all items in the array
            const invalidItem = items.find(
                item =>
                    !item.name ||
                    !item.description ||
                    item.price == null ||
                    !item.category ||
                    !item.stock ||
                    item.price <= 0 ||
                    item.stock <= 0
            );

            if (invalidItem) {
                return res.status(400).json({ 
                    message: "Each item must have valid name, description, price, category, and stock" 
                });
            }

            // Save items to database
            const savedItems = await Item.insertMany(
                items.map(item => ({
                    ...item,
                    userId: req.userId
                }))
            );

            return res.status(201).json({ 
                message: "Items created successfully", 
                items: savedItems 
            });
        }

        // If it's a single item
        const { name, description, price, category, stock } = req.body;

        // Validate single item
        if (!name || !description || price == null || !category || !stock) {
            return res
                .status(400)
                .json({ message: "All fields (name, description, price, category, stock) are required" });
        }

        if (price <= 0 || stock <= 0) {
            return res.status(400).json({ message: "Price and stock must be greater than zero" });
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

        // Save single item to database
        const newItem = new Item({
            name,
            description,
            price,
            category,
            imageUrl,
            stock,
            userId: req.userId
        });
        const savedItem = await newItem.save();
        res.status(201).json({ message: "Item created successfully", item: savedItem });
    } catch (err) {
        console.error("Error saving item data:", err);
        res.status(500).json({ message: "An error occurred while saving the item(s)" });
    }
});


// Fetch Items for a Specific User with Pagination and Filtering
app.get("/items", authenticate, async (req, res) => {
    try {
      const { category, minPrice, maxPrice } = req.query;
  
      const query = { userId: req.userId };
      if (category) query.category = category;
      if (minPrice) query.price = { ...query.price, $gte: Number(minPrice) };
      if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };
  
    
      console.log("Query:", query); // Log the query for debugging
  
      const items = await Item.find(query);
      const total = await Item.countDocuments(query);
      console.log("Fetched items:", items); // Log fetched items
  
      res.status(200).json({ items, total });
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

        const { name, description, price, category, stock } = req.body;

        // Validate inputs
        if (price != null && price <= 0) {
            return res.status(400).json({ message: "Price must be greater than zero" });
        }
        if (stock != null && stock <= 0) {
            return res.status(400).json({ message: "stock must be greater than zero" });
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
            { name, description, price, category, stock, ...(imageUrl && { imageUrl }) },
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

        const { name, description, price, category, stock } = req.body;
        if (price != null && price <= 0) {
            return res.status(400).json({ message: "Price must be greater than zero" });
        }
        if (stock != null && stock <= 0) {
            return res.status(400).json({ message: "stock must be greater than zero" });
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
            { name, description, price, category, stock, imageUrl },
            { new: true }
        );

        res.status(200).json({ message: "Item updated successfully", item: updatedItem });
    } catch (err) {
        console.error("Error updating item:", err.message);
        res.status(500).json({ message: "An error occurred while updating the item" });
    }
});

app.get("/all-items", async (req, res) => {
    try {
        const { category, minPrice, maxPrice, page = 1, limit = 100000} = req.query;

        const query = {};
        if (category) query.category = category;
        if (minPrice) query.price = { ...query.price, $gte: Number(minPrice) };
        if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };

        const skip = (page - 1) * limit;

        // Fetch items from the database
        const items = await Item.find(query)
            .populate("userId", "name")
            

        // Format the items exactly as needed
        const formattedItems = items.map(item => ({
            manufacturerName: item.userId.name ,
            _id: item._id,
            name: item.name,
            description: item.description,
            price: item.price,
            category: item.category,
            imageUrl: item.imageUrl,
            stock: item.stock
        }));

        // Send the response
        res.status(200).json(formattedItems);
    } catch (err) {
        console.error("Error fetching all items:", err);
        res.status(500).json({ message: "An error occurred while fetching items" });
    }
});


// app.get("/all-items-by-category", async (req, res) => {
//     try {
//       const { minPrice, maxPrice } = req.query;
  
//       const query = {};
//       if (minPrice) query.price = { ...query.price, $gte: Number(minPrice) };
//       if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };
  
//       // Fetch items grouped by category
//       const items = await Item.find(query).select("category imageUrl -_id"); // Select only `category` and `imageUrl`
  
//       // Format the response
//       const categories = items.map((item) => ({
//         category: item.category,
//         imageUrl: item.imageUrl,
//       }));
  
//       res.status(200).json(categories); // Return the array directly
//     } catch (err) {
//       console.error("Error fetching items by category:", err);
//       res
//         .status(500)
//         .json({ message: "An error occurred while fetching categories" });
//     }
//   });
app.get("/all-items-by-category", async (req, res) => {
    try {
      const { minPrice, maxPrice } = req.query;
  
      const query = {};
      if (minPrice) query.price = { ...query.price, $gte: Number(minPrice) };
      if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };
  
      // Fetch items grouped by category
      const items = await Item.find(query).select("category imageUrl -_id"); // Select only `category` and `imageUrl`
  
      // Use a Map to store unique categories with their corresponding imageUrl
      const uniqueCategories = new Map();
  
      items.forEach((item) => {
        if (!uniqueCategories.has(item.category)) {
          uniqueCategories.set(item.category, item.imageUrl);
        }
      });
  
      // Convert the Map to an array and sort it alphabetically by category
      const categories = Array.from(uniqueCategories.entries())
        .map(([category, imageUrl]) => ({ category, imageUrl }))
        .sort((a, b) => a.category.localeCompare(b.category));
  
      res.status(200).json(categories); // Return the array directly
    } catch (err) {
      console.error("Error fetching items by category:", err);
      res
        .status(500)
        .json({ message: "An error occurred while fetching categories" });
    }
  });
  
app.get("/:id/settings", authenticate, async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select("name email"); // Excluding the password field
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(user); // Respond with user details excluding password
      console.log(user); // Logging the user data for debugging
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });
  
// Update user settings (Profile)


// Update user settings (Profile)
app.put("/:id/settings", authenticate, async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data (name, email)
    if (name) user.name = name;
    if (email) user.email = email;

    // If a password is provided, hash it before updating the password field
    if (password) {
      const salt = await bcrypt.genSalt(10); // Generate a salt
      user.password = await bcrypt.hash(password, salt); // Hash the new password
    }

    await user.save();

    res.json({ message: "User settings updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
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