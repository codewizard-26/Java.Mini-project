// src/pages/HomePage.js
import React from 'react';
import CategorySlider from '../components/CategorySlider';
import { products } from '../Data'; // Import our local dummy data

const HomePage = () => {
  // Group products by category directly from the imported data
  const categories = products.reduce((acc, product) => {
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
  }, {});

  return (
    <div className="container mt-4">
      {Object.keys(categories).map(category => (
        <CategorySlider 
          key={category} 
          category={category} 
          products={categories[category]} 
        />
      ))}
    </div>
  );
};

export default HomePage;