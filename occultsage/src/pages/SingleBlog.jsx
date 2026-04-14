import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SidebarSection from "../section/sidebar/Sidebar";
import "./SingleBlog.css";

const SingleBlog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        const data = await response.json();
        setBlogData(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch Error:", err);
        setLoading(false);
      }
    };
    fetchCurrentBlog();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <div className="wisdom-loader">Seeking Wisdom...</div>;
  if (!blogData) return <div className="wisdom-error">Knowledge Path Not Found.</div>;

  return (
    <div className="os-blog-root">
      {/* --- HERO BANNER --- */}
      <header className="os-hero" style={{ backgroundImage: `linear-gradient(rgba(2, 12, 27, 0.7), rgba(2, 12, 27, 0.9)), url(${blogData.image})` }}>
        <div className="os-hero-content">
          <span className="os-badge">{blogData.category}</span>
          <h1>{blogData.title}</h1>
          <div className="os-gold-line"></div>
        </div>
      </header>

      {/* --- MAIN LAYOUT GRID --- */}
      <div className="os-grid-container">
        
        {/* LEFT: CONTENT CARD (Now with Real Content, No Iframe) */}
        <main className="os-main-article">
          <div className="os-article-header">
            <h2 className="article-inner-title">{blogData.title}</h2>
            <p className="os-excerpt">{blogData.excerpt}</p>
          </div>
          
         <div className="os-content-renderer">
    <div className="blog-body-text">
        {blogData.content ? (
            <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
        ) : (
            <p style={{color: 'red'}}>Bhai, Database mein "content" field khali hai!</p>
        )}
    </div>
</div>
        </main>

        {/* RIGHT: FIXED SIDEBAR */}
        <aside className="os-sidebar-sticky">
          <div className="os-sidebar-card">
            <h3 className="sidebar-heading">RECENT <span className="lime-text">POSTS</span></h3>
            <div className="lime-divider"></div>
            
            <SidebarSection />

            <div className="sidebar-cta-box">
              <h4>Need Expert Advice?</h4>
              <p>Get personalized guidance from Acharya Pankaj.</p>
              <button className="os-lime-btn">Book Consultation</button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default SingleBlog;