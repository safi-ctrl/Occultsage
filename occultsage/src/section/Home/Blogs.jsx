import React from 'react';
import { motion } from 'framer-motion'; 
import './blogs.css';

const Blogs = () => {
  const blogs = [
    { 
      id: 1, 
      tag: "Vastu for Wealth", 
      title: "5 Vastu Secrets to Boost Your Financial Growth", 
      desc: "Is your money draining away? Learn how to align your North zone with Kuber's energy to attract new opportunities and wealth flow.", 
      img: "/financial.jpg" 
    },
    { 
      id: 2, 
      tag: "No-Demolition Tips", 
      title: "How to Fix Vastu Dosha Without Any Structural Changes", 
      desc: "Fixing Vastu doesn't mean breaking walls. Discover the power of colors, pyramids, and elemental balancing to heal your home.", 
      img: "/vastudosh.jpg" 
    },
    { 
      id: 3, 
      tag: "Home Harmony", 
      title: "The Perfect Bedroom Vastu for Peaceful Sleep & Health", 
      desc: "Direction of your head while sleeping can change your life. Master the South-West placement for better relationships and stability.", 
      img: "/financial.jpg" 
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-upper-bg">
        <div className="title-area">
          <motion.span 
            className="sparkle"
            animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            ✦
          </motion.span>
          <h2>Vastu Insights by Acharya Pankaj</h2>
          <p>Scientific Vastu tips to transform your living space into a powerhouse of positivity.</p>
        </div>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <motion.div 
            className="blog-card-new" 
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: blog.id * 0.1 }}
          >
            <div className="card-img-wrapper">
              <img src={blog.img} alt={blog.title} />
              <span className="category-tag">{blog.tag}</span>
            </div>
            <div className="card-info">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <button className="read-btn">
                Continue Reading <span>→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;