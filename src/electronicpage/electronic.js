import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, InputGroup, Dropdown, Row, Col, Card, Button, Pagination as BSPagination, Toast, ToastContainer } from 'react-bootstrap';
import { BsSearch, BsHeart, BsBag, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './electronic.css';
import { Link } from 'react-router-dom';
// header reverted to inline Navbar
import { CartContext } from '../cartpage/cartcontext';

const Electronic = () => {
  const { addToCart, cartItems } = useContext(CartContext) || {};
  const [showAddToast, setShowAddToast] = useState(false); // State for toast visibility
  const [lastAddedName, setLastAddedName] = useState(''); // State for last added product name


  const products = [
    { id: 1, name: 'Ultra HD 4K Camera', price: '$749.99', image: 'https://images.unsplash.com/photo-1705107958312-bd94ca0029bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVsdHJhJTIwaGQlMjA0ayUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
    { id: 2, name: 'Wireless Over-Ear Headphones', price: '$249.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: 3, name: 'Next-Gen Gaming Console', price: '$499.99', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: 4, name: 'Pro-Series Laptop 15"', price: '$1299.99', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: 5, name: 'Latest Smartphone Pro', price: '$999.99', image: 'https://images.unsplash.com/photo-1759588071781-2c3ba9128497?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTclMjBwcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' },
    { id: 6, name: 'Smartwatch Series 8', price: '$399.99', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  ];

  const heroBackground = 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';

  return (
    <div className="electronics-page">
      {/* --- Hero Section with Integrated Navbar --- */}
      <div className="ep-hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
        <Navbar variant="dark" expand="lg" className="ep-navbar">
          <Container fluid className="px-5">
            <Navbar.Brand href="/">
              <span className="fw-bold fs-5">ShopSphere</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#" className="active">Electronics</Nav.Link>
                <Nav.Link as={Link} to="/homeandgarden">Home & Garden</Nav.Link>
                <Nav.Link as={Link} to="/book">Books</Nav.Link>
                <Nav.Link as={Link} to="/fashion">Fashion</Nav.Link>
              </Nav>
              <Nav>
                <Form className="d-flex me-3">
                  <InputGroup>
                    <FormControl type="search" placeholder="Search" aria-label="Search" />
                    <InputGroup.Text><BsSearch /></InputGroup.Text>
                  </InputGroup>
                </Form>
                <Nav.Link href="#wishlist" className="me-3"><BsHeart size={20} /></Nav.Link>
                <Nav.Link as={Link} to="/cart" className="me-3" style={{ position: 'relative', display: 'inline-block' }}>
                  <BsBag size={20} />
                  {/* conditionally render if cartItems and cartItems.length exists */}
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* --- Hero Content --- */}
        <Container className="ep-hero-content">
          <p className="text-uppercase">Home / Electronics</p>
          <h1>Electronics Collection</h1>
          <p className="lead px-lg-5">Discover the latest in technology, from high-performance laptops to smart home devices.</p>
        </Container>
      </div>

      {/* --- Product List Section --- */}
      <Container className="mt-5 mb-5">
        <div className="ep-product-list-header">
          <h2>All Products</h2>
          <div className="d-flex">
            <Dropdown className="ep-filter-dropdown me-3">
              <Dropdown.Toggle variant="light" id="dropdown-category">Category</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Laptops</Dropdown.Item>
                <Dropdown.Item href="#">Smartphones</Dropdown.Item>
                <Dropdown.Item href="#">Audio</Dropdown.Item>
                <Dropdown.Item href="#">Cameras</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="ep-filter-dropdown me-3">
              <Dropdown.Toggle variant="light" id="dropdown-brand">Brand</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Sony</Dropdown.Item>
                <Dropdown.Item href="#">Apple</Dropdown.Item>
                <Dropdown.Item href="#">Dell</Dropdown.Item>
                <Dropdown.Item href="#">Samsung</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="ep-filter-dropdown">
              <Dropdown.Toggle variant="light" id="dropdown-sort">Sort By</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Newest</Dropdown.Item>
                <Dropdown.Item href="#">Price: Low to High</Dropdown.Item>
                <Dropdown.Item href="#">Price: High to Low</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map(product => (
            <Col key={product.id}>
              {/* Make the whole card clickable to the product page, but keep Add to Cart button from navigating */}
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="ep-product-card h-100">
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <div className="d-flex justify-content-start">
                      <Button
                        variant="primary"
                        onClick={(e) => {
                          // prevent the Link navigation when clicking the button
                          e.preventDefault();
                          e.stopPropagation();
                          // normalize price to number in case it's a string like "$749.99"
                          const numericPrice = typeof product.price === 'number' ? product.price : parseFloat(String(product.price).replace(/[^0-9.-]+/g, '')) || 0;
                          if (typeof addToCart === 'function') {
                            addToCart({ id: product.id, name: product.name, price: numericPrice, image: product.image });
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

        {/* --- Pagination Section --- */}
        <BSPagination className="ep-pagination">
          <BSPagination.Prev><BsChevronLeft /></BSPagination.Prev>
          <BSPagination.Item active>{1}</BSPagination.Item>
          <BSPagination.Item>{2}</BSPagination.Item>
          <BSPagination.Ellipsis />
          <BSPagination.Item>{5}</BSPagination.Item>
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

export default Electronic;