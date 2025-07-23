import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";

export default function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/api/products/get/${id}`);
        const data = await res.json();
        if (res.ok) {
          setForm({
            title: data.product.title,
            category: data.product.category,
            description: data.product.description,
            price: data.product.price,
          });
        } else {
          toast.error("❌ " + data.message);
        }
      } catch (err) {
        console.error(err);
        toast.error("❌ Error fetching product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirmUpdate = async () => {
    setShowConfirm(false);
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("category", form.category);
    formData.append("description", form.description);
    formData.append("price", form.price);
    if (image) formData.append("image", image);

    try {
      const res = await fetch(`${BASE_URL}/products/update/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("✅ Product Updated Successfully");
        navigate("/admin/dashboard");
      } else {
        toast.error("❌ " + data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Error updating product");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F0FF] to-[#ffffff] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-xl p-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#3A8DFF]">Update Product</h2>

        {loading ? (
          <p className="text-center text-xl font-semibold text-gray-600">Loading product details...</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Product Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-[#3A8DFF] outline-none transition"
                placeholder="Enter product title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-[#3A8DFF] outline-none transition"
                required
              >
                <option value="">Select category</option>
                <option>OT Tables</option>
                <option>Surgical Ceiling Lights</option>
                <option>Examination Lights</option>
                <option>Derma Chair</option>
                <option>LED OT Lights</option>
                <option>Mobile OT Lights</option>
                <option>Surgical Cautery</option>
                <option>Hospital Bed</option>
                <option>Surgical Instrument</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Description</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows="4"
                className="w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-[#3A8DFF] outline-none transition"
                placeholder="Product description"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Price (₹)</label>
              <input
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-[#3A8DFF] outline-none transition"
                placeholder="Enter price"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Update Image (optional)</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3A8DFF] hover:bg-[#2F6CD3] text-white font-bold py-3 rounded-lg text-lg transition duration-300 shadow-md"
            >
              Update Product
            </button>
          </form>
        )}
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl text-center space-y-4">
            <h3 className="text-2xl font-bold text-[#3A8DFF]">Confirm Product Update</h3>
            <p><strong>Title:</strong> {form.title}</p>
            <p><strong>Category:</strong> {form.category}</p>
            <p><strong>Description:</strong> {form.description}</p>
            <p><strong>Price:</strong> ₹{form.price}</p>

            <div className="flex gap-4 mt-6 justify-center">
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmUpdate}
                className="bg-[#3A8DFF] hover:bg-[#2F6CD3] text-white font-bold py-2 px-6 rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
