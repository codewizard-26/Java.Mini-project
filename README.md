├── .gitignore
├── package-lock.json
├── package.json
├── public
    ├── favicon.ico
    ├── index.html
    ├── logo192.png
    ├── logo512.png
    ├── manifest.json
    └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── Data.js
    ├── components
        ├── CategorySlider.css
        ├── CategorySlider.js
        ├── Footer.js
        ├── Header.js
        ├── ProductCard.css
        ├── ProductCard.js
        └── ProductList.js
    ├── context
        └── CartContext.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── pages
        ├── CartPage.js
        ├── HomePage.js
        ├── LoginPage.js
        └── ProductDetailsPage.js
    ├── reportWebVitals.js
    └── setupTests.js


/.gitignore:
--------------------------------------------------------------------------------
 1 | # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 2 | 
 3 | # dependencies
 4 | /node_modules
 5 | /.pnp
 6 | .pnp.js
 7 | 
 8 | # testing
 9 | /coverage
10 | 
11 | # production
12 | /build
13 | 
14 | # misc
15 | .DS_Store
16 | .env.local
17 | .env.development.local
18 | .env.test.local
19 | .env.production.local
20 | 
21 | npm-debug.log*
22 | yarn-debug.log*
23 | yarn-error.log*
24 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "ecommerce-frontend",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "dependencies": {
 6 |     "@testing-library/dom": "^10.4.1",
 7 |     "@testing-library/jest-dom": "^6.9.1",
 8 |     "@testing-library/react": "^16.3.0",
 9 |     "@testing-library/user-event": "^13.5.0",
10 |     "axios": "^1.12.2",
11 |     "bootstrap": "^5.3.8",
12 |     "lucide-react": "^0.544.0",
13 |     "react": "^19.2.0",
14 |     "react-bootstrap": "^2.10.10",
15 |     "react-dom": "^19.2.0",
16 |     "react-router-dom": "^7.9.3",
17 |     "react-scripts": "5.0.1",
18 |     "react-slick": "^0.31.0",
19 |     "slick-carousel": "^1.8.1",
20 |     "web-vitals": "^2.1.4"
21 |   },
22 |   "scripts": {
23 |     "start": "react-scripts start",
24 |     "build": "react-scripts build",
25 |     "test": "react-scripts test",
26 |     "eject": "react-scripts eject"
27 |   },
28 |   "eslintConfig": {
29 |     "extends": [
30 |       "react-app",
31 |       "react-app/jest"
32 |     ]
33 |   },
34 |   "browserslist": {
35 |     "production": [
36 |       ">0.2%",
37 |       "not dead",
38 |       "not op_mini all"
39 |     ],
40 |     "development": [
41 |       "last 1 chrome version",
42 |       "last 1 firefox version",
43 |       "last 1 safari version"
44 |     ]
45 |   }
46 | }
47 | 


--------------------------------------------------------------------------------
/public/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/codewizard-26/Java.Mini-project/main/public/favicon.ico


--------------------------------------------------------------------------------
/public/index.html:
--------------------------------------------------------------------------------
 1 | <!DOCTYPE html>
 2 | <html lang="en">
 3 |   <head>
 4 |     <meta charset="utf-8" />
 5 |     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
 6 |     <meta name="viewport" content="width=device-width, initial-scale=1" />
 7 |     <meta name="theme-color" content="#000000" />
 8 |     <meta
 9 |       name="description"
10 |       content="Web site created using create-react-app"
11 |     />
12 |     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
13 |     <!--
14 |       manifest.json provides metadata used when your web app is installed on a
15 |       user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
16 |     -->
17 |     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
18 |     <!--
19 |       Notice the use of %PUBLIC_URL% in the tags above.
20 |       It will be replaced with the URL of the `public` folder during the build.
21 |       Only files inside the `public` folder can be referenced from the HTML.
22 | 
23 |       Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
24 |       work correctly both with client-side routing and a non-root public URL.
25 |       Learn how to configure a non-root public URL by running `npm run build`.
26 |     -->
27 |     <title>React App</title>
28 |   </head>
29 |   <body>
30 |     <noscript>You need to enable JavaScript to run this app.</noscript>
31 |     <div id="root"></div>
32 |     <!--
33 |       This HTML file is a template.
34 |       If you open it directly in the browser, you will see an empty page.
35 | 
36 |       You can add webfonts, meta tags, or analytics to this file.
37 |       The build step will place the bundled scripts into the <body> tag.
38 | 
39 |       To begin the development, run `npm start` or `yarn start`.
40 |       To create a production bundle, use `npm run build` or `yarn build`.
41 |     -->
42 |   </body>
43 | </html>
44 | 


