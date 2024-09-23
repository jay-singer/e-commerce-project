import axios from "axios";
import React, { useEffect, useState } from "react";

const DashboardTable = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const [newProductImage, setNewProductImage] = useState(null);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editingProduct, setEditingProduct] = useState({ name: "", price: "" });
  const [addingPost, setAddingPost] = useState(false);

  // Function to open the form for adding a new product
  const openAddPostForm = () => {
    setAddingPost(true);
  };

  // Function to close the form after adding a new product
  const closeAddPostForm = () => {
    setAddingPost(false);
    setNewProduct({ name: "", price: "" });
    setNewProductImage(null); // Reset the image input
  };

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle new product input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image selection
  const handleImageChange = (e) => {
    setNewProductImage(e.target.files[0]); // Set the image file
  };

  // Handle editing product input changes
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Add new product (POST request with image)
  const handleAddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", newProduct.name);
      formData.append("price", newProduct.price);
      formData.append("image", newProductImage); // Append the image file

      const response = await axios.post(
        "http://localhost:3000/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure the correct header for file upload
          },
        }
      );
      setProducts([...products, response.data]);
      closeAddPostForm(); // Close the form after adding a product
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Delete product by ID (DELETE request)
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Edit product by ID (PUT request)
  const handleEditProduct = async (id) => {
    try {
      await axios.put(`http://localhost:3000/products/${id}`, editingProduct);
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, ...editingProduct } : product
        )
      );
      setEditingProductId(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      {/* Overlay for form and blur background */}
      <div className={`relative ${addingPost ? "blur-sm" : ""}`}>
        <h2 className="text-2xl font-bold mb-6">Product Dashboard</h2>

        {/* Add New Product Button */}
        <div className="mb-6">
          <button
            onClick={openAddPostForm}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
          >
            Add New Product
          </button>
        </div>

        {/* Products Table */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{product.id}</td>
                <td className="py-2 px-4">
                  {editingProductId === product.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editingProduct.name}
                      onChange={handleEditInputChange}
                      className="border p-2 rounded w-full"
                    />
                  ) : (
                    product.name
                  )}
                </td>
                <td className="py-2 px-4">
                  {editingProductId === product.id ? (
                    <input
                      type="text"
                      name="price"
                      value={editingProduct.price}
                      onChange={handleEditInputChange}
                      className="border p-2 rounded w-full"
                    />
                  ) : (
                    `$${product.price}`
                  )}
                </td>
                <td className="py-2 px-4 flex space-x-2">
                  {editingProductId === product.id ? (
                    <>
                      <button
                        onClick={() => handleEditProduct(product.id)}
                        className="bg-green-500 text-white py-1 px-3 rounded-md"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingProductId(null)}
                        className="bg-red-500 text-white py-1 px-3 rounded-md"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditingProductId(product.id);
                          setEditingProduct({
                            name: product.name,
                            price: product.price,
                          });
                        }}
                        className="bg-yellow-500 text-white py-1 px-3 rounded-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="bg-red-500 text-white py-1 px-3 rounded-md"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Form Modal */}
      {addingPost && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Add New Product</h3>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="block w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="price"
              placeholder="Product Price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="block w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="block w-full mb-4"
            />
            <div className="flex space-x-4">
              <button
                onClick={handleAddProduct}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Add Product
              </button>
              <button
                onClick={closeAddPostForm}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardTable;
