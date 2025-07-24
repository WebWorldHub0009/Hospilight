import React, { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";

export default function CreateProductForm() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
  });
  const [image, setImage] = useState(null);

 

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.title || !form.category || !form.description || !form.price || !image) {
    toast.error("❌ All fields including image are required!");
    return;
  }

  try {
    const token = localStorage.getItem("token");
    if (!token) return toast.error("❌ Unauthorized: Please login!");

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    formData.append("image", image);

    const res = await fetch(`${BASE_URL}/api/products/create`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("✅ Product created successfully!");
      setForm({ title: "", category: "", description: "", price: "" });
      setImage(null);
    } else {
      toast.error(`❌ Error: ${data.message}`);
    }
  } catch (err) {
    console.error("❌ Error Details:", err);
    toast.error("❌ Server error. Please try again later.");
  }
};


  return (
    <div className="px-10 py-2 w-full">
      <h2 className="text-4xl font-bold mb-8 text-[#3A8DFF]">Create New Product</h2>
      <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-[#3A8DFF]/20 max-w-4xl mx-auto space-y-8">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          {/* Product Title */}
          <div className="flex flex-col gap-2">
            <label className="text-md text-gray-700">Product Name</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Enter product name"
              className="p-2 border rounded-xl outline-none text-lg focus:border-[#3A8DFF]"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label className="text-md text-gray-700">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="p-2 border rounded-xl text-lg outline-none focus:border-[#3A8DFF] bg-white"
            >
              <option value="">Select Category</option>
              {[
                "OT Tables", "Surgical Ceiling Lights", "Examination Lights",
                "Derma Chair", "LED OT Lights", "Mobile OT Lights",
                "Surgical Cautery", "Hospital Bed", "Surgical Instrument"
              ].map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-md text-gray-700">Description</label>
            <textarea
              rows="4"
              name="description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Enter product description"
              className="p-2 border rounded-xl outline-none text-md focus:border-[#3A8DFF] resize-none"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <label className="text-md text-gray-700">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              placeholder="Enter price"
              className="p-2 border rounded-xl outline-none text-lg focus:border-[#3A8DFF]"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col gap-2">
            <label className="text-md text-gray-700">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="p-2 border rounded-xl text-lg focus:border-[#3A8DFF]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#3A8DFF] text-white py-3 rounded-xl text-xl font-bold shadow-md hover:scale-105 transition-transform"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}
