import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Sections
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./section/chatboat/Chatbot"; 

// General Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Vedeos from "./pages/Vedeos";
import Contactus from "./pages/Contactus";
import PrivacyPolicy from "./pages/privacypolicy"; 

// --- Blog & Admin Pages ---
import BlogPage from "./pages/BlogPage"; 
import SingleBlog from "./pages/SingleBlog"; 
import AddBlog from "./pages/AddBlog"; // Aapka Admin Panel jahan se blog upload honge

// Course Detail Sections
import Astrology from "./section/course/Astrology"; 
import Astrologyvedic from "./section/course/Astrologyvedic";
import AstrologyvastuCombo from "./section/course/AstrologyvastuCombo";
import Neomerology from "./section/course/Neomerology";
import Tarotcard from "./section/course/Tarotcard";
import PalmistryCourse from "./section/course/PalmistryCourse";
import WatchReading from "./section/course/WatchReading";
import FaceReading from "./section/course/FaceReading";
import ExploreCourses from "./section/Home/ExploreCourses";

function App() {
  return (
    <Router>
      {/* Navbar hamesha top par rahega */}
      <Navbar />

      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Vedeos" element={<Vedeos />} />
        <Route path="/explore-courses" element={<ExploreCourses />} />
        <Route path="/contact" element={<Contactus />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>

        {/* --- Course Routes --- */}
        <Route path="/course/numerology" element={<Neomerology />} />
        <Route path="/course/astrologyvedic" element={<Astrologyvedic />} />
        <Route path="/course/astrologyvastucombo" element={<AstrologyvastuCombo />} />
        <Route path="/course/palmistry" element={<PalmistryCourse />} />
        <Route path="/course/facereading" element={<FaceReading />} />
        <Route path="/course/watchreading" element={<WatchReading />} />
        <Route path="/course/tarotcard" element={<Tarotcard />} />
        <Route path="/course/motionreading" element={<FaceReading />} /> 
        <Route path="/astrology" element={<Astrology />} />

        {/* --- Blog System --- */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        
        {/* --- Admin Secret Route (Only for Pankaj) --- */}
        {/* Is raste par jaakar aap Google Docs link aur Title add kar sakte ho */}
        <Route path="/add-secret-blog-mongo" element={<AddBlog />} />
        
      </Routes>

      {/* Floating Elements */}
      <Chatbot /> 
      <Footer />
    </Router>
  );
}

export default App;