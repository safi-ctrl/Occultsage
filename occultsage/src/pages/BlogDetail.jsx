import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
    const { id } = useParams(); 
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFullBlog = async () => {
            try {
                
                const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                setBlog(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching blog:", err);
                setLoading(false);
            }
        };
        fetchFullBlog();
    }, [id]);

    if (loading) return <div style={{color: 'white', textAlign: 'center'}}>Loading...</div>;
    if (!blog) return <div style={{color: 'white', textAlign: 'center'}}>Blog nahi mila!</div>;

    return (
        <div className="blog-detail-page" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
            <img 
                src={blog.image} 
                alt={blog.title} 
                style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }} 
            />
            <h1 style={{ fontSize: '2.5rem', color: '#FFD700' }}>{blog.title}</h1>
            
            <div className="meta" style={{ margin: '15px 0', color: '#ccc' }}>
                <span>By {blog.author || 'Admin'}</span> | 
                <span> {new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>

            <hr style={{ borderColor: '#333' }} />

            <div className="content" style={{ marginTop: '30px', fontSize: '1.2rem', lineHeight: '1.8' }}>
                
                <p>{blog.content}</p>
            </div>
        </div>
    );
};

export default BlogDetail;