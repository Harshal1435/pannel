// // // import React, { useEffect, useState } from 'react';
// // // // import "./Total.css";
// // // import '../CSS/views.css';


// // // function Views() {
// // //   const [products, setProducts] = useState([]); // State to store products

// // //   // Fetch products from backend
// // //   const fetchProducts = async () => {
// // //     try {
// // //       const response = await fetch('https://pannel-1.onrender.com/items'); // GET request to backend
// // //       const data = await response.json(); // Parse JSON response
// // //       if (response.ok) {
// // //         setProducts(data); // Update state with fetched products
// // //       } else {
// // //         console.error('Failed to fetch products:', data.message);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching products:', error);
// // //     }
// // //   };

// // //   // Delete product by ID
// // //   const deleteProduct = async (id) => {
// // //     try {
// // //       const response = await fetch(`https://pannel-1.onrender.com/items/${id}`, {
// // //         method: 'DELETE',
// // //       });

// // //       if (response.ok) {
// // //         alert('Product deleted successfully!');
// // //         setProducts(products.filter((product) => product._id !== id)); // Update state after deletion
// // //       } else {
// // //         const errorData = await response.json();
// // //         alert(errorData.message || 'Failed to delete product');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error deleting product:', error);
// // //       alert('An error occurred while deleting the product');
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchProducts(); // Fetch products on component mount
// // //   }, []);

// // //   return (
// // //     <div className="views">
// // //       <h1>All Products</h1>
// // //       {products.length === 0 ? (
// // //         <p>No products available.</p>
// // //       ) : (
// // //         <table>
// // //           <thead>
// // //             <tr>
// // //               <th>Name</th>
// // //               <th>Description</th>
// // //               <th>Price</th>
// // //               <th>Category</th>
// // //               <th>Image</th>
// // //               <th>Action</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {products.map((product) => (
// // //               <tr key={product._id}>
// // //                 <td>{product.name}</td>
// // //                 <td>{product.description}</td>
// // //                 <td>₹{product.price}</td>
// // //                 <td>{product.category}</td>
// // //                 <td>
// // //                   {product.imageUrl ? (
// // //                     <img
// // //                       src={product.imageUrl}
// // //                       alt={product.name}
// // //                       className="product-image"
// // //                     />
// // //                   ) : (
// // //                     <p>No image</p>
// // //                   )}
// // //                 </td>
// // //                 <td>
// // //                   <button
// // //                     className="delete-button"
// // //                     onClick={() => deleteProduct(product._id)}
// // //                   >
// // //                     Delete
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default Views;




// // import React, { useEffect, useState } from "react";
// // import "../CSS/views.css";

// // function Views() {
// //   const [products, setProducts] = useState([]); // State to store products

// //   // Fetch products from backend
// //   const fetchProducts = async () => {
// //     try {
// //       const response = await fetch("https://pannel-1.onrender.com/items"); // GET request to backend
// //       const data = await response.json(); // Parse JSON response
// //       if (response.ok) {
// //         setProducts(data); // Update state with fetched products
// //       } else {
// //         console.error("Failed to fetch products:", data.message);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //     }
// //   };

// //   // Delete product by ID
// //   const deleteProduct = async (id) => {
// //     try {
// //       const response = await fetch(`https://pannel-1.onrender.com/items/${id}`, {
// //         method: "DELETE",
// //       });

// //       if (response.ok) {
// //         alert("Product deleted successfully!");
// //         setProducts(products.filter((product) => product._id !== id)); // Update state after deletion
// //       } else {
// //         const errorData = await response.json();
// //         alert(errorData.message || "Failed to delete product");
// //       }
// //     } catch (error) {
// //       console.error("Error deleting product:", error);
// //       alert("An error occurred while deleting the product");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProducts(); // Fetch products on component mount
// //   }, []);

// //   return (
// //     <div className="main-content views">
// //       <div className="views-header">
// //         <h1>All Products</h1>
// //       </div>

