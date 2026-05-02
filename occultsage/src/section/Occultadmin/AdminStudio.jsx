import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OccultAdmin.css';


const AdminStudio = () => {
    const [activeTab, setActiveTab] = useState('pending'); 
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchBlogsData = async () => {
        setLoading(true);
        try {
            const url = activeTab === 'pending' 
                ? 'http://localhost:5000/api/blogs/pending-all' 
                : 'http://localhost:5000/api/blogs/get-all-blogs';
            
            const res = await axios.get(url);
            setBlogs(res.data);
            
            if (res.data.length > 0) {
                setSelectedBlog(res.data[0]);
            } else {
                setSelectedBlog(null);
            }
        } catch (err) {
            console.error("Fetch Error:", err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchBlogsData();
    }, [activeTab]);

    const handleApprove = async (id) => {
        try {
            setLoading(true);
            await axios.patch(`http://localhost:5000/api/blogs/approve/${id}`);
            alert("✨ Success: Blog is now LIVE on OccultSage!");
            await fetchBlogsData();
        } catch (err) {
            alert("Error: Approval failed");
        } finally {
            setLoading(false);
        }
    };

    const handleUnpublish = async (id) => {
        try {
            setLoading(true);
            await axios.patch(`http://localhost:5000/api/blogs/update-status/${id}`, { status: 'pending' });
            alert("Success: Moved back to Pending Reviews!");
            await fetchBlogsData();
        } catch (err) {
            alert("Error: Action failed");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("⚠️ WARNING: Are you sure? This scroll will be vanished forever!");
        
        if (confirmDelete) {
            try {
                setLoading(true);
                const res = await axios.delete(`http://localhost:5000/api/blogs/${id}`);
                if (res.data.success) {
                    alert("🗑️ Deleted: The scroll is gone!");
                    await fetchBlogsData();
                }
            } catch (err) {
                alert("Error: Delete failed.");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="oa-master-container">
            <aside className="oa-sidebar">
                <div className="oa-logo-section">
                    <h2>OCCULT<span>SAGE</span></h2>
                    <span className="oa-panel-tag">ADMIN STUDIO</span>
                </div>
                <nav className="oa-menu">
                    <button 
                        className={activeTab === 'pending' ? 'active' : ''} 
                        onClick={() => setActiveTab('pending')}
                        disabled={loading}
                    >
                        Pending Reviews {activeTab === 'pending' && blogs.length > 0 && <span className="oa-count-pill">{blogs.length}</span>}
                    </button>
                    <button 
                        className={activeTab === 'approved' ? 'active' : ''} 
                        onClick={() => setActiveTab('approved')}
                        disabled={loading}
                    >
                        Live Published
                    </button>
                    <button className="oa-compose-btn">Compose Wisdom</button>
                </nav>
            </aside>

            <main className="oa-main-viewport">
                <div className="oa-review-layout">
                    <div className="oa-page-header">
                        <h1>Content <span>{activeTab === 'pending' ? 'Analysis' : 'Inventory'}</span></h1>
                        <p>Total {activeTab}: {blogs.length} Scrolls</p>
                    </div>

                    <div className="oa-split-view">
                        <div className="oa-list-panel">
                            {loading && blogs.length === 0 ? (
                                <div className="oa-loader">Scanning Scrolls...</div>
                            ) : blogs.length > 0 ? (
                                blogs.map(blog => (
                                    <div 
                                        key={blog._id} 
                                        className={`oa-blog-card ${selectedBlog?._id === blog._id ? 'selected' : ''}`}
                                        onClick={() => setSelectedBlog(blog)}
                                    >
                                        <h4>{blog.title.substring(0, 50)}...</h4>
                                        <p>By {blog.authorName || blog.author || "Admin"}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="oa-empty-state">No blogs found.</div>
                            )}
                        </div>

                        <div className="oa-analysis-container">
                            {selectedBlog ? (
                                <div className="oa-analysis-wrapper">
                                    <div className="oa-analysis-actions">
                                        {activeTab === 'pending' ? (
                                            <button className="oa-approve-btn" onClick={() => handleApprove(selectedBlog._id)} disabled={loading}>
                                                {loading ? "Processing..." : "Publish to Live"}
                                            </button>
                                        ) : (
                                            <button className="oa-unpublish-btn" onClick={() => handleUnpublish(selectedBlog._id)} disabled={loading}>
                                                {loading ? "Processing..." : "Move to Drafts"}
                                            </button>
                                        )}
                                        <button className="oa-discard-btn" onClick={() => handleDelete(selectedBlog._id)} disabled={loading}>
                                            Delete Forever
                                        </button>
                                    </div>

                                    <div className="oa-analysis-scrollable">
                                        <img src={selectedBlog.image || selectedBlog.thumbnail} alt="Preview" className="oa-preview-img" />
                                        <h1 className="oa-preview-title">{selectedBlog.title}</h1>
                                        <div className="oa-preview-meta">
                                            Author: <strong>{selectedBlog.authorName || selectedBlog.author}</strong> | 
                                            Date: {new Date(selectedBlog.createdAt).toLocaleDateString()}
                                        </div>
                                        <hr className="oa-preview-hr" />
                                        <div 
                                            className="oa-preview-content"
                                            dangerouslySetInnerHTML={{ __html: selectedBlog.content }} 
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="oa-placeholder">Select a scroll to analyze.</div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};


export default AdminStudio;