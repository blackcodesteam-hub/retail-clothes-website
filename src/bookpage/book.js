import React, { useContext, useState } from 'react'; // Import useState
import { Navbar, Nav, Container, Form, FormControl, InputGroup, Dropdown, Row, Col, Card, Button, Pagination as BSPagination, Toast, ToastContainer } from 'react-bootstrap'; // Import Toast and ToastContainer
import { BsSearch, BsHeart, BsBag, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './book.css';
import { Link } from 'react-router-dom';
import { allProducts } from '../productdetailpage/product'; // adjust path if needed
import { CartContext } from '../cartpage/cartcontext';

const Book = () => {
  // ✅ filter only Books from master list
  const products = allProducts.filter(p => p.category === 'Books');
  const { addToCart, cartItems } = useContext(CartContext) || {}; // Destructure cartItems
  const [showAddToast, setShowAddToast] = useState(false); // State for toast visibility
  const [lastAddedName, setLastAddedName] = useState(''); // State for last added product name

  const heroBackground = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';

  return (
    <div className="books-page">
      {/* --- Hero Section with Integrated Navbar --- */}
      <div className="bp-hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
        <Navbar variant="dark" expand="lg" className="bp-navbar">
          <Container fluid className="px-5">
            <Navbar.Brand as={Link} to="/">
              <span className="fw-bold fs-5">ShopSphere</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/electronics">Electronics</Nav.Link>
                <Nav.Link as={Link} to="/homeandgarden">Home & Garden</Nav.Link>
                <Nav.Link as={Link} to="/book" className="active">Books</Nav.Link>
                <Nav.Link as={Link} to="/fashion">Fashion</Nav.Link>
              </Nav>
              <Nav>
                <Form className="d-flex me-3">
                  <InputGroup>
                    <FormControl type="search" placeholder="Search books..." aria-label="Search" />
                    <InputGroup.Text><BsSearch /></InputGroup.Text>
                  </InputGroup>
                </Form>
                <Nav.Link href="#wishlist" className="me-3"><BsHeart size={20} /></Nav.Link>
                <Nav.Link as={Link} to="/cart" className="me-3" style={{ position: 'relative', display: 'inline-block' }}> {/* Added style for badge positioning */}
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* --- Hero Content --- */}
        <Container className="bp-hero-content">
          <p className="text-uppercase">Home / Books</p>
          <h1>Books Collection</h1>
          <p className="lead px-lg-5">Explore new worlds and discover your next great read from our vast collection.</p>
        </Container>
      </div>

      {/* --- Product List Section --- */}
      <Container className="mt-5 mb-5">
        <div className="bp-product-list-header">
          <h2>All Books</h2>
          <div className="d-flex">
            <Dropdown className="bp-filter-dropdown me-3">
              <Dropdown.Toggle variant="light" id="dropdown-genre">Genre</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Fiction</Dropdown.Item>
                <Dropdown.Item href="#">Science Fiction</Dropdown.Item>
                <Dropdown.Item href="#">Mystery</Dropdown.Item>
                <Dropdown.Item href="#">Non-Fiction</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="bp-filter-dropdown me-3">
              <Dropdown.Toggle variant="light" id="dropdown-format">Format</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Hardcover</Dropdown.Item>
                <Dropdown.Item href="#">Paperback</Dropdown.Item>
                <Dropdown.Item href="#">eBook</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="bp-filter-dropdown">
              <Dropdown.Toggle variant="light" id="dropdown-sort">Sort By</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Bestselling</Dropdown.Item>
                <Dropdown.Item href="#">Newest</Dropdown.Item>
                <Dropdown.Item href="#">Price: Low to High</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* ✅ Keep your Card grid intact */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map(product => (
            <Col key={product.id}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="bp-product-card h-100">
                  <Card.Img variant="top" src={product.images.main} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price}</Card.Text>
                    <div className="d-flex justify-content-start">
                      <Button
                        variant="primary"
                        className="add-to-cart-button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const numericPrice = typeof product.price === 'number' ? product.price : parseFloat(String(product.price).replace(/[^0-9.-]+/g, '')) || 0;
                          if (typeof addToCart === 'function') {
                            addToCart({ id: product.id, name: product.name, price: numericPrice, image: (product.images && product.images.main) || '' });
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
        <BSPagination className="bp-pagination">
          <BSPagination.Prev><BsChevronLeft /></BSPagination.Prev>
          <BSPagination.Item active>{1}</BSPagination.Item>
          <BSPagination.Item>{2}</BSPagination.Item>
          <BSPagination.Ellipsis />
          <BSPagination.Item>{9}</BSPagination.Item>
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

export default Book;