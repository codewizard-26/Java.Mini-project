// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function fetches data from the fake store API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data); // Save the fetched products
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Also stop loading on error
      }
    };

    fetchProducts();
  }, []); // The empty array [] means this effect runs only once

  if (loading) {
    return <div className="container text-center mt-5"><p>Loading products...</p></div>;
  }

  return (
    <div className="row">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;