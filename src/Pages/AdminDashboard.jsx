import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import AdminSidebar from "../Components/AdminSidebar";
import CreateProductForm from "../Components/CreateProductForm";
import ProductList from "../Components/ProductList";
import DashboardOverview from "../Components/DashboardOverview";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const navigate = useNavigate();

  const fetchDashboardStats = async () => {
    try {
      const res = await fetch(`${BASE_URL}/products/getAll`);
      const data = await res.json();
      if (res.ok) {
        setTotalProducts(data.products.length);
        const categories = new Set(data.products.map(p => p.category));
        setTotalCategories(categories.size);
      }
    } catch (err) {
      console.error("Error fetching dashboard stats", err);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="flex h-screen font-sans bg-gradient-to-br from-[#eef3ff] to-[#ffffff] relative">

      {/* Sidebar Laptop */}
      <div className="hidden md:block sticky top-0 h-screen w-72 shrink-0">
        <AdminSidebar
          activeTab={activeTab}
          handleTabChange={setActiveTab}
          sidebarOpen={true}
        />
      </div>

     

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto p-6">
        {activeTab === "dashboard" && (
          <DashboardOverview
            totalProducts={totalProducts}
            totalCategories={totalCategories}
            handleTabChange={setActiveTab}
          />
        )}
        {activeTab === "create" && <CreateProductForm />}
        {activeTab === "getall" && <ProductList />}
      </div>
    </div>
  );
}
