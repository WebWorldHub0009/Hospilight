import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Video from "./Pages/Video";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
          <Route path="/video" element={<Video/>} />  
        <Route path="/contact" element={<Contact/>} />  
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App;
