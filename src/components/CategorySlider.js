// src/components/CategorySlider.js
import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import './CategorySlider.css'; // <-- Import the new CSS

// Custom Arrow Components
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const CategorySlider = ({ category, products }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />, // <-- Use custom arrows
    prevArrow: <PrevArrow />, // <-- Use custom arrows
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="container position-relative mb-5">
      <h3 className="text-capitalize mb-3">{category}</h3>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} style={{ padding: '0 8px' }}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;