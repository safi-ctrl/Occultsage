import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./SingleBlog.css";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/blogs/get-blog/${id}`);
        const data = await res.json();
        setBlog(data);

        const recentRes = await fetch("http://localhost:5000/api/blogs/get-all-blogs");
        const recentData = await recentRes.json();
        const allBlogs = Array.isArray(recentData) ? recentData : (recentData.blogs || []);
        setRecentBlogs(allBlogs.filter(b => b._id !== id).slice(0, 5));
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [id]);

  if (loading) return <div className="sb-loader-container">Loading Wisdom...</div>;
  if (!blog) return <div className="sb-loader-container">Blog Not Found.</div>;

  return (
    <div className="sb-view-wrapper">
      <div className="sb-split-grid">
        
        
        <main className="sb-left-pane">
          <div className="sb-content-wrap">
            <div className="sb-main-card">
              <div className="sb-feature-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="sb-article-padding">
                <h1 className="sb-main-heading">{blog.title}</h1>
                <div className="sb-post-meta-strip">
                  <span><i className="fa-regular fa-calendar"></i> {new Date(blog.createdAt).toLocaleDateString('en-GB')}</span>
                  <span className="sb-meta-divider"></span>
                  <span>By OccultSage</span>
                </div>
                <div className="sb-article-body" dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
            </div>
          </div>
        </main>

        
        <aside className="sb-right-pane">
          <div className="sb-fixed-sidebar">
            <div className="sb-widget">
              <h3 className="sb-widget-title">Recent Posts</h3>
              <div className="sb-feed-list">
                {recentBlogs.map((item) => (
                  <Link to={`/blog/${item._id}`} key={item._id} className="sb-feed-card">
                    <img src={item.image} alt="" className="sb-feed-img" />
                    <h4 className="sb-feed-title">{item.title}</h4>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sb-cta-card">
              <h3>Vastu Experts</h3>
              <p>Acharya Pankaj se sateek margdarshan aur upaay jaaniye.</p>
              <button className="sb-cta-button">Book Consultation</button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default SingleBlog;