--------------------------------------------------------------------------------
/public/logo192.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/codewizard-26/Java.Mini-project/main/public/logo192.png


--------------------------------------------------------------------------------
/public/logo512.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/codewizard-26/Java.Mini-project/main/public/logo512.png


--------------------------------------------------------------------------------
/public/manifest.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "short_name": "React App",
 3 |   "name": "Create React App Sample",
 4 |   "icons": [
 5 |     {
 6 |       "src": "favicon.ico",
 7 |       "sizes": "64x64 32x32 24x24 16x16",
 8 |       "type": "image/x-icon"
 9 |     },
10 |     {
11 |       "src": "logo192.png",
12 |       "type": "image/png",
13 |       "sizes": "192x192"
14 |     },
15 |     {
16 |       "src": "logo512.png",
17 |       "type": "image/png",
18 |       "sizes": "512x512"
19 |     }
20 |   ],
21 |   "start_url": ".",
22 |   "display": "standalone",
23 |   "theme_color": "#000000",
24 |   "background_color": "#ffffff"
25 | }
26 | 


--------------------------------------------------------------------------------
/public/robots.txt:
--------------------------------------------------------------------------------
1 | # https://www.robotstxt.org/robotstxt.html
2 | User-agent: *
3 | Disallow:
4 | 


--------------------------------------------------------------------------------
/src/App.css:
--------------------------------------------------------------------------------
 1 | .App {
 2 |   text-align: center;
 3 | }
 4 | 
 5 | .App-logo {
 6 |   height: 40vmin;
 7 |   pointer-events: none;
 8 | }
 9 | 
10 | @media (prefers-reduced-motion: no-preference) {
11 |   .App-logo {
12 |     animation: App-logo-spin infinite 20s linear;
13 |   }
14 | }
15 | 
16 | .App-header {
17 |   background-color: #282c34;
18 |   min-height: 100vh;
19 |   display: flex;
20 |   flex-direction: column;
21 |   align-items: center;
22 |   justify-content: center;
23 |   font-size: calc(10px + 2vmin);
24 |   color: white;
25 | }
26 | 
27 | .App-link {
28 |   color: #61dafb;
29 | }
30 | 
31 | @keyframes App-logo-spin {
32 |   from {
33 |     transform: rotate(0deg);
34 |   }
35 |   to {
36 |     transform: rotate(360deg);
37 |   }
38 | }
39 | 


--------------------------------------------------------------------------------
/src/App.js:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 3 | import "slick-carousel/slick/slick.css"; 
 4 | import "slick-carousel/slick/slick-theme.css";
 5 | 
 6 | import Header from './components/Header';
 7 | import Footer from './components/Footer'; // Make sure Footer is imported
 8 | import HomePage from './pages/HomePage';
 9 | import CartPage from './pages/CartPage';
10 | import ProductDetailsPage from './pages/ProductDetailsPage';
11 | import { CartProvider } from './context/CartContext';
12 | import 'bootstrap/dist/css/bootstrap.min.css';
13 | import LoginPage from './pages/LoginPage';
14 | function App() {
15 |   return (
16 |     <CartProvider>
17 |       <Router>
18 |         {/* This div structures the page to keep the footer at the bottom */}
19 |         <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
20 |           
21 |           <Header />
22 |           
23 |           {/* Main content area that grows to fill space */}
24 |           <main style={{ flex: '1' }}>
25 |             <Routes>
26 |               <Route path="/" element={<HomePage />} />
27 |               <Route path="/cart" element={<CartPage />} />
28 |               <Route path="/product/:id" element={<ProductDetailsPage />} />
29 |               <Route path="/login" element={<LoginPage />} />
30 |             </Routes>
31 |           </main>
32 |           
33 |           {/* The Footer component goes here, outside the main content */}
34 |           <Footer />
35 | 
36 |         </div>
37 |       </Router>
38 |     </CartProvider>
39 |   );
40 | }
41 | 
42 | export default App;


