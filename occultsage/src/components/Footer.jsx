import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; 

const Footer = () => {
    // Page badalne par top par le jane ke liye function
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-pro">
            <div className="footer-grid">
                
                {/* 1. Brand Info & Contact */}
                <div className="footer-brand-box">
                    <h2 className="footer-logo">Occult<span>Sage</span></h2>
                    <p className="footer-tagline">Empowering lives through ancient Vedic sciences and structured spiritual wisdom.</p>
                    <div className="contact-wrapper">
                        <div className="contact-info-row">
                            <span className="icon-badge">📍</span>
                            <p>Sector-12A Rd,Block A,Sector 12 Dwarka,New Delhi,110078</p>
                        </div>
                        <div className="contact-info-row">
                            <span className="icon-badge">✉️</span>
                            <a href="mailto:info@occultsage.com">info@occultsage.com</a>
                        </div>
                        <div className="contact-info-row">
                            <span className="icon-badge">📞</span>
                            <a href="tel:+919540407086">+91 954040 7086</a>
                        </div>
                    </div>
                </div>

                {/* 2. Quick Navigation */}
                <div className="footer-links-column">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="nav-links">
                        <li><Link to="/" onClick={handleScrollToTop}>Home</Link></li>
                        <li><Link to="/about" onClick={handleScrollToTop}>About Us</Link></li>
                        <li><Link to="/contact" onClick={handleScrollToTop}>Contact Us</Link></li>
                        <li><Link to="/Blog" onClick={handleScrollToTop}>Blogs</Link></li>
                        <li><Link to="/videos" onClick={handleScrollToTop}>Videos</Link></li>
                    </ul>
                </div>

                {/* 3. Expert Courses */}
                <div className="footer-links-column wide-column">
                    <h3 className="footer-title">Our Professional Courses</h3>
                    <div className="course-grid-links">
                        <ul className="nav-links">
                            <li><Link to="/course/astrology" onClick={handleScrollToTop}>Predictive Astrology</Link></li>
                            <li><Link to="/course/vastu" onClick={handleScrollToTop}>Master Vastu Shastra</Link></li>
                            <li><Link to="/course/numerology" onClick={handleScrollToTop}>Advanced Numerology</Link></li>
                            <li><Link to="/course/tarot" onClick={handleScrollToTop}>Tarot Card Reading</Link></li>
                        </ul>
                        <ul className="nav-links">
                            <li><Link to="/course/palmistry" onClick={handleScrollToTop}>Professional Palmistry</Link></li>
                            <li><Link to="/course/face-reading" onClick={handleScrollToTop}>Face Reading</Link></li>
                            <li><Link to="/course/watch-reading" onClick={handleScrollToTop}>Watch Reading</Link></li>
                            <li><Link to="/course/motion-reading" onClick={handleScrollToTop}>Motion Reading</Link></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom Bar with Hidden Admin Access */}
            <div className="footer-legal-bar">
                <div className="legal-content">
                    <p>
                        &copy; 2026 
                        {/* SECRET ADMIN ACCESS POINT - Click on "OccultSage" to access Admin Panel */}
                        <Link 
                            to="/add-secret-blog-mongo" 
                            style={{ 
                                textDecoration: 'none', 
                                color: 'inherit', 
                                cursor: 'default', 
                                userSelect: 'none',
                                marginLeft: '4px'
                            }}
                        >
                            OccultSage.
                        </Link>
                        {" "}All Spiritual Rights Reserved
                    </p>
                    <div className="legal-links">
                        <Link to="/privacy-policy" onClick={handleScrollToTop}>Privacy Policy</Link>
                        <span className="divider">|</span>
                        <Link to="/terms-conditions" onClick={handleScrollToTop}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;