import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogPage.css"; 

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs/get-all-blogs");
        const data = await response.json();
        
        // Data handling
        const actualData = Array.isArray(data) ? data : (data.blogs || []);
        
        // Vastuenergetics style filtering
        const filteredBlogs = actualData.filter(blog => 
          !blog.status || ['published', 'approved'].includes(blog.status.toLowerCase())
        );
        
        setBlogs(filteredBlogs);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ve-blog-page">
      {/* Dynamic Hero Section */}
      <header className="ve-blog-header">
        <div className="ve-header-content">
          <h1>Blogs</h1>
          <nav className="ve-breadcrumb">Home » Blogs</nav>
        </div>
      </header>

      <div className="ve-container">
        {loading ? (
          <div className="ve-loading-state">
            <div className="spinner"></div>
            <p>Gathering Wisdom...</p>
          </div>
        ) : (
          <div className="ve-blog-grid">
            {blogs.map((blog) => (
              <div key={blog._id} className="ve-blog-card">
                {/* Thumbnail Section */}
                <div className="ve-card-image">
                  <Link to={`/blog/${blog._id}`}>
                    <img 
                      src={blog.image || blog.thumbnail || 'https://via.placeholder.com/600x400?text=Occult+Sage'} 
                      alt={blog.title} 
                      loading="lazy"
                    />
                  </Link>
                  <div className="ve-badge">BLOG</div>
                </div>

                {/* Content Section */}
                <div className="ve-card-content">
                  <div className="ve-post-meta">
                    <span className="ve-author">
                      <i className="fa-regular fa-user"></i> BY VASTUENERGETICS
                    </span>
                  </div>
                  
                  <h3 className="ve-post-title">
                    <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                  </h3>
                  
                  <Link to={`/blog/${blog._id}`} className="ve-btn-readmore">
                    READ MORE <span className="ve-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;