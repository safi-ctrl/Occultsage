import React, { useEffect } from 'react';
import './Termsandcondition.css';

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="tc-page-container">
            <div className="tc-document-box">
                <header className="tc-doc-header">
                    <div className="tc-badge">Official Document</div>
                    <h1>Terms & <span>Conditions</span></h1>
                    <p>Governing the use of OccultSage Academy & Services</p>
                    <div className="tc-accent-bar"></div>
                </header>

                <div className="tc-intro-text">
                    <p>
                        Welcome to <strong>OccultSage!</strong> These terms and conditions govern your use of our website, 
                        products, and services. By accessing or using our website or purchasing our products/services, 
                        you agree to comply with these terms. Please read them carefully before proceeding.
                    </p>
                </div>

                <div className="tc-legal-sections">
                    <section className="tc-block">
                        <div className="tc-block-head">
                            <span className="tc-id">01</span>
                            <h2>Use of Website</h2>
                        </div>
                        <p>You must be at least <strong>18 years old</strong> to use our website or purchase our products/services. You agree to provide accurate, current, and complete information when registering. You are responsible for maintaining the confidentiality of your account and for all activities under your account.</p>
                    </section>

                    <section className="tc-block">
                        <div className="tc-block-head">
                            <span className="tc-id">02</span>
                            <h2>Intellectual Property</h2>
                        </div>
                        <p>All content on our website—including text, graphics, logos, images, videos, and software—is the property of <strong>OccultSage</strong>. It is protected by copyright laws. You may not reproduce, distribute, modify, or transmit any content without our prior written consent.</p>
                    </section>

                    <section className="tc-block">
                        <div className="tc-block-head">
                            <span className="tc-id">03</span>
                            <h2>Products and Services</h2>
                        </div>
                        <p>Our products and services are provided for educational and informational purposes only. We make no guarantees regarding the accuracy or reliability of the information. You acknowledge that results from using our products/services vary and depend on individual circumstances.</p>
                    </section>

                    <section className="tc-block">
                        <div className="tc-block-head">
                            <span className="tc-id">04</span>
                            <h2>Pricing and Payment</h2>
                        </div>
                        <p>Prices are subject to change without notice. We reserve the right to modify or discontinue any service at any time. Payment is required at the time of purchase. You authorize us to charge your provided payment method for any purchases made.</p>
                    </section>

                    <section className="tc-block">
                        <div className="tc-block-head">
                            <span className="tc-id">05</span>
                            <h2>Refund and Cancellation</h2>
                        </div>
                        <p>Refunds are subject to approval and may be issued in certain circumstances, such as service defects or dissatisfaction, in accordance with our policy. Cancellations may be subject to fees depending on the nature of the product/service.</p>
                    </section>

                    <section className="tc-block">
                        <div className="tc-block-head">
                            <span className="tc-id">06</span>
                            <h2>User Conduct</h2>
                        </div>
                        <p>Prohibited activities include hacking, spamming, impersonation, and unauthorized access to our systems. You agree to use our services for lawful purposes only and to respect the rights of others.</p>
                    </section>

                    <section className="tc-block">
                        <div className="tc-block-head">
                            <span className="tc-id">07</span>
                            <h2>Limitation of Liability</h2>
                        </div>
                        <p>To the fullest extent permitted by law, <strong>OccultSage</strong> and its affiliates shall not be liable for any direct, indirect, incidental, or punitive damages arising from your use of our website, including loss of profits, data, or goodwill.</p>
                    </section>

                    <section className="tc-block">
                        <div className="tc-block-head">
                            <span className="tc-id">08</span>
                            <h2>Indemnification</h2>
                        </div>
                        <p>You agree to indemnify and hold harmless OccultSage from any claims, liabilities, or expenses arising from your use of our website or your violation of these terms and conditions.</p>
                    </section>

                    <section className="tc-block tc-highlight">
                        <div className="tc-block-head">
                            <span className="tc-id">09</span>
                            <h2>Governing Law</h2>
                        </div>
                        <p>These terms and conditions shall be governed by and construed in accordance with the <strong>laws of Delhi</strong>. Any disputes shall be subject to the exclusive jurisdiction of the <strong>courts of Delhi</strong>.</p>
                    </section>

                    <section className="tc-block">
                        <div className="tc-block-head">
                            <span className="tc-id">10</span>
                            <h2>Changes to Terms</h2>
                        </div>
                        <p>We reserve the right to update these terms at any time. Any changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the revised terms.</p>
                    </section>
                </div>

                <footer className="tc-doc-footer">
                    <p>For further assistance, reach us at: <strong>info@occultsage.com</strong></p>
                    <div className="tc-final-line">© 2026 OccultSage Academy. All Rights Reserved.</div>
                </footer>
            </div>
        </div>
    );
};

export default TermsConditions;