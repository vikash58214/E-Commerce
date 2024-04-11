import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", image);

    try {
      await axios.post(`${window.location.origin}/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Reset form after successful submission
      setName("");
      setPrice("");
      setDescription("");
      setCategory("");
      setImage("");
      alert("Product added successfully!");
    } catch (err) {
      console.error("Error adding product:", err);
      alert("Failed to add product");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="mb-4 underline grid text-red-500 font-bold text-xl place-content-center teko-heading">
          <p>
            <Link to="/allorders">View Orders</Link>
          </p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-gray-700 font-bold mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productDescription"
            className="block text-gray-700 font-bold mb-2"
          >
            Product Description
          </label>
          <textarea
            id="productDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product description"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productCategory"
            className="block text-gray-700 font-bold mb-2"
          >
            Product Category
          </label>
          <input
            type="text"
            id="productCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product category"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productPrice"
            className="block text-gray-700 font-bold mb-2"
          >
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product price"
            step="0.01"
            min="0.01"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productImage"
            className="block text-gray-700 font-bold mb-2"
          >
            Product Image
          </label>
          <input
            type="file"
            id="productImage"
            onChange={(e) => setImage(e.target.files[0])}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            accept="image/*"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
    </>
  );
};

export default Admin;
