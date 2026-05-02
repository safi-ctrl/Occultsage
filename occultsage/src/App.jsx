import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./section/chatboat/Chatbot"; 
import "./Styles/Courses.css"; 
import ScrollToTop from './pages/ScrollToTop';


import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Vedeos from "./pages/Vedeos";
import Contactus from "./pages/Contactus";
import PrivacyPolicy from "./pages/privacypolicy"; 
import TermsPage from './pages/TermsPage';
import BlogPage from "./pages/BlogPage"; 
import AddBlog from "./pages/AddBlog"; 
import SubmitBlog from "./pages/SubmitBlog"; 
import AdminDashboard from "./pages/AdminDashboard"; 
import OccultAdmin from './pages/OccultAdmin'; 
import Consultancy from './pages/consultancy';
import Blogsmain from './pages/Blogsmain';
import MainThankyou from './pages/MainThankyou';


import SingleBlog from "./section/Singlepage/SingleBlog"; 
import Astrology from "./section/course/Astrology"; 
import Astrologyvedic from "./section/course/Astrologyvedic";
import AstrologyvastuCombo from "./section/course/AstrologyvastuCombo";
import Neomerology from "./section/course/Neomerology";
import Tarotcard from "./section/course/Tarotcard";
import PalmistryCourse from "./section/course/PalmistryCourse";
import WatchReading from "./section/course/WatchReading";
import FaceReading from "./section/course/FaceReading";
import MotionReading from "./section/course/MotionReading"; 
import AllCertifications from "./section/Home/AllCertifications";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Vedeos" element={<Vedeos />} />
        
        <Route path="/contact" element={<Contactus />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/terms-conditions" element={<TermsPage />} />
        <Route path="/consultancy" element={<Consultancy />} />
        <Route path="/ExploreCourses" element={<Blogsmain />} />
        <Route path="/thank-you/*" element={<MainThankyou />} />

       
        <Route path="/course/numerology" element={<Neomerology />} />
        <Route path="/course/astrologyvedic" element={<Astrologyvedic />} />
        <Route path="/course/astrologyvastucombo" element={<AstrologyvastuCombo />} />
        <Route path="/course/palmistry" element={<PalmistryCourse />} />
        <Route path="/course/facereading" element={<FaceReading />} />
        <Route path="/course/watchreading" element={<WatchReading />} />
        <Route path="/course/tarotcard" element={<Tarotcard />} />
        <Route path="/course/motionreading" element={<MotionReading />} /> 
        <Route path="/astrology" element={<Astrology />} />

        
        <Route path="/all-certifications" element={<AllCertifications />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/write-for-us" element={<SubmitBlog />} />
        <Route path="/add-secret-blog-mongo" element={<AddBlog />} />
        <Route path="/admin/approval-panel" element={<AdminDashboard />} />
        <Route path="/admin" element={<OccultAdmin />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <AnimatedRoutes />
      <Chatbot /> 
      <Footer />
    </Router>
  );
}

export default App;