import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const navigate = useNavigate();

  const categories = [
    "All",
    "OT Tables",
    "Surgical Ceiling Lights",
    "Examination Lights",
    "Derma Chair",
    "LED OT Lights",
    "Mobile OT Lights",
    "Surgical Cautery",
    "Hospital Bed",
    "Surgical Instrument"
  ];

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/products/getAll`);
      const data = await res.json();
      if (res.ok) {
        setProducts(data.products);
        setFilteredProducts(data.products);
      } else toast.error("❌ Error fetching products");
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error("❌ Server error fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setShowDeletePopup(true);
  };

  const confirmDelete = async () => {
    if (!selectedProduct) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/products/delete/${selectedProduct._id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("✅ Product deleted");
        setShowDeletePopup(false);
        setSelectedProduct(null);
        fetchProducts();
      } else toast.error("❌ " + data.message);
    } catch (err) {
      console.error("Delete Error:", err);
      toast.error("❌ Server error during delete");
    }
  };

  // Filter by category and search
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // reset page after filter/search
  }, [searchTerm, selectedCategory, products]);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="px-10 py-5 w-full min-h-screen bg-[#f9f9f9]">
      <h2 className="text-3xl font-bold mb-6 text-[#3A8DFF]">All Products</h2>

      {/* Search Bar */}
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search product by title..."
          className="p-3 border rounded-lg flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg font-bold text-sm ${
              selectedCategory === cat
                ? "bg-[#3A8DFF] text-white"
                : "bg-white border text-[#3A8DFF]"
            } hover:bg-[#3A8DFF] hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List */}
      {loading ? (
        <p className="text-lg">Loading products...</p>
      ) : currentProducts.length === 0 ? (
        <p className="text-lg text-gray-500">No products found.</p>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-md max-h-[70vh] overflow-y-auto scrollbar-hide flex flex-col gap-4">
          {currentProducts.map((product) => (
            <div
              key={product._id}
              className="flex justify-between items-center border p-4 rounded-lg hover:shadow-lg transition"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-lg text-[#3A8DFF]">{product.title}</h3>
                <p className="text-sm text-gray-600">Category: {product.category}</p>
                <p className="text-sm text-gray-700 max-w-md">{product.description.slice(0, 100)}...</p>
                <p className="font-semibold text-green-600">Price: ₹{product.price}</p>
              </div>
              <div className="flex gap-3">
                <button
                  className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  title="Edit"
                  onClick={() => navigate(`/update/${product._id}`)}
                >
                  <FiEdit />
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  title="Delete"
                  onClick={() => handleDeleteClick(product)}
                >
                  <FiTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-bold ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#3A8DFF] text-white hover:bg-blue-700"
            }`}
          >
            Previous
          </button>
          <span className="font-bold text-[#3A8DFF]">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-bold ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#3A8DFF] text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Delete Confirmation */}
      {showDeletePopup && selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl text-center space-y-4">
            <h3 className="text-2xl font-bold text-[#3A8DFF]">Confirm Deletion</h3>
            <p className="text-gray-700 font-medium text-lg">{selectedProduct.title}</p>
            <p className="text-sm text-gray-600">Category: {selectedProduct.category}</p>
            <p className="text-sm text-gray-700 font-bold text-green-700">Price: ₹{selectedProduct.price}</p>
            <div className="flex gap-4 mt-6 justify-center">
              <button
                onClick={() => setShowDeletePopup(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