--------------------------------------------------------------------------------
/src/App.test.js:
--------------------------------------------------------------------------------
1 | import { render, screen } from '@testing-library/react';
2 | import App from './App';
3 | 
4 | test('renders learn react link', () => {
5 |   render(<App />);
6 |   const linkElement = screen.getByText(/learn react/i);
7 |   expect(linkElement).toBeInTheDocument();
8 | });
9 | 


--------------------------------------------------------------------------------
/src/Data.js:
--------------------------------------------------------------------------------
1 | // src/data.js
2 | export const products = [
3 |   { id: 1, name: 'React T-Shirt', price: 24.99, description: 'A high-quality cotton t-shirt for React developers.', imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400', category: "men's clothing" },
4 |   { id: 2, name: 'Vue Jeans', price: 49.99, description: 'Comfortable and stylish denim jeans.', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400', category: "men's clothing" },
5 |   { id: 3, name: 'Gold Bracelet', price: 149.99, description: 'An elegant and timeless gold bracelet.', imageUrl: 'https://images.unsplash.com/photo-1611652022417-a5512f716b14?w=400', category: "jewelery" },
6 |   { id: 4, name: 'Wireless Mouse', price: 25.50, description: 'Ergonomic wireless mouse with long battery life.', imageUrl: 'https://images.unsplash.com/photo-1615663245642-86c352a1b32e?w=400', category: "electronics" },
7 |   { id: 5, name: 'Summer Dress', price: 39.99, description: 'A light and airy dress, perfect for summer.', imageUrl: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268211?w=400', category: "women's clothing" },
8 |   { id: 6, name: 'Angular Sneakers', price: 89.99, description: 'Stylish sneakers for any occasion.', imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d34?w=400', category: "men's clothing" },
9 | ];


--------------------------------------------------------------------------------
/src/components/CategorySlider.css:
--------------------------------------------------------------------------------
 1 | /* src/components/CategorySlider.css */
 2 | 
 3 | /* Style for the custom arrows */
 4 | .slick-prev, .slick-next {
 5 |   font-size: 0; /* Hide the default text */
 6 |   line-height: 0;
 7 |   position: absolute;
 8 |   top: 50%;
 9 |   display: block;
10 |   width: 40px;
11 |   height: 40px;
12 |   padding: 0;
13 |   transform: translate(0, -50%);
14 |   cursor: pointer;
15 |   color: transparent;
16 |   border: none;
17 |   outline: none;
18 |   background: white;
19 |   border-radius: 50%;
20 |   box-shadow: 0 2px 5px rgba(0,0,0,0.2);
21 |   z-index: 1;
22 | }
23 | 
24 | .slick-prev {
25 |   left: -15px;
26 | }
27 | .slick-next {
28 |   right: -15px;
29 | }
30 | 
31 | /* Add the arrow icon using pseudo-elements */
32 | .slick-prev:before, .slick-next:before {
33 |   font-size: 20px;
34 |   line-height: 1;
35 |   opacity: 0.75;
36 |   color: black;
37 |   font-family: 'slick'; /* This is from the slick-carousel font */
38 | }
39 | 
40 | .slick-prev:before {
41 |   content: '←';
42 | }
43 | .slick-next:before {
44 |   content: '→';
45 | }


--------------------------------------------------------------------------------
/src/components/CategorySlider.js:
--------------------------------------------------------------------------------
 1 | // src/components/CategorySlider.js
 2 | import React from 'react';
 3 | import Slider from 'react-slick';
 4 | import ProductCard from './ProductCard';
 5 | import './CategorySlider.css'; // <-- Import the new CSS
 6 | 
 7 | // Custom Arrow Components
 8 | function NextArrow(props) {
 9 |   const { className, style, onClick } = props;
10 |   return (
11 |     <div
12 |       className={className}
13 |       style={{ ...style, display: "block" }}
14 |       onClick={onClick}
15 |     />
16 |   );
17 | }
18 | 
19 | function PrevArrow(props) {
20 |   const { className, style, onClick } = props;
21 |   return (
22 |     <div
23 |       className={className}
24 |       style={{ ...style, display: "block" }}
25 |       onClick={onClick}
26 |     />
27 |   );
28 | }
29 | 
30 | const CategorySlider = ({ category, products }) => {
31 |   const settings = {
32 |     dots: false,
33 |     infinite: false,
34 |     speed: 500,
35 |     slidesToShow: 4,
36 |     slidesToScroll: 2,
37 |     nextArrow: <NextArrow />, // <-- Use custom arrows
38 |     prevArrow: <PrevArrow />, // <-- Use custom arrows
39 |     responsive: [
40 |       { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 2 } },
41 |       { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
42 |       { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
43 |     ]
44 |   };
45 | 
46 |   return (
47 |     <div className="container position-relative mb-5">
48 |       <h3 className="text-capitalize mb-3">{category}</h3>
49 |       <Slider {...settings}>
50 |         {products.map(product => (
51 |           <div key={product.id} style={{ padding: '0 8px' }}>
52 |             <ProductCard product={product} />
53 |           </div>
54 |         ))}
55 |       </Slider>
56 |     </div>
57 |   );
58 | };
59 | 
60 | export default CategorySlider;


--------------------------------------------------------------------------------
/src/components/Footer.js:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | 
 3 | const Footer = () => {
 4 |   return (
 5 |     <footer className="bg-light text-muted mt-5 p-4 text-center border-top">
 6 |       <p>&copy; 2025 E-Commerce Store. All Rights Reserved.</p>
 7 |     </footer>
 8 |   );
 9 | };
10 | 
11 | export default Footer;


--------------------------------------------------------------------------------
/src/components/Header.js:
--------------------------------------------------------------------------------
 1 | import React, { useContext } from 'react';
 2 | import { Link } from 'react-router-dom';
 3 | import { Navbar, Container, Form, FormControl, Button, Nav } from 'react-bootstrap';
 4 | import { ShoppingCart, User, Search } from 'lucide-react';
 5 | import { CartContext } from '../context/CartContext';
 6 | 
 7 | const Header = () => {
 8 |   const { cartItems } = useContext(CartContext);
 9 |   const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
10 | 
11 |   return (
12 |     <header className="bg-light text-dark p-3 shadow-sm">
13 |       <Container fluid className="d-flex justify-content-between align-items-center">
14 | 
15 |         <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-dark">
16 |           E-Commerce Store
17 |         </Navbar.Brand>
18 | 
19 |         <Form className="d-flex flex-grow-1 mx-4">
20 |           <FormControl
21 |             type="search"
22 |             placeholder="Search for products, brands and more"
23 |             className="me-2"
24 |             aria-label="Search"
25 |           />
26 |           <Button variant="outline-secondary">
27 |             <Search size={20} />
28 |           </Button>
29 |         </Form>
30 | 
31 |         <Nav className="d-flex flex-row align-items-center">
32 |           <Nav.Link as={Link} to="/login" className="text-dark d-flex align-items-center me-3">
33 |             <User className="me-1" />
34 |             <span>Account</span>
35 |           </Nav.Link>
36 |           <Nav.Link as={Link} to="/cart" className="text-dark d-flex align-items-center">
37 |             <ShoppingCart className="me-1" />
38 |             <span>Cart ({cartItemCount})</span>
39 |           </Nav.Link>
40 |         </Nav>
41 | 
42 |       </Container>
43 |     </header>
44 |   );
45 | };
46 | 
47 | export default Header;


--------------------------------------------------------------------------------
/src/components/ProductCard.css:
--------------------------------------------------------------------------------
 1 | .card {
 2 |   border: none;
 3 |   transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
 4 |   height: 100%;
 5 |   display: flex;
 6 |   flex-direction: column;
 7 | }
 8 | 
 9 | .card:hover {
10 |   transform: translateY(-5px);
11 |   box-shadow: 0 8px 20px rgba(0,0,0,0.12);
12 | }
13 | 
14 | .card-img-top {
15 |   width: 100%;
16 |   aspect-ratio: 1 / 1;
17 |   object-fit: contain;
18 |   padding: 1rem;
19 | }
20 | 
21 | .card-body {
22 |   flex-grow: 1;
23 |   display: flex;
24 |   flex-direction: column;
25 |   padding: 0 1rem 1rem;
26 |   text-align: left;
27 | }
28 | 
29 | .card-title {
30 |   font-size: 0.9rem;
31 |   display: -webkit-box;
32 |   -webkit-line-clamp: 2;
33 |   -webkit-box-orient: vertical;  
34 |   overflow: hidden;
35 |   height: 2.7rem;
36 | }
37 | 
38 | .card-text {
39 |   font-size: 1.1rem;
40 |   font-weight: bold;
41 |   margin-top: auto;
42 | }
43 | 
44 | .card-footer {
45 |   background: white;
46 |   border-top: none;
47 |   padding: 0 1rem 1rem;
48 | }


--------------------------------------------------------------------------------
/src/components/ProductCard.js:
--------------------------------------------------------------------------------
 1 | import React, { useContext } from 'react';
 2 | import { Link } from 'react-router-dom';
 3 | import { CartContext } from '../context/CartContext';
 4 | import './ProductCard.css';
 5 | 
 6 | const ProductCard = ({ product }) => {
 7 |   const { addToCart } = useContext(CartContext);
 8 | 
 9 |   // We use product.imageUrl from your backend
10 |   const optimizedImageUrl = `https://images.weserv.nl/?url=${encodeURIComponent(product.imageUrl)}&w=400&q=75`;
11 | 
12 |   return (
13 |     <div> 
14 |       <div className="card h-100 text-center">
15 |         <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
16 |           {/* Use product.name for the alt text */}
17 |           <img src={optimizedImageUrl} className="card-img-top" alt={product.name} />
18 |           <div className="card-body">
19 |             {/* Use product.name for the title */}
20 |             <h5 className="card-title">{product.name}</h5>
21 |             <p className="card-text">${product.price.toFixed(2)}</p>
22 |           </div>
23 |         </Link>
24 |         <div className="card-footer">
25 |            <button className="btn btn-primary w-100" onClick={() => addToCart(product)}>
26 |              Add to Cart
27 |            </button>
28 |         </div>
29 |       </div>
30 |     </div>
31 |   );
32 | };
33 | 
34 | export default ProductCard;


--------------------------------------------------------------------------------
/src/components/ProductList.js:
--------------------------------------------------------------------------------
 1 | // src/components/ProductList.js
 2 | import React, { useState, useEffect } from 'react';
 3 | import axios from 'axios';
 4 | import ProductCard from './ProductCard';
 5 | 
 6 | const ProductList = () => {
 7 |   const [products, setProducts] = useState([]);
 8 |   const [loading, setLoading] = useState(true);
 9 | 
10 |   useEffect(() => {
11 |     // This function fetches data from the fake store API
12 |     const fetchProducts = async () => {
13 |       try {
14 |         const response = await axios.get('https://fakestoreapi.com/products');
15 |         setProducts(response.data); // Save the fetched products
16 |         setLoading(false); // Set loading to false
17 |       } catch (error) {
18 |         console.error("Error fetching products:", error);
19 |         setLoading(false); // Also stop loading on error
20 |       }
21 |     };
22 | 
23 |     fetchProducts();
24 |   }, []); // The empty array [] means this effect runs only once
25 | 
26 |   if (loading) {
27 |     return <div className="container text-center mt-5"><p>Loading products...</p></div>;
28 |   }
29 | 
30 |   return (
31 |     <div className="row">
32 |       {products.map(product => (
33 |         <ProductCard key={product.id} product={product} />
34 |       ))}
35 |     </div>
36 |   );
37 | };
38 | 
39 | export default ProductList;


--------------------------------------------------------------------------------
/src/context/CartContext.js:
--------------------------------------------------------------------------------
 1 | import React, { createContext, useState, useEffect } from 'react';
 2 | 
 3 | export const CartContext = createContext();
 4 | 
 5 | export const CartProvider = ({ children }) => {
 6 |     const [cartItems, setCartItems] = useState(() => {
 7 |         try {
 8 |             const localData = localStorage.getItem('cart');
 9 |             return localData ? JSON.parse(localData) : [];
10 |         } catch (error) {
11 |             return [];
12 |         }
13 |     });
14 | 
15 |     useEffect(() => {
16 |         localStorage.setItem('cart', JSON.stringify(cartItems));
17 |     }, [cartItems]);
18 | 
19 |     const addToCart = (product) => {
20 |         setCartItems(prevItems => {
21 |             const existingItem = prevItems.find(item => item.id === product.id);
22 |             if (existingItem) {
23 |                 return prevItems.map(item =>
24 |                     item.id === product.id
25 |                         ? { ...item, quantity: item.quantity + 1 }
26 |                         : item
27 |                 );
28 |             } else {
29 |                 return [...prevItems, { ...product, quantity: 1 }];
30 |             }
31 |         });
32 |     };
33 | 
34 |     return (
35 |         <CartContext.Provider value={{ cartItems, addToCart }}>
36 |             {children}
37 |         </CartContext.Provider>
38 |     );
39 | };


--------------------------------------------------------------------------------
/src/index.css:
--------------------------------------------------------------------------------
 1 | :root {
 2 |   --primary-color: #0d6efd;
 3 |   --secondary-color: #f8f9fa;
 4 |   --text-color: #212529;
 5 |   --background-color: #f0f2f5;
 6 | }
 7 | 
 8 | body {
 9 |   margin: 0;
10 |   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
11 |     Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
12 |     sans-serif;
13 |   -webkit-font-smoothing: antialiased;
14 |   -moz-osx-font-smoothing: grayscale;
15 |   background-color: var(--background-color);
16 |   color: var(--text-color);
17 | }


--------------------------------------------------------------------------------
/src/index.js:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import ReactDOM from 'react-dom/client';
 3 | import './index.css';
 4 | import App from './App';
 5 | import reportWebVitals from './reportWebVitals';
 6 | import 'bootstrap/dist/css/bootstrap.min.css';
 7 | 
 8 | const root = ReactDOM.createRoot(document.getElementById('root'));
 9 | root.render(
10 |   <React.StrictMode>
11 |     <App />
12 |   </React.StrictMode>
13 | );
14 | 
15 | // If you want to start measuring performance in your app, pass a function
16 | // to log results (for example: reportWebVitals(console.log))
17 | // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
18 | reportWebVitals();
19 | 


--------------------------------------------------------------------------------
/src/logo.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>


--------------------------------------------------------------------------------
/src/pages/CartPage.js:
--------------------------------------------------------------------------------
 1 | import React, { useContext } from 'react';
 2 | import { CartContext } from '../context/CartContext';
 3 | 
 4 | const CartPage = () => {
 5 |   const { cartItems } = useContext(CartContext);
 6 |   const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
 7 | 
 8 |   return (
 9 |     <div className="container mt-4">
10 |       <h2>Your Shopping Cart</h2>
11 |       {cartItems.length === 0 ? (
12 |         <p>Your cart is currently empty.</p>
13 |       ) : (
14 |         <div>
15 |           <ul className="list-group">
16 |             {cartItems.map(item => (
17 |               <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
18 |                 <div>
19 |                   <strong>{item.name}</strong>
20 |                   <br />
21 |                   <small>${item.price.toFixed(2)} x {item.quantity}</small>
22 |                 </div>
23 |                 <span>${(item.price * item.quantity).toFixed(2)}</span>
24 |               </li>
25 |             ))}
26 |           </ul>
27 |           <h4 className="mt-3">Total: ${totalPrice.toFixed(2)}</h4>
28 |         </div>
29 |       )}
30 |     </div>
31 |   );
32 | };
33 | 
34 | export default CartPage;


--------------------------------------------------------------------------------
/src/pages/HomePage.js:
--------------------------------------------------------------------------------
 1 | // src/pages/HomePage.js
 2 | import React from 'react';
 3 | import CategorySlider from '../components/CategorySlider';
 4 | import { products } from '../Data'; // Import our local dummy data
 5 | 
 6 | const HomePage = () => {
 7 |   // Group products by category directly from the imported data
 8 |   const categories = products.reduce((acc, product) => {
 9 |     (acc[product.category] = acc[product.category] || []).push(product);
10 |     return acc;
11 |   }, {});
12 | 
13 |   return (
14 |     <div className="container mt-4">
15 |       {Object.keys(categories).map(category => (
16 |         <CategorySlider 
17 |           key={category} 
18 |           category={category} 
19 |           products={categories[category]} 
20 |         />
21 |       ))}
22 |     </div>
23 |   );
24 | };
25 | 
26 | export default HomePage;


--------------------------------------------------------------------------------
/src/pages/LoginPage.js:
--------------------------------------------------------------------------------
 1 | import React from 'react';
 2 | import { Container, Form, Button, Card } from 'react-bootstrap';
 3 | 
 4 | const LoginPage = () => {
 5 |     return (
 6 |         <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
 7 |             <Card style={{ width: '25rem' }}>
 8 |                 <Card.Body>
 9 |                     <h2 className="text-center mb-4">Log In</h2>
10 |                     <Form>
11 |                         <Form.Group className="mb-3" controlId="formBasicEmail">
12 |                             <Form.Label>Email address</Form.Label>
13 |                             <Form.Control type="email" placeholder="Enter email" />
14 |                         </Form.Group>
15 | 
16 |                         <Form.Group className="mb-3" controlId="formBasicPassword">
17 |                             <Form.Label>Password</Form.Label>
18 |                             <Form.Control type="password" placeholder="Password" />
19 |                         </Form.Group>
20 | 
21 |                         <Button variant="primary" type="submit" className="w-100">
22 |                             Log In
23 |                         </Button>
24 |                     </Form>
25 |                     <div className="w-100 text-center mt-3">
26 |                         <a href="#signup">Need an account? Sign Up</a>
27 |                     </div>
28 |                 </Card.Body>
29 |             </Card>
30 |         </Container>
31 |     );
32 | };
33 | 
34 | export default LoginPage;


--------------------------------------------------------------------------------
/src/pages/ProductDetailsPage.js:
--------------------------------------------------------------------------------
 1 | // src/pages/ProductDetailsPage.js
 2 | import React, { useContext } from 'react';
 3 | import { useParams } from 'react-router-dom';
 4 | import { products } from '../Data'; // Import our local dummy data
 5 | import { CartContext } from '../context/CartContext';
 6 | 
 7 | const ProductDetailsPage = () => {
 8 |   const { id } = useParams();
 9 |   const { addToCart } = useContext(CartContext);
10 | 
11 |   // Find the product in our dummy data array using its ID
12 |   const product = products.find(p => p.id === parseInt(id));
13 | 
14 |   if (!product) {
15 |     return <div className="container text-center mt-5"><p>Product not found.</p></div>;
16 |   }
17 | 
18 |   const optimizedImageUrl = `https://images.weserv.nl/?url=${encodeURIComponent(product.imageUrl)}&w=500&q=80`;
19 | 
20 |   return (
21 |     <div className="container mt-5">
22 |       <div className="row">
23 |         <div className="col-md-6 text-center">
24 |           <img src={optimizedImageUrl} alt={product.name} className="img-fluid" style={{ maxHeight: '400px' }} />
25 |         </div>
26 |         <div className="col-md-6">
27 |           <h2 className="text-capitalize">{product.category}</h2>
28 |           <h1>{product.name}</h1>
29 |           <p className="lead text-muted">{product.description}</p>
30 |           <h3 className="my-3">${product.price.toFixed(2)}</h3>
31 |           <button className="btn btn-primary btn-lg" onClick={() => addToCart(product)}>
32 |             Add to Cart
33 |           </button>
34 |         </div>
35 |       </div>
36 |     </div>
37 |   );
38 | };
39 | 
40 | export default ProductDetailsPage;


--------------------------------------------------------------------------------
/src/reportWebVitals.js:
--------------------------------------------------------------------------------
 1 | const reportWebVitals = onPerfEntry => {
 2 |   if (onPerfEntry && onPerfEntry instanceof Function) {
 3 |     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
 4 |       getCLS(onPerfEntry);
 5 |       getFID(onPerfEntry);
 6 |       getFCP(onPerfEntry);
 7 |       getLCP(onPerfEntry);
 8 |       getTTFB(onPerfEntry);
 9 |     });
10 |   }
11 | };
12 | 
13 | export default reportWebVitals;
14 | 


--------------------------------------------------------------------------------
/src/setupTests.js:
--------------------------------------------------------------------------------
1 | // jest-dom adds custom jest matchers for asserting on DOM nodes.
2 | // allows you to do things like:
3 | // expect(element).toHaveTextContent(/react/i)
4 | // learn more: https://github.com/testing-library/jest-dom
5 | import '@testing-library/jest-dom';
6 | 
