import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const LoginPage = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Log In
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <a href="#signup">Need an account? Sign Up</a>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default LoginPage;