import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pp-wrapper">
            <div className="pp-container">
                <header className="pp-header">
                    <h1>Privacy <span>Policy</span></h1>
                    <p className="pp-last-updated">Effective Date: April 2026</p>
                    <div className="pp-divider"></div>
                </header>

                <div className="pp-intro">
                    <p>
                        At <strong>OccultSage</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. 
                        This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                </div>

                <div className="pp-content">
                    <section className="pp-section">
                        <div className="section-number">01</div>
                        <div className="section-text">
                            <h2>Information We Collect</h2>
                            <p>We collect various types of information when you interact with our website or utilize our services, including:</p>
                            <ul>
                                <li><strong>Personal Information:</strong> Name, email address, phone number, and billing address.</li>
                                <li><strong>Payment Information:</strong> Credit card details or other payment account information for secure transactions.</li>
                                <li><strong>Usage Information:</strong> IP address, browser type, device identifiers, and pages visited.</li>
                                <li><strong>Cookies:</strong> We use tracking technologies to enhance your experience. You can control these through your browser settings.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="pp-section">
                        <div className="section-number">02</div>
                        <div className="section-text">
                            <h2>How We Use Your Information</h2>
                            <p>We use the collected information for various professional purposes:</p>
                            <ul>
                                <li>Providing and improving our products and Vedic services.</li>
                                <li>Processing transactions and fulfilling course enrollments.</li>
                                <li>Communicating account updates, orders, and promotional offers.</li>
                                <li>Personalizing your experience and delivering relevant spiritual content.</li>
                                <li>Preventing fraud and ensuring the security of our community.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="pp-section">
                        <div className="section-number">03</div>
                        <div className="section-text">
                            <h2>Information Sharing and Disclosure</h2>
                            <p>We may share your information with third parties in the following cases:</p>
                            <ul>
                                <li><strong>Service Providers:</strong> Partners who assist in payment processing and order fulfillment.</li>
                                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, or government requests.</li>
                                <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or asset sale.</li>
                                <li><strong>Consent:</strong> With your explicit permission for specific collections.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="pp-section">
                        <div className="section-number">04</div>
                        <div className="section-text">
                            <h2>Data Security</h2>
                            <p>We take reasonable measures to protect your information and prevent unauthorized access. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                        </div>
                    </section>

                    <section className="pp-section">
                        <div className="section-number">05</div>
                        <div className="section-text">
                            <h2>Your Choices and Rights</h2>
                            <p>You have the right to access, correct, or delete your personal information. You may also choose to opt out of certain communications or data processing activities at any time.</p>
                        </div>
                    </section>

                    <section className="pp-section">
                        <div className="section-number">06</div>
                        <div className="section-text">
                            <h2>Changes to This Policy</h2>
                            <p>We may update this Privacy Policy periodically to reflect changes in our practices or laws. We encourage you to review this page regularly for any updates.</p>
                        </div>
                    </section>

                    <section className="pp-contact-card">
                        <h2>Contact Us</h2>
                        <p>If you have any questions, concerns, or feedback about our privacy practices, please reach out to our team:</p>
                        <div className="contact-grid">
                            <div className="contact-item">
                                <strong>Email:</strong> <span>info@occultsage.com</span>
                            </div>
                            <div className="contact-item">
                                <strong>Phone:</strong> <span>+91-9540407086</span>
                            </div>
                            <div className="contact-item">
                                <strong>Location:</strong> <span>Dwarka sec-12A,The Occultsage pvt.ltd</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;