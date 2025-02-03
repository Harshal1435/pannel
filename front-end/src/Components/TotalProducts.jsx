import React, { useEffect, useState } from 'react';
import "../CSS/Total.css"
function TotalProducts() {
  const [products, setProducts] = useState([]); // State to store products

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://pannel-1.onrender.com/items'); // GET request to backend
      const data = await response.json(); // Parse JSON response
      if (response.ok) {
        setProducts(data); // Update state with the fetched products
      } else {
        console.error('Failed to fetch products:', data.message);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='main'>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) :
        (
          <table>
            <thead>
              <tr>
                <th>Name</th>  
                <th>Description</th>
                <th>Price</th>
                <th>Categories</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
}

export default TotalProducts;

