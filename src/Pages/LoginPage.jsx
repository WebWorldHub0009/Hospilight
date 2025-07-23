import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { BASE_URL } from "../config";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`${BASE_URL}/users/login`, {
      email,
      password,
    });

    if (response.data.token) {
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("isAdmin", response.data.isAdmin); // ✅ Fix here
  navigate("/admin/dashboard");


    } else {
      setError("Invalid response from server");
    }
  } catch (err) {
    console.error(err);
    setError(err.response?.data?.message || "Login failed, please try again");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e9f0ff] to-[#c8ddff] font-sans">
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl max-w-md w-full p-10 border-2 border-[#3A8DFF]/30 transition-all duration-500 hover:shadow-[0_8px_40px_-10px_rgba(58,141,255,0.5)]">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-[#3A8DFF] drop-shadow-md">Hospilight India</h1>
          <p className="text-gray-700 mt-2 font-medium">Admin Login Portal</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          <div>
            <label className="block mb-2 text-lg font-semibold text-gray-800">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border-2 border-gray-300 focus:border-[#3A8DFF] outline-none text-lg transition focus:shadow-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="relative">
            <label className="block mb-2 text-lg font-semibold text-gray-800">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl border-2 border-gray-300 focus:border-[#3A8DFF] outline-none text-lg transition focus:shadow-md pr-12"
              placeholder="Enter your password"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-15 cursor-pointer text-xl text-gray-500 hover:text-[#3A8DFF] transition"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          {error && (
            <p className="text-red-600 font-semibold text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#3A8DFF] hover:bg-[#327ae3] text-white font-bold py-4 rounded-xl text-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-8">
          <p>© 2025 <span className="font-semibold">Hospilight India</span>. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
