import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Form, FormControl, Button, Nav } from 'react-bootstrap';
import { ShoppingCart, User, Search } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="bg-light text-dark p-3 shadow-sm">
      <Container fluid className="d-flex justify-content-between align-items-center">

        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-dark">
          E-Commerce Store
        </Navbar.Brand>

        <Form className="d-flex flex-grow-1 mx-4">
          <FormControl
            type="search"
            placeholder="Search for products, brands and more"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-secondary">
            <Search size={20} />
          </Button>
        </Form>

        <Nav className="d-flex flex-row align-items-center">
          <Nav.Link as={Link} to="/login" className="text-dark d-flex align-items-center me-3">
            <User className="me-1" />
            <span>Account</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="text-dark d-flex align-items-center">
            <ShoppingCart className="me-1" />
            <span>Cart ({cartItemCount})</span>
          </Nav.Link>
        </Nav>

      </Container>
    </header>
  );
};

export default Header;