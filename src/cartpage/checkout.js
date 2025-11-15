// --- START OF FILE CheckoutModal.js ---

import React from 'react';
import { Modal, Button, ListGroup, Image } from 'react-bootstrap';

const CheckoutModal = ({ show, handleClose, cartItems, subtotal, tax, total }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Order Summary</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <Image src={item.image} alt={item.name} style={{ width: '50px', marginRight: '15px' }} rounded />
                                <div>
                                    <h6 className="my-0">{item.name}</h6>
                                    <small className="text-muted">Quantity: {item.quantity}</small>
                                </div>
                            </div>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <hr />
                <div className="d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => alert('Proceeding to payment!')}>
                    Confirm Order
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CheckoutModal;