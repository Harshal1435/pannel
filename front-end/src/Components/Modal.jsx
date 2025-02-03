import React, { useState,useRef } from 'react';
import '../CSS/Model.css';

function AddProductModal({ handleCloseModal }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: "", // Added image field
  });
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description, price, category, image, stock } = formData;

    // Check if all fields are filled
    if (!name || !description || !price || !category || !image || !stock) {
      alert('Please fill in all fields and upload an image');
      return;
    }

    // Ensure price and stock are positive numbers
    if (price <= 0 || stock <= 0) {
      alert('Price and stock must be positive numbers');
      return;
    }

    // Create a FormData object to send data
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('description', description);
    formDataToSend.append('price', price);
    formDataToSend.append('category', category);
    formDataToSend.append('stock', stock);
    formDataToSend.append('image', image);

    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      if (!token) {
        alert('You need to be logged in to add a product');
        return;
      }

      const response = await fetch('https://pannel-1.onrender.com/items', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request
        },
        body: formDataToSend, // Send the FormData object
      });

      const result = await response.json();
      if (response.ok) {
        alert('Item added successfully');

        // Reset the form data after successful submission
        setFormData({
          name: '',
          description: '',
          price: '',
          category: '',
          stock: '',
          image:null,
        });
       
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Clear the file input
        }

        handleCloseModal(); // Close the modal
      } else {
        alert(result.message || 'Failed to add item');
      }
    } catch (error) {
      console.error('Error:', error);
      // alert('An error occurred while saving the item');
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
            ref={fileInputRef}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProductModal;
