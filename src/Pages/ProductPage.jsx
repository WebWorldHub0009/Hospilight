import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiShoppingCart } from "react-icons/fi";
import bg from "../assets/dbg.jpg"
import { BASE_URL } from "../config";

export default function ProductPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${BASE_URL}/products/getAll`);
      const data = await res.json();

      const filtered = data.products.filter(
        (item) =>
          item.category?.toLowerCase().replace(/\s+/g, "-") === category
      );

      setProducts(filtered);
      setLoading(false);
    } catch (error) {
      console.error("❌ Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f8ff]">
  
  {/* ✅ Hero Section */}
<div
  className="relative h-[40vh] md:h-[70vh] w-full bg-cover bg-center flex flex-col items-center justify-center text-center"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 px-4 space-y-4">
    <h1 className="text-[#3A8DFF] text-4xl md:text-6xl font-extrabold capitalize drop-shadow-lg tracking-wide">
      {category.split("-").join(" ")} Collection
    </h1>

    <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
      “Elegance in every detail, crafted to elevate your experience.”
    </p>
  </div>
</div>



  {/* ✅ Main Heading */}
  <div className="py-8 px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#3A8DFF] drop-shadow mb-3 uppercase">
      Explore {category.split("-").join(" ")}
    </h2>
    <p className="text-gray-700 text-md md:text-lg max-w-3xl mx-auto">
      Discover our premium selections tailored for your comfort and lifestyle needs.
    </p>
  </div>

  {/* ✅ Product Cards */}
  <div className="px-4 md:px-16 pb-20">
    {loading ? (
      <p className="text-center text-lg text-gray-600 animate-pulse">Loading products...</p>
    ) : products.length > 0 ? (
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
       {products.map((product, i) => (
  <motion.div
    key={product._id}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}
    className="relative overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white group transform transition-all hover:scale-[1.03] hover:shadow-2xl duration-300"
  >
    {/* 🎁 Floating Badge */}
    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#38C172] to-[#3A8DFF] text-white text-xs font-bold py-1 px-3 rounded-full shadow-md z-10 animate-pulse">
      Hospilight
    </div>

    {/* 🖼️ Product Image with Gradient Hover */}
    <div className="relative">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div> */}
    </div>

    {/* 📄 Content Section */}
    <div className="p-5 flex flex-col gap-3">
      <h3 className="text-2xl font-extrabold text-[#3A8DFF] tracking-wide leading-tight">
        {product.title}
      </h3>

      <p className="text-sm text-gray-600 line-clamp-3">
        {product.description.length > 110
          ? product.description.slice(0, 110) + "..."
          : product.description}
      </p>

      {/* 💰 Price and Actions */}
      <div className="flex items-center justify-between ">
        <span className="text-xl font-bold text-[#38C172] drop-shadow-lg">
          ₹ {product.price}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/products/${product._id}`)}
            className="px-4 py-2 bg-gradient-to-r from-[#3A8DFF] to-[#38C172] text-white rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition"
          >
            View
          </button>
          <button
            onClick={() => navigate(`/contact`)}
            className="px-4 py-2 bg-gradient-to-r from-[#38C172] to-[#3A8DFF] text-white rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition"
          >
            Buy
          </button>
        </div>
      </div>
    </div>

    {/* ✨ Bottom Glow Border */}
    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#3A8DFF] via-[#38C172] to-[#3A8DFF] opacity-0 group-hover:opacity-100 transition-all"></div>
  </motion.div>
))}

      </motion.div>
    ) : (
      <p className="text-center text-gray-500 text-lg">No products found in this category.</p>
    )}
  </div>
</div>

  );
}
