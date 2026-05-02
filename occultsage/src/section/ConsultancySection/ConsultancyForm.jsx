import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, User, Phone, MapPin, MessageSquare, Mail, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ConsultancyForm.css';

const ConsultancyForm = () => {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("No file chosen");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '', 
    category: '',
    stage: 'new',
    concern: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setPreview(null);
    setFileName("No file chosen");
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const orderResponse = await fetch('http://localhost:5000/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount: 501, 
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
          category: formData.category,
          stage: formData.stage,
          concern: formData.concern
        }), 
      });

      const orderData = await orderResponse.json();
      
      if (!orderData.success) {
        alert("Order generate nahi ho paya!");
        setLoading(false);
        return;
      }

      
      const options = {
        key: orderData.key_id, 
        amount: orderData.order.amount,
        currency: "INR",
        name: "VASTU SHIKHAR",
        description: "Professional Vastu Consultation",
        order_id: orderData.order.id, 
        handler: async function (response) {
          
          const verifyResponse = await fetch('http://localhost:5000/api/payment/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              email: formData.email, 
              amount: "501" 
            }),
          });

          const verifyData = await verifyResponse.json();

          if (verifyData.success) {
            
            navigate(`/thank-you?razorpay_payment_id=${response.razorpay_payment_id}&amount=501`); 
          } else {
            alert("Payment verification failed! Please contact support.");
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#A3E635", 
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

    } catch (error) {
      console.error("Frontend Error:", error);
      alert("Network Error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="booking-form-section">
      <div className="form-container">
        <div className="form-info-side">
          <span className="form-kicker">Secure Your Slot</span>
          <h2>Book a Private <br /><span className="highlight-lime">Consultation</span></h2>
          <p>Fill out the details below, and our team will get back to you within 24 hours.</p>
          
          <div className="form-benefits">
            <div className="benefit-item">
              <div className="check-circle">✓</div>
              <span>100% Confidential Analysis</span>
            </div>
            <div className="benefit-item">
              <div className="check-circle">✓</div>
              <span>Direct Call with Acharya Ji</span>
            </div>
          </div>
        </div>

        <motion.div 
          className="main-form-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form className="intake-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <label><User size={16} /> Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Rahul Sharma" required />
              </div>
              <div className="input-group">
                <label><Phone size={16} /> WhatsApp Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
              </div>
            </div>

            <div className="input-group full-width" style={{ marginBottom: '15px' }}>
              <label><Mail size={16} /> Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="rahul@example.com" required />
            </div>

            <div className="form-row">
              <div className="input-group">
                <label><MapPin size={16} /> Consultancy Type</label>
                <select name="category" value={formData.category} onChange={handleChange} required>
                  <option value="">Select Category</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="astro">Astro-Vastu Sync</option>
                </select>
              </div>
              <div className="input-group">
                <label>Property Stage</label>
                <select name="stage" value={formData.stage} onChange={handleChange} required>
                  <option value="new">New Construction</option>
                  <option value="existing">Existing</option>
                </select>
              </div>
            </div>

            <div className="input-group full-width">
              <label><MessageSquare size={16} /> Primary Concern</label>
              <textarea name="concern" value={formData.concern} onChange={handleChange} placeholder="Tell us about the main issues..." rows="3"></textarea>
            </div>

            <div className="input-group full-width">
              <label>Upload Property Map (Optional)</label>
              {preview ? (
                <div className="thumbnail-preview-container">
                  <img src={preview} alt="Property Preview" className="form-thumbnail" />
                  <button type="button" className="remove-img-btn" onClick={removeImage}>
                    <X size={14} />
                  </button>
                  <span className="file-name-tag">{fileName}</span>
                </div>
              ) : (
                <div className="file-upload-wrapper">
                  <input type="file" id="map-upload" accept="image/*" onChange={handleFileChange} hidden />
                  <label htmlFor="map-upload" className="custom-file-label">
                    <Upload size={20} />
                    <span>Click to upload property map</span>
                  </label>
                </div>
              )}
            </div>

            <motion.button 
              type="submit" 
              className="submit-btn-luxury"
              disabled={loading} 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Processing..." : "Pay & Book Now"} <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultancyForm;