import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SidebarSection from "../section/sidebar/Sidebar";
import "./BlogPage.css"; 

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Backend URL se data fetch karna
        const response = await fetch("http://localhost:5000/api/blogs/all");
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Backend connectivity issue:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="professional-blog-layout">
      {/* LEFT: FIXED SIDEBAR */}
      <aside className="left-fixed-sidebar">
        <div className="sidebar-sticky-content">
          <h2 className="sidebar-logo">OCCULTSAGE</h2>
          <div className="sidebar-divider"></div>
          <SidebarSection />
        </div>
      </aside>

      {/* RIGHT: SCROLLABLE CONTENT */}
      <main className="right-scrollable-feed">
        <header className="feed-header">
          <h1 className="feed-title">Latest Insights</h1>
          <p className="feed-subtitle">Automatic Wisdom from MongoDB</p>
        </header>

        <div className="blog-cards-container">
          {loading ? (
            <div className="sacred-loader">Connecting to Database...</div>
          ) : (
            blogs.map((blog) => {
              // Extract ID from doc_link
              const docId = blog.doc_link?.match(/\/d\/(.*?)(\/|$)/)?.[1];
              return (
                <article key={blog._id} className="premium-card">
                  <div className="card-img-wrapper">
                    <img src={blog.image} alt={blog.title} />
                    <span className="card-badge">{blog.category}</span>
                  </div>
                  <div className="card-content">
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt?.substring(0, 100)}...</p>
                    <Link to={`/blog/${docId}`} className="read-btn">Read Article →</Link>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;