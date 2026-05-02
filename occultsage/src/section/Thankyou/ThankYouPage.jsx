import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ThankYouPage.css';

const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [details, setDetails] = useState({ paymentId: 'N/A', amount: '0' });

  useEffect(() => {
    
    const params = new URLSearchParams(location.search);
    const payId = params.get('razorpay_payment_id');
    
    if (payId) {
      setDetails({ paymentId: payId, amount: "501.00" }); 
    }

    
    window.scrollTo(0, 0);
  }, [location]);

  const whatsappLink = `https://wa.me/91XXXXXXXXXX?text=Hi, My Payment ID is ${details.paymentId}. Please confirm my slot.`;

  return (
    <div className="ty-wrapper">
      <div className="ty-card-mini">
        
        <div className="ty-icon-section">
          <div className="ty-circle-fill">
            <svg className="ty-check-svg" viewBox="0 0 52 52">
              <circle className="ty-check-circle" cx="26" cy="26" r="25" fill="none" />
              <path className="ty-check-path" fill="none" d="M14 27l7 7 16-16" />
            </svg>
          </div>
          <h2 className="ty-status-text">Payment Successful</h2>
        </div>

        
        <div className="ty-body">
          <p className="ty-subtext">A confirmation email has been sent to your registered ID.</p>
          
          <div className="ty-info-grid">
            <div className="ty-info-row">
              <span>Amount Paid</span>
              <span className="ty-bold">₹{details.amount}</span>
            </div>
            <div className="ty-info-row">
              <span>Payment ID</span>
              <span className="ty-id">{details.paymentId}</span>
            </div>
          </div>
        </div>

        
        <div className="ty-footer">
          <p className="ty-action-hint">Finalize your slot via WhatsApp</p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="ty-btn-primary">
            <i className="fab fa-whatsapp"></i> Book My Slot
          </a>
          <button onClick={() => navigate('/')} className="ty-btn-ghost">Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;