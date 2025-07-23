import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  FiUsers,
  FiPackage,
  FiList,
  FiTrash2,
  FiPlus,
  FiFileText,
  FiSave,
} from "react-icons/fi";
import { BASE_URL } from "../config";

export default function DashboardOverview({ handleTabChange }) {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(9); // Static count
  const [totalUsers, setTotalUsers] = useState("40k+");
  const [adminNotes, setAdminNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState("");

  const fetchDashboardData = async () => {
    try {
      const resProducts = await fetch(`${BASE_URL}/products/getAll`);
      const productData = await resProducts.json();

      if (resProducts.ok && productData.products) {
        setTotalProducts(productData.products.length);
      } else {
        setTotalProducts(0);
      }

      // ✅ Static categories
      setTotalCategories(9);

      // ✅ Users not implemented
      setTotalUsers("Coming Soon");
    } catch (err) {
      toast.error("❌ Error fetching dashboard data");
      console.error("Dashboard Fetch Error:", err);
      setTotalProducts(0);
      setTotalCategories(9);
      setTotalUsers("Coming Soon");
    }
  };

  useEffect(() => {
    fetchDashboardData();
    const saved = localStorage.getItem("adminNotes");
    if (saved) setSavedNotes(saved);
  }, []);

  const handleSaveNotes = () => {
    localStorage.setItem("adminNotes", adminNotes);
    setSavedNotes(adminNotes);
    setAdminNotes("");
    toast.success("✅ Admin notes saved");
  };

  const handleDeleteNotes = () => {
    localStorage.removeItem("adminNotes");
    setSavedNotes("");
    toast.success("🗑️ Notes deleted");
  };

  const handleManageUsers = () => {
    toast.info("👥 Manage Users functionality coming soon 🚀");
  };

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold mb-4 text-[#3A8DFF]">Admin Dashboard</h2>
      <p className="text-lg text-gray-700 mb-6">
        Welcome back to <span className="font-bold text-[#38C172]">Hospilight Admin Panel</span>.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Products */}
        <div className="bg-[#3A8DFF] hover:bg-[#38C172] text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
          <h3 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <FiPackage /> {totalProducts}
          </h3>
          <p className="text-lg font-semibold">Total Products</p>
        </div>

        {/* Total Categories */}
        <div className="bg-[#3A8DFF] hover:bg-[#38C172] text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
          <h3 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <FiList /> {totalCategories}
          </h3>
          <p className="text-lg font-semibold">Total Categories</p>
        </div>

        {/* Total Users */}
        <div
          onClick={handleManageUsers}
          className="bg-[#3A8DFF] hover:bg-[#38C172] text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
        >
          <h3 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <FiUsers /> {totalUsers}
          </h3>
          <p className="text-lg font-semibold">Total Users</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
        <h3 className="text-2xl font-bold mb-2 text-[#38C172]">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => handleTabChange("create")}
            className="flex items-center justify-center gap-2 bg-[#3A8DFF] hover:bg-[#38C172] text-white font-semibold py-3 rounded-lg transition"
          >
            <FiPlus /> Create Product
          </button>
          <button
            onClick={() => handleTabChange("getall")}
            className="flex items-center justify-center gap-2 bg-[#3A8DFF] hover:bg-[#38C172] text-white font-semibold py-3 rounded-lg transition"
          >
            <FiFileText /> View All Products
          </button>
          <button
            onClick={handleManageUsers}
            className="flex items-center justify-center gap-2 bg-[#3A8DFF] hover:bg-[#38C172] text-white font-semibold py-3 rounded-lg transition"
          >
            <FiUsers /> Manage Users
          </button>
        </div>
      </div>

      {/* Recent Activities and Admin Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h4 className="text-xl font-bold mb-2 text-[#38C172]">Recent Activities</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✅ Product "Ceiling OT Light" added by Admin</li>
            <li>✅ 2 new user registrations today</li>
            <li>✅ Updated price for "Surgical Bed"</li>
          </ul>
        </div>

        {/* Admin Notes */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h4 className="text-xl font-bold mb-2 text-[#38C172]">Admin Notes</h4>

          {savedNotes && (
            <div className="bg-[#f0fdf4] p-4 rounded-lg text-sm text-gray-700 flex justify-between items-center">
              <div>
                <p className="font-semibold text-green-700">Saved Notes:</p>
                <p>{savedNotes}</p>
              </div>
              <button
                onClick={handleDeleteNotes}
                className="bg-red-100 hover:bg-red-200 p-2 rounded-lg text-red-700"
                title="Delete Notes"
              >
                <FiTrash2 />
              </button>
            </div>
          )}

          <textarea
            value={adminNotes}
            onChange={(e) => setAdminNotes(e.target.value)}
            className="w-full border rounded-lg p-4 text-gray-700"
            rows="4"
            placeholder="Add new admin notes here..."
          ></textarea>
          <button
            onClick={handleSaveNotes}
            className="flex items-center justify-center gap-2 bg-[#38C172] hover:bg-green-600 text-white font-bold px-4 py-3 rounded-lg w-full transition"
          >
            <FiSave /> Save Notes
          </button>
        </div>
      </div>
    </div>
  );
}
