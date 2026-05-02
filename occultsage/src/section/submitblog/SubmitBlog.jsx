import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import './SubmitBlog.css';

const SubmitBlog = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [authorEmail, setAuthorEmail] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [category, setCategory] = useState('Vedic Insights'); 
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        if (id) {
            const fetchBlogData = async () => {
                try {
                    const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                    const blog = res.data;
                    setTitle(blog.title);
                    setContent(blog.content);
                    setAuthorName(blog.authorName);
                    setAuthorEmail(blog.authorEmail);
                    setThumbnail(blog.thumbnail || blog.image); 
                    setCategory(blog.category);
                } catch (err) {
                    console.error("Fetch error:", err);
                    alert("Data load nahi ho paya!");
                }
            };
            fetchBlogData();
        } else {
            const savedTitle = localStorage.getItem('draft-title');
            const savedContent = localStorage.getItem('draft-content');
            if (savedTitle) setTitle(savedTitle);
            if (savedContent) setContent(savedContent);
        }
    }, [id]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        if (!id) localStorage.setItem('draft-title', e.target.value);
    };

    const handleContentChange = (value) => {
        setContent(value);
        if (!id) localStorage.setItem('draft-content', value);
    };

    const modules = {
        toolbar: { container: "#custom-toolbar" },
    };

    const formats = [
        'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 
        'blockquote', 'code-block', 'list', 'bullet', 'indent', 
        'link', 'image', 'video', 'color', 'background', 'align', 'clean'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content || !authorName || !thumbnail) {
            return alert("Bhai, saari fields bharna zaroori hai!");
        }

        setLoading(true);
        const blogData = { 
            title, authorName, authorEmail, content, 
            image: thumbnail, category, status: 'pending' 
        };

        try {
            if (id) {
                
                const res = await axios.put(`http://localhost:5000/api/blogs/update/${id}`, blogData);
                if (res.data.success) {
                    alert("Blog Updated Successfully! ✨");
                    navigate('/blogs'); 
                }
            } else {
                
                const res = await axios.post('http://localhost:5000/api/blogs/submit', blogData);
                if (res.data.success) {
                    alert("Blog Submitted Successfully!");
                    localStorage.removeItem('draft-title');
                    localStorage.removeItem('draft-content');
                    setTitle(''); setContent(''); setAuthorName(''); setAuthorEmail(''); setThumbnail('');
                }
            }
        } catch (err) {
            console.error(err);
            alert("Action failed! Check server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="blogger-canvas-wrapper">
            <header className="editor-top-bar">
                <div className="bar-left">
                    <span className="editor-status">
                        {id ? '📝 Editing Mode' : (loading ? '⌛ Processing...' : '✨ Occultsage Studio')}
                    </span>
                    <input 
                        type="text" 
                        className="canvas-title-input" 
                        placeholder="Write your title here..." 
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>

                <div className="bar-right">
                    <button 
                        onClick={handleSubmit} 
                        disabled={loading} 
                        className="canvas-publish-btn"
                    >
                        {id ? (loading ? "UPDATING..." : "UPDATE BLOG") : (loading ? "SENDING..." : "SUBMIT FOR REVIEW")}
                    </button>
                </div>
            </header>

            <div className="editor-layout-body">
                <main className="writing-canvas">
                    <div className="quill-studio-wrapper">
                        <div id="custom-toolbar" className="custom-toolbar">
                            <span className="ql-formats">
                                <select className="ql-header" defaultValue="">
                                    <option value="1">Heading 1</option>
                                    <option value="2">Heading 2</option>
                                    <option value="3">Heading 3</option>
                                    <option value="">Normal</option>
                                </select>
                            </span>
                            <span className="ql-formats">
                                <button className="ql-bold"></button>
                                <button className="ql-italic"></button>
                                <button className="ql-underline"></button>
                                <button className="ql-strike"></button>
                            </span>
                            <span className="ql-formats">
                                <select className="ql-color"></select>
                                <select className="ql-background"></select>
                            </span>
                            <span className="ql-formats">
                                <button className="ql-list" value="ordered"></button>
                                <button className="ql-list" value="bullet"></button>
                                <select className="ql-align"></select>
                            </span>
                            <span className="ql-formats">
                                <button className="ql-link"></button>
                                <button className="ql-image"></button>
                                <button className="ql-video"></button>
                            </span>
                            <span className="ql-formats">
                                <button className="ql-blockquote"></button>
                                <button className="ql-code-block"></button>
                                <button className="ql-clean"></button>
                            </span>
                        </div>

                        <ReactQuill 
                            theme="snow" 
                            modules={modules}
                            formats={formats}
                            value={content} 
                            onChange={handleContentChange}
                            placeholder="Start writing..."
                        />
                    </div>
                </main>

                <aside className="canvas-sidebar">
                    <div className="sidebar-widget">
                        <h3>Author Details</h3>
                        <div className="field-box">
                            <label>Writer Name</label>
                            <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                        </div>
                        <div className="field-box">
                            <label>Email Address</label>
                            <input type="email" value={authorEmail} onChange={(e) => setAuthorEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className="sidebar-widget">
                        <h3>Post Categorization</h3>
                        <div className="field-box">
                            <label>Select Category</label>
                            <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-select">
                                <option value="Vedic Insights">Vedic Insights</option>
                                <option value="Vastu Shastra">Vastu Shastra</option>
                                <option value="Astrology">Astrology</option>
                                <option value="Numerology">Numerology</option>
                            </select>
                        </div>
                    </div>

                    <div className="sidebar-widget">
                        <h3>Media & SEO</h3>
                        <div className="field-box">
                            <label>Thumbnail Image URL</label>
                            <input type="text" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
                        </div>
                        {thumbnail && (
                            <div className="image-preview-container">
                                <img src={thumbnail} alt="Preview" className="sidebar-img-preview" />
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default SubmitBlog;