import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // CSS file link ki gayi hai

const SidebarSection = () => {
  const [data, setData] = useState({ latest: [], trending: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs/sidebar-data");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        console.error("Sidebar Fetch Error:", err);
        setLoading(false);
      }
    };
    fetchSidebarData();
  }, []);

  // Google Doc ID nikalne ka function
  const getDocId = (url) => url?.match(/\/d\/(.*?)(\/|$)/)?.[1];

  return (
    <aside className="sidebar-main">
      {loading ? (
        <p className="loading-text">Fetching Wisdom...</p>
      ) : (
        <>
          {/* TRENDING SECTION */}
          <section className="sidebar-group">
            <h3 className="sidebar-title">Trending Blogs <span className="icon">🔥</span></h3>
            <div className="trending-list">
              {data.trending.map((blog) => (
                <Link 
                  key={blog._id} 
                  to={`/blog/${getDocId(blog.doc_link)}`} 
                  className="trending-item"
                >
                  <span className="trending-bullet">✦</span>
                  <p>{blog.title}</p>
                </Link>
              ))}
            </div>
          </section>

          <div className="sidebar-spacer"></div>

          {/* LATEST SECTION */}
          <section className="sidebar-group">
            <h3 className="sidebar-title">Latest Updates <span className="icon">✨</span></h3>
            <div className="latest-list">
              {data.latest.map((blog) => (
                <Link 
                  key={blog._id} 
                  to={`/blog/${getDocId(blog.doc_link)}`} 
                  className="latest-item"
                >
                  <div className="thumb-box">
                    <img src={blog.image} alt="blog-thumb" />
                  </div>
                  <div className="latest-info">
                    <h4>{blog.title.substring(0, 45)}...</h4>
                    <span className="sidebar-cat">{blog.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CONSULTATION BANNER */}
          <div className="sidebar-cta">
            <p>Need Expert Advice?</p>
            <button className="cta-btn">Book Consultation</button>
          </div>
        </>
      )}
    </aside>
  );
};

export default SidebarSection;