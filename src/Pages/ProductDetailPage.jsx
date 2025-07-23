import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiArrowLeft, FiAward, FiStar, FiThumbsUp } from "react-icons/fi";
import bg from "../assets/mmbg.jpg"
import { BASE_URL } from "../config";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`${BASE_URL}/get/${id}`);
      const data = await res.json();
      setProduct(data.product);
    } catch (err) {
      console.error("❌ Error fetching product:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600 font-bold">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-700 gap-4">
        <p className="text-3xl font-bold">❌ Product Not Found</p>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-[#3A8DFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          <FiArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f8ff]">

      {/* ✅ Hero Section */}
      <div
        className="h-[70vh] w-full bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
       <div className="relative h-[40vh] md:h-[70vh] w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url('/your-hero-image.jpg')` }}>
 
  
  <h1 className="z-10 text-[#3A8DFF] text-5xl md:text-6xl font-extrabold capitalize text-center drop-shadow-xl px-4">
    Welcome to Hospilight
  </h1>
  
  <p className="z-10 text-white text-lg md:text-2xl text-center mt-4 max-w-3xl px-6 italic drop-shadow">
    “Empowering healthcare with innovation, quality, and trust.”
  </p>
</div>
</div>


      {/* ✅ Heading + Quote */}
      <div className="text-center py-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3A8DFF] drop-shadow mb-4">Premium Hospilight Product</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg font-medium italic">
          “Transforming healthcare spaces with elegance, efficiency, and innovation.”
        </p>
      </div>

      {/* ✅ Product Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-8">
        
        {/* Left - Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img src={product.image} alt={product.title} className="rounded-3xl shadow-2xl max-h-[500px] w-full object-contain" />
        </div>

        {/* Right - Details */}
        <div className="md:w-1/2 w-full bg-white rounded-2xl p-8 shadow-xl space-y-6">
          <h3 className="text-4xl font-extrabold text-[#3A8DFF] capitalize">{product.title}</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {product.description?.length > 300
              ? product.description.slice(0, 300) + "..."
              : product.description}
          </p>
          <div className="flex justify-between items-center text-2xl font-bold text-[#38C172]">
            ₹ {product.price}
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="flex items-center justify-center gap-3 bg-[#38C172] hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-lg transition"
          >
            <FiShoppingCart /> Buy Now
          </button>
        </div>
      </div>

      {/* ✅ Highlights Section */}
      <div className="bg-[#3A8DFF] py-12 text-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
        <div className="space-y-3">
          <FiAward className="text-4xl mx-auto" />
          <h4 className="text-2xl font-bold">5+ Years of Trust</h4>
          <p>Leading innovation and design in the healthcare industry.</p>
        </div>
        <div className="space-y-3">
          <FiStar className="text-4xl mx-auto" />
          <h4 className="text-2xl font-bold">Top Rated Quality</h4>
          <p>Certified premium products with global industry standards.</p>
        </div>
        <div className="space-y-3">
          <FiThumbsUp className="text-4xl mx-auto" />
          <h4 className="text-2xl font-bold">1000+ Happy Clients</h4>
          <p>Hospitals and clinics trust our premium range of products.</p>
        </div>
      </div>

      {/* ✅ Why Choose Hospilight */}
      <div className="py-12 px-6 md:px-20 text-center space-y-8">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#3A8DFF]">Why Choose Hospilight?</h3>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          At Hospilight, we are committed to delivering excellence in every product. From superior craftsmanship to unbeatable durability and modern designs, every product promises performance with style. Experience premium healthcare equipment designed for the modern era.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#3A8DFF] text-white px-8 py-4 text-xl rounded-full font-bold hover:bg-blue-800 transition"
        >
          Get in Touch
        </button>
      </div>

    </div>
  );
}
