// // import React, { useState } from 'react';
// // import './Model.css';

// // function AddProductModal({ isModalOpen, handleCloseModal }) {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     description: '',
// //     price: '',
// //     category: '' // Added category field
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const { name, description, price, category } = formData;

// //     // Check if all fields are filled out
// //     if (!name || !description || !price || !category) {
// //       alert('Please fill in all fields');
// //       return;
// //     }

// //     try {
// //       const response = await fetch('https://pannel-1.onrender.com/items', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(formData)
// //       });

// //       const result = await response.json();
// //       if (response.ok) {
// //         alert('Item added successfully');
        
// //         // Reset the form data
// //         setFormData({
// //           name: '',
// //           description: '',
// //           price: '',
// //           category: ''
// //         });

// //         handleCloseModal(); // Close the modal after successful submission
// //       } else {
// //         alert(result.message || 'Failed to add item');
// //       }
// //     } catch (error) {
// //       console.error('Error:', error);
// //       alert('An error occurred while saving the item');
// //     }
// //   };

// //   return (
// //     isModalOpen && (
// //       <div className="modal-overlay">
// //         <div className="modal-content">
// //           <h2>Add Product</h2>
// //           <form onSubmit={handleSubmit}>
// //             <div className="form-group">
// //               <label htmlFor="name">Name:</label>
// //               <input 
// //                 type="text" 
// //                 id="name" 
// //                 name="name" 
// //                 value={formData.name} 
// //                 onChange={handleChange} 
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="description">Description:</label>
// //               <textarea 
// //                 id="description" 
// //                 name="description" 
// //                 rows="3" 
// //                 value={formData.description} 
// //                 onChange={handleChange}
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="price">Price:</label>
// //               <input 
// //                 type="number" 
// //                 id="price" 
// //                 name="price" 
// //                 value={formData.price} 
// //                 onChange={handleChange} 
// //               />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="category">Category:</label>
// //               <input 
// //                 type="text" 
// //                 id="category" 
// //                 name="category" 
// //                 value={formData.category} 
// //                 onChange={handleChange} 
// //               />
// //             </div>
// //             <div className="modal-buttons">
// //               <button type="button" onClick={handleCloseModal}>
// //                 Close
// //               </button>
// //               <button type="submit">Submit</button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     )
// //   );
// // }

// // export default AddProductModal;



// import React, { useState } from 'react';
// import '../CSS/Model.css';

// function AddProductModal({ isModalOpen, handleCloseModal }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//     image: null, // Added image field
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       image: file,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, description, price, category, image ,quantity} = formData;

//     if (!name || !description || !price || !category || !image|| !quantity) {
//       alert('Please fill in all fields and upload an image');
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append('name', name);
//     formDataToSend.append('description', description);
//     formDataToSend.append('price', price);
//     formDataToSend.append('category', category);
//     formDataToSend.append('quantity', quantity);
//     formDataToSend.append('image', image);

//     try {
//       const response = await fetch('https://pannel-1.onrender.com/items', {
//         method: 'POST',
//         body: formDataToSend,
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert('Item added successfully');

//         setFormData({
//           name: '',
//           description: '',
//           price: '',
//           category: '',
//           quantity: '',
//           image: null,
//         });

//         handleCloseModal();
//       } else {
//         alert(result.message || 'Failed to add item');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while saving the item');
//     }
//   };

//   return (
//     isModalOpen && (
//       <div className="modal-overlay">
//         <div className="modal-content">
//           <h2>Add Product</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description:</label>
//               <textarea
//                 id="description"
//                 name="description"
//                 rows="3"
//                 value={formData.description}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="price">Price:</label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="category">Category:</label>
//               <input
//                 type="text"
//                 id="category"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="image">Upload Image:</label>
//               <input
//                 type="file"
//                 id="image"
//                 name="image"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="quantity">quantity</label>
//               <input
//                 type="text"
//                 id="quantity"
//                 name="quantity"
//                 value={formData.quantity}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="modal-buttons">
//               <button type="button" onClick={handleCloseModal}>
//                 Close
//               </button>
//               <button type="submit">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   );
// }

// export default AddProductModal;




import React, { useState } from 'react';
import '../CSS/Model.css';

function AddProductModal({  handleCloseModal }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    quantity: '',
    image: null, // Added image field
  });

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

    const { name, description, price, category, image, quantity } = formData;

    // Check if all fields are filled
    if (!name || !description || !price || !category || !image || !quantity) {
      alert('Please fill in all fields and upload an image');
      return;
    }

    // Create a FormData object to send data
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('description', description);
    formDataToSend.append('price', price);
    formDataToSend.append('category', category);
    formDataToSend.append('quantity', quantity);
    formDataToSend.append('image', image);

    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
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
          quantity: '',
          image: null,
        });

        handleCloseModal(); // Close the modal
      } else {
        alert(result.message || 'Failed to add item');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the item');
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
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
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

