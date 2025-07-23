import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
 const token = localStorage.getItem("token");
const isAdmin = localStorage.getItem("isAdmin") === "true";

if (!token || !isAdmin) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-2xl text-red-600 font-bold">
      ❌ Access Denied - Admins Only
      <button
        onClick={() => window.location.href = "/"}
        className="mt-6 px-6 py-3 bg-[#3A8DFF] text-white rounded-xl text-lg"
      >
        Go to Home
      </button>
    </div>
  );
}
return children;
}
