import React from "react";
import { FiHome, FiPlus, FiList, FiLogOut, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function AdminSidebar({ activeTab, handleTabChange, sidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear localStorage to remove token and isAdmin
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");

    // ✅ Redirect to home page
    navigate("/");
  };

  return (
    <div className={`fixed z-40 md:relative top-0 left-0 h-full w-72 bg-[#3A8DFF] text-white flex flex-col justify-between py-8 px-6 transform transition-transform duration-300
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
      <div>
        <h1 className="text-3xl font-extrabold mb-2">Hospilight</h1>
        <p className="text-sm italic mb-6">"Precision in Lighting"</p>
        <div className="border-b border-white/30 mb-6"></div>

        <button className={`flex items-center gap-3 mb-4 w-full p-3 rounded-lg transition hover:bg-[#327ae3] ${activeTab === "dashboard" ? "bg-[#327ae3]" : ""}`} onClick={() => handleTabChange("dashboard")}>
          <FiHome /> Dashboard
        </button>
        <button className={`flex items-center gap-3 mb-4 w-full p-3 rounded-lg transition hover:bg-[#327ae3] ${activeTab === "create" ? "bg-[#327ae3]" : ""}`} onClick={() => handleTabChange("create")}>
          <FiPlus /> Create Product
        </button>
        <button className={`flex items-center gap-3 mb-4 w-full p-3 rounded-lg transition hover:bg-[#327ae3] ${activeTab === "getall" ? "bg-[#327ae3]" : ""}`} onClick={() => handleTabChange("getall")}>
          <FiList /> Get All Products
        </button>
        <a href="/" className="flex items-center gap-3 mt-4 p-3 rounded-lg transition hover:bg-[#327ae3]">
          <FiChevronRight /> Back to Home
        </a>
      </div>

      <div className="relative -top-27"> 
        <div className="border-t border-white/30 pt-4 text-sm">
          <p className="font-bold">GSTIN: 07AYGPS1635P1ZU</p>
          <p>Hospilight India</p>
        </div>
        <div
          className="flex items-center gap-2 mt-4 cursor-pointer hover:underline"
          onClick={handleLogout}
        >
          <FiLogOut /> Logout
        </div>
      </div>
    </div>
  );
}
