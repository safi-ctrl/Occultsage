import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CheckCircle, XCircle, Clock, User, FileText } from 'lucide-react'; // Icons ke liye: npm install lucide-react

const AdminDashboard= () => {
    const [pendingBlogs, setPendingBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPending = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/blogs/pending-all');
            setPendingBlogs(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching blogs", err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPending();
    }, []);

    const handleApprove = async (id) => {
        try {
            const res = await axios.patch(`http://localhost:5000/api/blogs/approve/${id}`);
            if (res.data.success) {
                setPendingBlogs(pendingBlogs.filter(blog => blog._id !== id));
            }
        } catch (err) {
            alert("Approval failed!");
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-[#00122e] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#00122e] text-slate-200 p-4 md:p-10 font-sans">
            <div className="max-w-7xl mx-auto">
                
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                    <div>
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 uppercase tracking-tighter">
                            Admin Control
                        </h1>
                        <p className="text-slate-400 mt-1 flex items-center gap-2">
                            <Clock size={16} className="text-gold" /> Pending Review Queue
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
                        <span className="text-sm uppercase tracking-widest text-slate-400">Total Pending:</span>
                        <span className="ml-3 text-2xl font-bold text-gold">{pendingBlogs.length}</span>
                    </div>
                </div>

               
                {pendingBlogs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 bg-white/5 rounded-3xl border border-dashed border-white/10">
                        <FileText size={48} className="text-slate-600 mb-4" />
                        <p className="text-xl text-slate-400">No blogs waiting for approval.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pendingBlogs.map((blog) => (
                            <div 
                                key={blog._id} 
                                className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            >
                                
                                <div className="relative h-52 overflow-hidden">
                                    <img 
                                        src={blog.thumbnail || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643'} 
                                        alt="thumbnail" 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-gold border border-gold/30 uppercase tracking-widest">
                                        Draft
                                    </div>
                                </div>

                              
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight">
                                        {blog.title}
                                    </h3>
                                    
                                    <div className="flex items-center gap-3 mb-6 text-sm text-slate-400">
                                        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                                            <User size={14} className="text-gold" />
                                        </div>
                                        <span>{blog.authorName || 'Anonymous'}</span>
                                    </div>

                                  
                                    <div className="flex items-center gap-3">
                                        <button 
                                            onClick={() => handleApprove(blog._id)}
                                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-bold text-sm hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg shadow-green-900/20"
                                        >
                                            <CheckCircle size={18} /> Approve
                                        </button>
                                        <button className="w-12 h-12 flex items-center justify-center bg-red-500/10 border border-red-500/30 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                                            <XCircle size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

           
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </div>
    );
};

export default AdminDashboard;