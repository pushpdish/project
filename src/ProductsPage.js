import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from './products'; 
import './ProductsPage.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const featureCards = [
  { id: 1, title: "variety of range", description: "Explore", image: "/F1.jpg" },
  { id: 2, title: "Latest Trends", description: "Explore", image: "/F3.jpg" },
  { id: 3, title: "Customise Products", description: "Explore", image: "/F2.jpg" },
  { id: 4, title: "Everting You Need", description: "Explore", image: "/F6.jpg" },
];

const testimonials = [
  { id: 1, quote: "Absolutely love the quality of the products!", author: "Jane Doe" },
  { id: 2, quote: "The customer service was beyond my expectations.", author: "John Smith" },
  { id: 3, quote: "Fast delivery and amazing prices. Highly recommend.", author: "Emily Johnson" }
];

function ProductsPage({ onAddToCart }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
    (selectedCategory === 'All' || product.category === selectedCategory)
  );

  function onShowDetails(product) {
    navigate(`/product/${product.id}`);
  }

  function handleAddToCartClick(product) {
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`);
  }

  return (
    
    <div>
      <ToastContainer />
      <div className="hero-section">
        <img src="/HS.jpg" alt="Hero" className="hero-image"/>
        <div className="hero-text">
          <h1>SoftTouch Clothings</h1>
          <p>Explore our wide range of products.</p>
        </div>
      </div>
      <h2 className="section-heading">Find What You Love</h2>
      <hr className="section-divider" />
      <div className="search-and-filter">
        
        <input
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div>
          <label htmlFor="categorySelect">Category</label>
          <select
            id="categorySelect"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
      </div>

      <hr className="section-divider" />
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt="Product" className="product-image"/>
            <div className="card-body">
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <div className="card-actions">
                <button onClick={() => handleAddToCartClick(product)}>Add to Cart</button>
                <button onClick={() => onShowDetails(product)}>Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
        
      <hr className="section-divider" />
      <h2 className="section-heading">Why Choose Us</h2>
      <div className="feature-cards">
        {featureCards.map(card => (
          <div className="feature-card" key={card.id}>
            <img src={card.image} alt={card.title} className="feature-image"/>
            <div>
              <h5>{card.title}</h5>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
       
      <hr className="section-divider" />
      <h2 className="section-heading">Happy Customers</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div className="testimonial" key={testimonial.id}>
            <blockquote>"{testimonial.quote}"</blockquote>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default ProductsPage;
