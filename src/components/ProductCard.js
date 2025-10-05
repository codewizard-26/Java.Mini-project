import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // We use product.imageUrl from your backend
  const optimizedImageUrl = `https://images.weserv.nl/?url=${encodeURIComponent(product.imageUrl)}&w=400&q=75`;

  return (
    <div> 
      <div className="card h-100 text-center">
        <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
          {/* Use product.name for the alt text */}
          <img src={optimizedImageUrl} className="card-img-top" alt={product.name} />
          <div className="card-body">
            {/* Use product.name for the title */}
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price.toFixed(2)}</p>
          </div>
        </Link>
        <div className="card-footer">
           <button className="btn btn-primary w-100" onClick={() => addToCart(product)}>
             Add to Cart
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;