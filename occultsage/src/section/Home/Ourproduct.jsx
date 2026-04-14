import React from 'react';
import './Ourproduct.css';

const Ourproduct = () => {
  const products = [
    { 
      id: 1, 
      name: "Premium HawanCups", 
      price: "399.00", 
      tag: "Trending", 
      img: "https://malyam.com/cdn/shop/files/havancup.jpg?v=1753856068",
      link: "https://malyam.com/collections/best-selling-test/products/hawan-cup" // Example link
    },
    { 
      id: 2, 
      name: "Chakra", 
      price: "399.00", 
      tag: null, 
      img: "https://malyam.com/cdn/shop/files/31_0f6004c5-2621-4cdf-a660-a91d6bc7b669.jpg?v=1745412357",
      link: "https://malyam.com/collections/best-selling-test/products/chakra" 
    },
    { 
      id: 3, 
      name: "Toilet Remedies Combo Pack", 
      price: "6,599", 
      tag: "New", 
      img: "https://malyam.com/cdn/shop/files/NE_1_1_6e1526cb-8d8b-499b-8d56-98efc8b3c38d.png?v=1771833665",
      link: "https://malyam.com/collections/best-selling-test/products/compass"
    },
    { 
      id: 4, 
      name: "Premium Metal Strips", 
      price: "699.00", 
      tag: "Top Pick", 
      img: "https://malyam.com/cdn/shop/files/ChatGPTImageApr20_2025_01_08_50PM.png?v=1745134744",
      link: "https://malyam.com/collections/best-selling-test/products/premium-metal-strips"
    },
    { 
      id: 5, 
      name: "Sandalwood Dhoop Sticks", 
      price: "599.00", 
      tag: null, 
      img: "https://malyam.com/cdn/shop/files/5_1_4e27ebde-da46-484e-a998-69528f221473.png?v=1753423851",
      link: "https://malyam.com/collections/dhoop-agarbatti-camphor/products/sandalwood-premium-dhoop-cones-pack-of-3"
    },
    { 
      id: 6, 
      name: "Ghee Baati", 
      price: "350.00", 
      tag: "Best Seller", 
      img: "https://malyam.com/cdn/shop/files/GHEEBATTI.jpg?v=1754130314",
      link: "https://malyam.com/collections/dhoop-agarbatti-camphor/products/ghee-baati"
    },
  ];

  return (
    <section className="malyam-products-section">
      <div className="malyam-container">
        <div className="malyam-header">
          <h2 className="malyam-title">Trending on <span className="malyam-brand">Malyam.com</span></h2>
          <p className="malyam-subtitle">Explore our most loved spiritual and lifestyle essentials</p>
        </div>

        <div className="malyam-product-grid">
          {products.map((product) => (
            <div key={product.id} className="malyam-card">
              {/* Image box ko clickable banaya */}
              <a href={product.link} target="_blank" rel="noreferrer" className="malyam-image-link">
                <div className="malyam-image-box">
                  <img src={product.img} alt={product.name} />
                  {product.tag && <span className="malyam-badge">{product.tag}</span>}
                </div>
              </a>

              <div className="malyam-info">
                <h4>{product.name}</h4>
                <p className="malyam-price">₹{product.price}</p>
                
                {/* Button ko anchor tag mein wrap kiya */}
                <a href={product.link} target="_blank" rel="noreferrer">
                  <button className="malyam-view-btn">View Details</button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="malyam-footer">
          <a href="https://malyam.com" target="_blank" rel="noreferrer" className="malyam-link">
            Visit Malyam.com for more Products →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ourproduct;