import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, InputGroup, Dropdown, Row, Col, Card, Button, Pagination as BSPagination, Toast, ToastContainer } from 'react-bootstrap';
import { BsSearch, BsHeart, BsBag, BsChevronLeft, BsChevronRight, BsPersonCircle } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeandgarden.css';
import { Link } from 'react-router-dom';
import { allProducts } from '../productdetailpage/product';
import { CartContext } from '../cartpage/cartcontext';

const HomeAndGarden = () => {
  const { addToCart, cartItems } = useContext(CartContext) || {};
  const products = allProducts.filter(p => p.category === 'Home & Garden');
  const [showAddToast, setShowAddToast] = useState(false); // State for toast visibility
  const [lastAddedName, setLastAddedName] = useState(''); // State for last added product name

  const heroBackground = 'https://images.unsplash.com/photo-1573201106611-1de49dfada5d?...';

  return (
    <div className="home-and-garden-page">
      {/* Hero Section with Navbar */}
      <div className="hg-hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
        <Navbar variant="dark" expand="lg" className="hg-navbar">
          <Container fluid className="px-5">
            <Navbar.Brand as={Link} to="/">
              <span className="fw-bold fs-5">ShopSphere</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/electronics">Electronics</Nav.Link>
                <Nav.Link as={Link} to="/homeandgarden" className="active">Home & Garden</Nav.Link>
                <Nav.Link as={Link} to="/book">Books</Nav.Link>
                <Nav.Link as={Link} to="/fashion">Fashion</Nav.Link>
              </Nav>
              <Nav>
                <Form className="d-flex me-3">
                  <InputGroup>
                    <FormControl type="search" placeholder="Search products..." aria-label="Search" />
                    <InputGroup.Text><BsSearch /></InputGroup.Text>
                  </InputGroup>
                </Form>
                <Nav.Link href="#wishlist" className="me-3"><BsHeart size={20} /></Nav.Link>
                {/* Cart link with badge - NOW LEADS TO /cart */}
                <Nav.Link as={Link} to="/cart" className="me-3" style={{ position: 'relative', display: 'inline-block' }}>
                    <BsBag size={20} />
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
                <Nav.Link href="#account"><BsPersonCircle size={20} /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Hero Content */}
        <Container className="hg-hero-content">
          <p className="text-uppercase">Home / Home & Garden</p>
          <h1>Home & Garden Collection</h1>
          <p className="lead px-lg-5">Beautify your living space with our curated selection of decor, furniture, and garden essentials.</p>
        </Container>
      </div>

      {/* Product List Section */}
      <Container className="mt-5 mb-5">
        <div className="hg-product-list-header">
          <h2>All Products</h2>
          {/* filters omitted for brevity */}
        </div>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map(product => (
            <Col key={product.id}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="hg-product-card h-100">
                  <Card.Img variant="top" src={(product.images && product.images.main) || product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price.toFixed(2)}</Card.Text>
                    <div className="d-flex justify-content-start">
                      <Button
                        variant="primary"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const numericPrice = typeof product.price === 'number' ? product.price : parseFloat(String(product.price).replace(/[^0-9.-]+/g, '')) || 0;
                          if (typeof addToCart === 'function') {
                            addToCart({ id: product.id, name: product.name, price: numericPrice, image: (product.images && product.images.main) || product.image });
                            setLastAddedName(product.name); // Set the name for the toast
                            setShowAddToast(true); // Show the toast
                            setTimeout(() => setShowAddToast(false), 1800); // Hide after 1.8 seconds
                          } else {
                            console.error('addToCart not available from CartContext');
                          }
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <BSPagination className="hg-pagination">
          <BSPagination.Prev><BsChevronLeft /></BSPagination.Prev>
          <BSPagination.Item active>{1}</BSPagination.Item>
          <BSPagination.Item>{2}</BSPagination.Item>
          <BSPagination.Ellipsis />
          <BSPagination.Item>{6}</BSPagination.Item>
          <BSPagination.Next><BsChevronRight /></BSPagination.Next>
        </BSPagination>
      </Container>
      {/* Toast for "Added to Cart" */}
      <ToastContainer position="bottom-end" className="p-3">
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
};

export default HomeAndGarden;