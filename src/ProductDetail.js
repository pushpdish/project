import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { Button } from 'reactstrap';
import products from './products';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  
  const handleAddToCartAndNavigate = () => {
    onAddToCart(product); 
    navigate('/cart'); 
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '400px' }} />
      <p>{product.description}</p>
      
      <Button style={{ backgroundColor: '#351921', color: 'white' }} onClick={handleAddToCartAndNavigate}>
  Add to Cart
</Button>

    </div>
  );
};

export default ProductDetail;
