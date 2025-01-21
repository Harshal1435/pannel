// import React from 'react'

// function deleteItem() {
//     return (
//     const deleteItem = async (id) => {
//             try {
//                 const response = await fetch(`https://pannel-1.onrender.com/items/${id}`, {
//                     method: "DELETE",
//                 });
//                 const result = await response.json();

//                 if (response.ok) {
//                     console.log(result.message);
//                     fetchItems(); // Refresh the items list
//                 } else {
//                     console.error(result.message);
//                 }
//             } catch (error) {
//                 console.error("Error deleting item:", error);
//             }
//         };
      
//       const fetchItems = async () => {
//             const response = await fetch("https://pannel-1.onrender.com/items");
//             const data = await response.json();
//             setItems(data); // Update your state
//         };

//     )
// }

// export default deleteItem
