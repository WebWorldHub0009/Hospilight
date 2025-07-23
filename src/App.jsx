import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Video from "./Pages/Video";
import AdminDashboard from "./Pages/AdminDashboard";
import LoginPage from "./Pages/LoginPage";
import ProtectedRoute from "./Pages/ProtectedRoute";
// import ProductPage from "./Pages/Products";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductPage from "./Pages/ProductPage";
import UpdateProduct from "./Pages/UpdateProduct";
import ProductDetails from "./Pages/ProductDetailPage";
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<LoginPage />} />
<Route path="/product/:category" element={<ProductPage />} />
<Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/update/:id" element={<UpdateProduct />} />


        {/* ✅ Protected Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
<FloatingButtons/>
      <Footer />

      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        pauseOnHover 
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
