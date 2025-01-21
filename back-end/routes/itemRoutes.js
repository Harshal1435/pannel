// const express = require("express");
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const Item = require("../models/Items");
// const authenticate = require("../middleware/authenticate");

// const router = express.Router();
// const upload = multer({ storage: multer.memoryStorage() });

// router.post("/", authenticate, upload.single("image"), async (req, res) => {
//   try {
//     const { name, description, price, category } = req.body;
//     let imageUrl = null;

//     if (req.file) {
//       const result = await new Promise((resolve, reject) => {
//         const uploadStream = cloudinary.uploader.upload_stream(
//           { folder: "uploads" },
//           (error, result) => {
//             if (error) reject(error);
//             else resolve(result);
//           }
//         );
//         uploadStream.end(req.file.buffer);
//       });
//       imageUrl = result.secure_url;
//     }

//     const item = new Item({
//       name,
//       description,
//       price,
//       category,
//       imageUrl,
//       userId: req.userId
//     });

//     await item.save();
//     res.status(201).json(item);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.get("/", authenticate, async (req, res) => {
//   try {
//     const items = await Item.find({ userId: req.userId });
//     res.json(items);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;


// const express = require("express");
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const Item = require("../models/Items");
// const authenticate = require("../middleware/authenticate");

// const router = express.Router();
// const upload = multer({ storage: multer.memoryStorage() });

// router.post("/", authenticate, upload.single("image"), async (req, res) => {
//   try {
//     const { name, description, price, category } = req.body;
//     let imageUrl = null;

//     if (req.file) {
//       const result = await new Promise((resolve, reject) => {
//         const uploadStream = cloudinary.uploader.upload_stream(
//           { folder: "uploads" },
//           (error, result) => {
//             if (error) reject(error);
//             else resolve(result);
//           }
//         );
//         uploadStream.end(req.file.buffer);
//       });
//       imageUrl = result.secure_url;
//     }

//     const item = new Item({
//       name,
//       description,
//       price,
//       category,
//       imageUrl,
//       userId: req.userId
//     });

//     await item.save();
//     res.status(201).json(item);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.get("/", authenticate, async (req, res) => {
//   try {
//     const items = await Item.find({ userId: req.userId });
//     res.json(items);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;

const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const Item = require("../models/Items");
const authenticate = require("../middleware/authenticate");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", authenticate, upload.single("image"), async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    let imageUrl = null;

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

    const item = new Item({
      name,
      description,
      price,
      category,
      imageUrl,
      userId: req.userId
    });

    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", authenticate, async (req, res) => {
  try {
    const items = await Item.find({ userId: req.userId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;