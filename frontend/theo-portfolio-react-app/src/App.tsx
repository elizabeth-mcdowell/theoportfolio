import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories";

import HamburgerNav from "./components/HamburgerNav";
import About from "./pages/About";

import Photos from "./pages/Photos";

import Contact from "./pages/Contact";export default function App() {
  return (
    <Router>
      <HamburgerNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photos" element={<Photos />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
