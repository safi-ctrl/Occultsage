import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; 

const SidebarSection = () => {
  const [data, setData] = useState({ latest: [], trending: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        
        const response = await fetch("http://localhost:5000/api/blogs/get-all-blogs");
        const result = await response.json();

        
        const publishedBlogs = result.filter(blog => blog.status === 'published');
        
        setData({
          latest: publishedBlogs.slice(0, 5), 
          trending: publishedBlogs.slice().reverse().slice(0, 5) 
        });
        
        setLoading(false);
      } catch (err) {
        console.error("Sidebar Fetch Error:", err);
        setLoading(false);
      }
    };
    fetchSidebarData();
  }, []);

  return (
    <aside className="sidebar-main">
      {loading ? (
        <p className="loading-text">Fetching Wisdom...</p>
      ) : (
        <>
          
          <section className="sidebar-group">
            <h3 className="sidebar-title">Trending Blogs <span className="icon">🔥</span></h3>
            <div className="trending-list">
              {data.trending.map((blog) => (
                <Link 
                  key={blog._id} 
                  
                  to={`/blog/${blog._id}`} 
                  className="trending-item"
                >
                  <span className="trending-bullet">✦</span>
                  <p>{blog.title}</p>
                </Link>
              ))}
            </div>
          </section>

          <div className="sidebar-spacer"></div>

          
          <section className="sidebar-group">
            <h3 className="sidebar-title">Latest Updates <span className="icon">✨</span></h3>
            <div className="latest-list">
              {data.latest.map((blog) => (
                <Link 
                  key={blog._id} 
                  
                  to={`/blog/${blog._id}`} 
                  className="latest-item"
                >
                  <div className="thumb-box">
                    
                    <img src={blog.thumbnail || 'https://via.placeholder.com/60'} alt="blog-thumb" />
                  </div>
                  <div className="latest-info">
                    <h4>{blog.title.substring(0, 40)}...</h4>
                    <span className="sidebar-cat">{blog.category || 'Vastu'}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          
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