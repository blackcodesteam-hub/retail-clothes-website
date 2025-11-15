import React, { useContext, useState } from 'react';
import { Nav, Navbar, Container, Row, Col, Form, InputGroup, FormControl, Toast, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Heart, Bag, PersonCircle, Twitter, Facebook, Github, Search } from 'react-bootstrap-icons';
import './homepage.css'; // Make sure your CSS file is linked
import { CartContext } from '../cartpage/cartcontext';

const Homepage = () => {
    // Hooks must be called at the top level of the component
    const { addToCart, cartItems } = useContext(CartContext) || {};
    // State for Toast functionality
    const [showAddToast, setShowAddToast] = useState(false);
    const [lastAddedName, setLastAddedName] = useState('');

    // Featured products data (kept here so it's easy to replace with imports later)
    const featuredProducts = [
        {
            id: 101,
            name: 'Pro-Series Laptop',
            price: 1299.99,
            image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 102,
            name: 'Smart Coffee Maker',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1603999684548-0002fd13a45d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjBjb2ZmZWUlMjBtYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600'
        },
        {
            id: 103,
            name: 'Noise-Cancelling Headphones',
            price: 199.99,
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }
    ];

    // Using the original hero image for the homepage
    const heroBackground = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80';


    return (
        <div>
            {/* --- Hero Section with Integrated Navbar (from electronic page) --- */}
            <div className="hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
                <Navbar variant="dark" expand="lg" className="hp-navbar">
                    <Container fluid className="px-5">
                        <Navbar.Brand as={Link} to="/">
                            <span className="fw-bold fs-5">ShopSphere</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link as={Link} to="/electronics">Electronics</Nav.Link>
                                <Nav.Link as={Link} to="/homeandgarden">Home & Garden</Nav.Link>
                                <Nav.Link as={Link} to="/book">Books</Nav.Link>
                                <Nav.Link as={Link} to="/fashion">Fashion</Nav.Link>
                            </Nav>
                            <Nav>
                                <Form className="d-flex me-3">
                                    <InputGroup>
                                        <FormControl type="search" placeholder="Search products..." aria-label="Search" />
                                        <InputGroup.Text><Search /></InputGroup.Text>
                                    </InputGroup>
                                </Form>
                                <Nav.Link href="#favorites" className="me-3" style={{ position: 'relative', display: 'inline-block' }}><Heart size={20} /></Nav.Link>
                                <Nav.Link as={Link} to="/cart" className="me-3" style={{ position: 'relative', display: 'inline-block' }}>
                                    <Bag size={20} />
                                    {Array.isArray(cartItems) && cartItems.length > 0 && (
                                        <span className="cart-badge" style={{
                                            position: 'absolute',
                                            top: -6,
                                            right: -8,
                                            background: '#dc3545',
                                            color: 'white',
                                            borderRadius: '50%',
                                            padding: '2px 6px',
                                            fontSize: '12px'
                                        }}>
                                            {cartItems.reduce((s, it) => s + (it.quantity || 0), 0)}
                                        </span>
                                    )}
                                </Nav.Link>
                                {/* Removed Nav.Link for the profile/account (PersonCircle) */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                
                {/* Spacer to push content down from the Navbar position */}
                <div className="hp-navbar-spacer"></div>

                {/* Hero Content - Adapted from the original Homepage content and electronic.js structure */}
                <Container className="hp-hero-content">
                    {/* Removed text-uppercase line as it wasn't in the original homepage content */}
                    <h1 className="display-3 fw-bold">Discover Your Next Favorite Thing</h1>
                    <p className="lead">From gadgets to apparel, find everything you need in one place.</p>
                    <button className="shop-now-button">Explore Products</button>
                </Container>
            </div>

            {/* New Arrivals Section */}
            <h2 className="section-title">New Arrivals</h2>
            <div className="product-section">
                <Link to="/homeandgarden" className="product-card">
                    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Modern Smart Home Hub" />
                    <p>Modern Smart Home Hub</p>
                </Link>
                <Link to="/fashion" className="product-card">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Latest Running Shoes" />
                    <p>Latest Running Shoes</p>
                </Link>
                <Link to="/electronics" className="product-card">
                    <img src="https://images.unsplash.com/photo-1660833638050-41f95d8b94e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWx0cmElMjB0aGluJTIwbGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt="ultra thin laptop" />
                    <p>Ultra-Thin Laptop</p>
                </Link>
                <Link to="/book" className="product-card">
                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Bestselling Novel" />
                    <p>The Midnight Library</p>
                </Link>
            </div>

            {/* Featured Products Section */}
            <h2 className="section-title">Featured Products</h2>
            <div className="product-section">
                {featuredProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                        <span className="product-price">${product.price.toFixed(2)}</span>
                        <button
                            className="btn btn-primary add-to-cart-button"
                            onClick={(e) => {
                                e.preventDefault();
                                if (typeof addToCart === 'function') {
                                    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
                                    // show transient toast
                                    setLastAddedName(product.name);
                                    setShowAddToast(true);
                                    setTimeout(() => setShowAddToast(false), 1800);
                                } else {
                                    console.error('addToCart not available');
                                }
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Flash Sale Section */}
            <div className="promo-section">
                <h1>Flash Sale!</h1>
                <p>Get up to 40% off on select electronics and home goods. Limited time only!</p>
                <button>Shop the Sale</button>
            </div>

            {/* Top Categories Section */}
            <h2 className="section-title">Top Categories</h2>
            <div className="category-section">
                <Link to="/electronics" className="category-card">
                    <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Tech Gadgets" />
                    <p>Tech Gadgets</p>
                </Link>
                <Link to="/homeandgarden" className="category-card">
                    <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Home Essentials" />
                    <p>Home Essentials</p>
                </Link>
                <Link to="/book" className="category-card">
                    <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Latest Reads" />
                    <p>Latest Reads</p>
                </Link>
                <Link to="/fashion" className="category-card">
                    <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Fashion Finds" />
                    <p>Fashion Finds</p>
                </Link>
            </div>

            {/* Shop by Brand Section */}
            <h2 className="section-title">Shop by Brand</h2>
            <div className="brand-section">
                <div className="brand-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png" alt="Apple" />
                </div>
                <div className="brand-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/500px-Sony_logo.svg.png" alt="Sony" />
                </div>
                <div className="brand-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1200px-Ikea_logo.svg.png" alt="IKEA" />
                </div>
                <div className="brand-card">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Penguin_logo.svg/300px-Penguin_logo.svg.png" alt="Penguin Books" />
                </div>
            </div>

            {/* Footer */}
            <footer className="footer-section">
                <Container>
                    <Row className="align-items-center justify-content-between py-3">
                        <Col xs={12} md={4} className="text-center text-md-start mb-2 mb-md-0">
                            <p className="mb-0 copyright-text">&copy; 2024 ShopSphere. All rights reserved.</p>
                        </Col>
                        <Col xs={12} md={4} className="text-center mb-2 mb-md-0">
                            <Nav className="justify-content-center footer-nav">
                                <Nav.Link href="#about">About Us</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
                                <Nav.Link href="#terms">Terms of Service</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={12} md={4} className="text-center text-md-end">
                            <div className="social-icons">
                                <a href="#" aria-label="Twitter"><Twitter /></a>
                                <a href="#" aria-label="GitHub"><Github /></a>
                                <a href="#" aria-label="Facebook"><Facebook /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
             {/* Toast for "Added to Cart" */}
             {/* Added position-fixed for maximum compatibility */}
             <ToastContainer position="bottom-end" className="p-3 position-fixed">
                <Toast onClose={() => setShowAddToast(false)} show={showAddToast} delay={1800} autohide>
                    <Toast.Header>
                        <strong className="me-auto">ShopSphere</strong>
                        <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body>{lastAddedName} has been added to your cart!</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}

export default Homepage;