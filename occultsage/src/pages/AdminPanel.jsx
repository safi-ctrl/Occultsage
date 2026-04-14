import React, { useState } from 'react';

const AdminPanel = () => {
  const [blog, setBlog] = useState({ title: '', doc_link: '', image: '', category: 'Astrology', excerpt: '' });

  const handleAdd = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/blogs/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...blog, isApproved: true })
    });
    if (res.ok) alert("Blog Successfully Added!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ color: '#bcfe2f' }}>Occultsage Admin Panel</h2>
        <form onSubmit={handleAdd} style={styles.form}>
          <input type="text" placeholder="Blog Title" onChange={e => setBlog({...blog, title: e.target.value})} style={styles.input} />
          <input type="text" placeholder="Google Docs Link" onChange={e => setBlog({...blog, doc_link: e.target.value})} style={styles.input} />
          <input type="text" placeholder="Image URL" onChange={e => setBlog({...blog, image: e.target.value})} style={styles.input} />
          <textarea placeholder="Small Description" onChange={e => setBlog({...blog, excerpt: e.target.value})} style={styles.input} />
          <button type="submit" style={styles.btn}>UPLOAD TO DATABASE</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: { background: '#020c1b', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  card: { background: '#0a192f', padding: '40px', borderRadius: '15px', border: '1px solid #c5a059', width: '500px' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #112240', background: '#112240', color: '#fff' },
  btn: { background: '#bcfe2f', padding: '15px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }
};

export default AdminPanel;