import React, { useState } from 'react';
import './AddBlog.css'; // Iska CSS niche diya hai

const AddBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        doc_link: '',
        category: 'Astrology', // Default category
        image: '',
        isApproved: true 
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/blogs/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (result.success) {
                alert("Congratulation your Blog Has Been Added.");
                setFormData({ title: '', excerpt: '', doc_link: '', category: 'Astrology', image: '', isApproved: true });
            }
        } catch (err) {
            console.error(err);
            alert("Backend se connect nahi ho paya!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-container">
            <div className="admin-card">
                <h2>Add Sacred Knowledge</h2>
                <p>Enter details to post a new blog to MongoDB</p>
                <form onSubmit={handleSubmit} className="admin-form">
                    <div className="input-group">
                        <label>Blog Title</label>
                        <input type="text" placeholder="e.g., Secret of 8th House" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
                    </div>

                    <div className="input-group">
                        <label>Short Description (Excerpt)</label>
                        <textarea placeholder="Briefly explain what this blog is about..." value={formData.excerpt} onChange={(e) => setFormData({...formData, excerpt: e.target.value})} required />
                    </div>

                    <div className="input-row">
                        <div className="input-group">
                            <label>Category</label>
                            <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                                <option value="Astrology">Astrology</option>
                                <option value="Vastu">Vastu</option>
                                <option value="Numerology">Numerology</option>
                                <option value="Palmistry">Palmistry</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Hero Image URL</label>
                            <input type="text" placeholder="Paste Pinterest/Unsplash link" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} required />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Google Doc Link (Public)</label>
                        <input type="text" placeholder="https://docs.google.com/..." value={formData.doc_link} onChange={(e) => setFormData({...formData, doc_link: e.target.value})} required />
                    </div>

                    <button type="submit" disabled={loading} className="submit-btn">
                        {loading ? "Saving to Database..." : "PUBLISH BLOG →"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;