import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import karo

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
import ProjectSargam from "./pages/ProjectSargam";
import ProjectGoa from "./pages/ProjectGoa";
import Propexity from "./pages/Propexity";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";


const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Navbar se pehle add karo */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-projects" element={<AllProjects />} />

        {/* Residential */}
        <Route path="/greenbunch-auria" element={<Auria />} />
        <Route path="/greenbunch-savana" element={<Savana />} />
        <Route path="/greenbunch-palm-drive" element={<PalmDrive />} />
        <Route path="/greenbunch-palms" element={<Palms />} />
        <Route path="/greenbunch-green-valley" element={<GreenValley />} />

        <Route path="/the-elements-goa" element={<ProjectGoa />} />
        <Route path="/greenbunch-Sargam" element={<ProjectSargam />} />
        <Route path="/propex-city" element={<Propexity/>} />

        {/* Commercial */}
        <Route path="/greenbunch-12th-avenue" element={<TwelfthAvenue />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;