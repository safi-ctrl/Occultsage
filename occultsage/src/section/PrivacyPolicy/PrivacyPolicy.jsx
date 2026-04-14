import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pp-container">
            <div className="pp-card">
                <header className="pp-header">
                    <h1>Privacy <span>Policy</span></h1>
                    <p>At OccultSage, we protect your journey towards spiritual wisdom.</p>
                </header>

                <div className="pp-body">
                    <section className="pp-section">
                        <h2>1. Introduction</h2>
                        <p>Welcome to <strong>OccultSage</strong>. We are committed to safeguarding the privacy of our students and visitors. This policy describes how we collect and use your data when you explore our Vedic Astrology, Vastu, Numerology, and other occult science courses.</p>
                    </section>

                    <section className="pp-section">
                        <h2>2. Information We Collect</h2>
                        <p>To provide a personalized learning experience, we may collect:</p>
                        <ul>
                            <li><strong>Personal Details:</strong> Name, Date of Birth, and Time of Birth (for Astrology practice).</li>
                            <li><strong>Contact Info:</strong> Email address and Phone number for course updates.</li>
                            <li><strong>Payment Data:</strong> Transaction details when you enroll in our professional courses.</li>
                        </ul>
                    </section>

                    <section className="pp-section">
                        <h2>3. How We Use Your Data</h2>
                        <p>Your information helps us in:</p>
                        <ul>
                            <li>Providing certified training and course materials.</li>
                            <li>Analyzing birth charts for educational purposes during live sessions.</li>
                            <li>Sending newsletters and information about upcoming batches with Acharya Pankaj Ji.</li>
                        </ul>
                    </section>

                    <section className="pp-section">
                        <h2>4. Data Confidentiality</h2>
                        <p>OccultSage follows a strict non-disclosure policy. We do not sell, trade, or rent your personal information to third parties. Your birth details and personal consultations remain 100% confidential between the mentor and the student.</p>
                    </section>

                    <section className="pp-section">
                        <h2>5. Cookies & Tracking</h2>
                        <p>Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings, though it may affect some features of our website.</p>
                    </section>

                    <section className="pp-section pp-contact">
                        <h2>6. Contact Us</h2>
                        <p>If you have any questions regarding this Privacy Policy, feel free to reach out:</p>
                        <div className="pp-contact-info">
                            <p><strong>Email:</strong> info@occultsage.com</p>
                            <p><strong>Address:</strong> Unit No. 1166, 11th floor, Vegas Mall, Dwarka Sec-14, Delhi - 110078</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;