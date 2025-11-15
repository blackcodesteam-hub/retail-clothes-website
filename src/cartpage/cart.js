import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import React, { useContext } from 'react'; // Import useContext
import { CartContext } from './cartcontext'; // Import CartContext
import './cart.css'; // Make sure your CSS file is linked

const CartPage = () => {
    // Use useContext to get cartItems and the functions to modify it
    const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; // Example 10% tax
    const total = subtotal + tax;

    return (
        <div className="cart-page">
            <Container>
                <h1 className="cart-title">Your Shopping Cart</h1>
                <Row>
                    <Col md={8}>
                        <div className="cart-items">
                            {cartItems.length === 0 ? (
                                <p className="text-center">Your cart is empty.</p>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <Row className="align-items-center">
                                            <Col xs={3} md={2}>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col xs={9} md={4}>
                                                <h5 className="item-name">{item.name}</h5>
                                            </Col>
                                            <Col xs={4} md={2} className="text-md-center">
                                                <span className="item-price">${item.price.toFixed(2)}</span>
                                            </Col>
                                            <Col xs={4} md={2}>
                                                <div className="quantity-controls">
                                                    <Button size="sm" variant="outline-secondary" onClick={() => decreaseQuantity(item.id)}>-</Button>
                                                    <span className="item-quantity">{item.quantity}</span>
                                                    <Button size="sm" variant="outline-secondary" onClick={() => increaseQuantity(item.id)}>+</Button>
                                                </div>
                                            </Col>
                                            <Col xs={4} md={2} className="text-end">
                                                <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>
                                                    <Trash />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                ))
                            )}
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="order-summary">
                            <h4>Order Summary</h4>
                            <div className="summary-item">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-item">
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <hr />
                            <div className="summary-total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <Button variant="primary" className="w-100 mt-3" disabled={cartItems.length === 0}>Proceed to Checkout</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CartPage;