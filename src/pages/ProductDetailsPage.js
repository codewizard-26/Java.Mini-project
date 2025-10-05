// src/pages/ProductDetailsPage.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Data'; // Import our local dummy data
import { CartContext } from '../context/CartContext';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  // Find the product in our dummy data array using its ID
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container text-center mt-5"><p>Product not found.</p></div>;
  }

  const optimizedImageUrl = `https://images.weserv.nl/?url=${encodeURIComponent(product.imageUrl)}&w=500&q=80`;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={optimizedImageUrl} alt={product.name} className="img-fluid" style={{ maxHeight: '400px' }} />
        </div>
        <div className="col-md-6">
          <h2 className="text-capitalize">{product.category}</h2>
          <h1>{product.name}</h1>
          <p className="lead text-muted">{product.description}</p>
          <h3 className="my-3">${product.price.toFixed(2)}</h3>
          <button className="btn btn-primary btn-lg" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;