import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

// Import your pages
import Home from "./components/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AllProjects from "./pages/AllProjects";
import Auria from "./pages/Auria";
import Savana from "./pages/Savana";
import PalmDrive from "./pages/palmDrive";
import Palms from "./pages/Palms";
import GreenValley from "./pages/GreenValley";
import TwelfthAvenue from "./pages/TwelfthAvenue";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-projects" element={<AllProjects />} />

        {/* Residential */}
        <Route path="/rps-auria" element={<Auria />} />
        <Route path="/rps-savana" element={<Savana />} />
        <Route path="/rps-palm-drive" element={<PalmDrive />} />
        <Route path="/rps-palms" element={<Palms />} />
        <Route path="/rps-green-valley" element={<GreenValley />} />

        {/* Commercial */}
        <Route path="/rps-12th-avenue" element={<TwelfthAvenue />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
