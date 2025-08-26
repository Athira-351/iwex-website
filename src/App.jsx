import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Career from "./pages/Career";
import JobDetails from "./pages/JobDetails";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import Enquiry from "./pages/Enquiry";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/career" element={<Career />} />
      <Route path="/career/:id" element={<JobDetails />} />
      <Route path="/training" element={<Training />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/enquiry" element={<Enquiry />} />
    </Routes>
  );
}