// //       <div className="views-table-container">
// //         {products.length === 0 ? (
// //           <p className="no-products">No products available.</p>
// //         ) : (
// //           <table className="products-table">
// //             <thead>
// //               <tr>
// //                 <th>Name</th>
// //                 <th>Description</th>
// //                 <th>Price</th>
// //                 <th>Category</th>
// //                 <th>quantity</th>
// //                 <th>Image</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {products.map((product) => (
// //                 <tr key={product._id}>
// //                   <td>{product.name}</td>
// //                   <td>{product.description}</td>
// //                   <td>₹{product.price}</td>
// //                   <td>{product.category}</td>
// //                   <td>{product.quantity}</td>
// //                   <td>
// //                     {product.imageUrl ? (
// //                       <img
// //                         src={product.imageUrl}
// //                         alt={product.name}
// //                         className="product-image"
// //                       />
// //                     ) : (
// //                       <p>No image</p>
// //                     )}
// //                   </td>
// //                   <td>
// //                     <button
// //                       className="delete-button"
// //                       onClick={() => deleteProduct(product._id)}
// //                     >
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Views;




// import React, { useEffect, useState } from "react";
// import "../CSS/views.css";

// function Views() {
//   const [products, setProducts] = useState([]); // State to store products
//   const [loading, setLoading] = useState(false); // Loading state
//   const [editProduct, setEditProduct] = useState(null); // State to store product being edited
//   const [formValues, setFormValues] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     quantity: "",
//     imageUrl: "",
//   });
//   // Fetch products from the backend
//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("https://pannel-1.onrender.com/items", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
  
//       const data = await response.json();
//       console.log("Fetched data:", data); // Log the backend response
  
//       if (response.ok) {
//         setProducts(data.items || []); // Update with the "items" array
//       } else {
//         console.error("Failed to fetch products:", data.message);
//         alert(data.message || "Failed to fetch products");
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       alert("An error occurred while fetching products");
//     } finally {
//       setLoading(false);
//     }
//   };
  
  
//   // Delete product by ID
//   const deleteProduct = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     try {
//       const response = await fetch(`https://pannel-1.onrender.com/items/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // Add token for authentication
//         },
//       });

//       if (response.ok) {
//         alert("Product deleted successfully!");
//         setProducts(products.filter((product) => product._id !== id)); // Update state after deletion
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message || "Failed to delete product");
//       }
//     } catch (error) {
//       console.error("Error deleting product:", error);
//       alert("An error occurred while deleting the product");
//     }
//   };

//   const handleEdit = (product) => {
//     setEditProduct(product._id);
//     setFormValues({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//       quantity: product.quantity,
//       image:product.imageUrl
//     });
//   };

//   // Handle form input change
//   const handleInputChange = (e) => {
//     setFormValues({
//       ...formValues,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle save/update product
//   const saveProduct = async () => {
//     try {
//       const response = await fetch(`https://pannel-1.onrender.com/items/${editProduct}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify(formValues),
//       });

//       if (response.ok) {
//         alert("Product updated successfully!");
//         setEditProduct(null); // Exit edit mode
//         fetchProducts(); // Refresh the product list
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message || "Failed to update product");
//       }
//     } catch (error) {
//       alert("An error occurred while updating the product");
//     }
//   };


//   // Fetch products on component mount
//   useEffect(() => {
//     fetchProducts();
//   }, []);


 
  

//   return (
//     <div className="main-content views">
//       <div className="views-header">
//         <h1>All Products</h1>
//       </div>

//       {loading ? (
//         <p className="loading">Loading products...</p>
//       ) : (
//         <div className="views-table-container">
//           {products.length === 0 ? (
//             <p className="no-products">No products available.</p>
//           ) : (
//             <table className="products-table">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Description</th>
//                   <th>Price</th>
//                   <th>Category</th>
//                   <th>Quantity</th>
//                   <th>Image</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product) => (
//                   <tr key={product._id}>
//                     <td>{product.name}</td>
//                     <td>{product.description}</td>
//                     <td>₹{product.price}</td>
//                     <td>{product.category}</td>
//                     <td>{product.quantity}</td>
//                     <td>
//                       {product.imageUrl ? (
//                         <img
//                           src={product.imageUrl}
//                           alt={product.name}
//                           className="product-image"
//                         />
//                       ) : (
//                         <p>No image</p>
//                       )}
//                     </td>
//                     <td>
//                       <button
//                         className="delete-button"
//                         onClick={() => deleteProduct(product._id)}
//                       >
//                         Delete
//                       </button>
//                       <button
//                         className="edit-button"
//                         onClick={() => handleEdit(product)}
//                       >
//                         Edit
//                       </button>

