import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header';
import Footer from './components/Footer'; // Make sure Footer is imported
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <CartProvider>
      <Router>
        {/* This div structures the page to keep the footer at the bottom */}
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          
          <Header />
          
          {/* Main content area that grows to fill space */}
          <main style={{ flex: '1' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
          
          {/* The Footer component goes here, outside the main content */}
          <Footer />

        </div>
      </Router>
    </CartProvider>
  );
}

export default App;