//                     </td>

                  
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       )}
      
//   {editProduct && (
//             <div className="edit-form">
//               <h2>Edit Product</h2>
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   saveProduct();
//                 }}
//               >
//                 <label>
//                   Name:
//                   <input
//                     type="text"
//                     name="name"
//                     value={formValues.name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Description:
//                   <input
//                     type="text"
//                     name="description"
//                     value={formValues.description}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Price:
//                   <input
//                     type="number"
//                     name="price"
//                     value={formValues.price}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Category:
//                   <input
//                     type="text"
//                     name="category"
//                     value={formValues.category}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <label>
//                   Quantity:
//                   <input
//                     type="number"
//                     name="quantity"
//                     value={formValues.quantity}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>

//                 <label>
//                   Quantity:
//                   <input
//                     type="file"
//                     name="image"
//                     value={formValues.imageUrl}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </label>
//                 <div className="form-actions">
//                   <button type="submit">Save</button>
//                   <button type="button" onClick={() => setEditProduct(null)}>
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//            </div>

   
//   );
// }

// export default Views;




import React, { useEffect, useState } from "react";
import "../CSS/views.css";

function Views() {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(false); // Loading state
  const [editProduct, setEditProduct] = useState(null); // State to store product being edited
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
    imageUrl: "", // Use for image URL if already present
    imageFile: null, // For file input
  });

  // Fetch products from backend
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://pannel-1.onrender.com/items", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setProducts(data.items || []);
      } else {
        alert(data.message || "Failed to fetch products");
      }
    } catch (error) {
      alert("An error occurred while fetching products");
    } finally {
      setLoading(false);
    }
  };

  // Delete product by ID
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(`https://pannel-1.onrender.com/items/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        alert("Product deleted successfully!");
        setProducts(products.filter((product) => product._id !== id));
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      alert("An error occurred while deleting the product");
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product._id);
    setFormValues({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      quantity: product.quantity,
      imageUrl: product.imageUrl, // Set image URL
      imageFile: null, // Reset file input when editing
    });
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      imageFile: e.target.files[0], // Set the file object
    }));
  };

  // Handle save/update product
  const saveProduct = async () => {
    const formData = new FormData();

    // Add form data to FormData object
    formData.append("name", formValues.name);
    formData.append("description", formValues.description);
    formData.append("price", formValues.price);
    formData.append("category", formValues.category);
    formData.append("quantity", formValues.quantity);

    if (formValues.imageFile) {
      formData.append("image", formValues.imageFile); // Append file to formData
    }

    try {
      const response = await fetch(`https://pannel-1.onrender.com/items/${editProduct}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (response.ok) {
        alert("Product updated successfully!");
        setEditProduct(null);
        fetchProducts();
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to update product");
      }
    } catch (error) {
      alert("An error occurred while updating the product");
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="main-content views">
      <div className="views-header">
        <h1>All Products</h1>
      </div>

      {loading ? (
        <p className="loading">Loading products...</p>
      ) : (
        <div className="views-table-container">
          {products.length === 0 ? (
            <p className="no-products">No products available.</p>
          ) : (
            <table className="products-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>₹{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.quantity}</td>
                    <td>
                      {product.imageUrl ? (
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="product-image"
                        />
                      ) : (
                        <p>No image</p>
                      )}
                    </td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => deleteProduct(product._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {editProduct && (
        <div className="edit-form">
          <h2>Edit Product</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveProduct();
            }}
          >
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={formValues.price}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={formValues.category}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={formValues.quantity}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Image:
              <input
                type="file"
                name="image"
               value={products.imageUrl}
                onChange={handleFileChange}
              />
            </label>

            <div className="form-actions">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditProduct(null)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Views;
