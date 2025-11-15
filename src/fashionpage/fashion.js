import { Navbar, Nav, Container, Form, FormControl, InputGroup, Dropdown, Row, Col, Card, Button, Pagination as BSPagination, Toast, ToastContainer } from 'react-bootstrap';
import { BsSearch, BsHeart, BsBag, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fashion.css'; // Your custom CSS file
import React, { useContext, useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import { CartContext } from '../cartpage/cartcontext';

const Fashion = () => {
  // --- Sample product list for the fashion category ---
  const fashionProducts = [
    { id: 23, name: 'Elegant Evening Dress', price: '$89.99', image: 'https://images.unsplash.com/photo-1664343866299-bc69e9909655?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVsZ2FudCUyMGV2ZW5pbmclMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
    { id: 24, name: 'Men\'s Classic Leather Jacket', price: '$149.99', image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: 25, name: 'Casual Denim Jeans', price: '$59.99', image: 'https://images.unsplash.com/photo-1662011966037-7ea814f79a64?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhc3VhbCUyMGRlbmltJTIwamVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' },
    { id: 26, name: 'Slim-Fit Business Suit', price: '$299.99', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2xpbSUyMGZpdCUyMGJ1c3NpbmVzcyUyMHN1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' },
    { id: 27, name: 'Cozy Knit Sweater', price: '$69.99', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: 28, name: 'Summer Maxi Dress', price: '$79.99', image: 'https://plus.unsplash.com/premium_photo-1723780956289-1893c7f074f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1bW1lciUyMG1heGklMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' }
  ];

  const heroBackground = 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';

  // Cart context
  const { addToCart, cartItems } = useContext(CartContext) || {}; // Destructure cartItems
  const [showAddToast, setShowAddToast] = useState(false);
  const [lastAddedName, setLastAddedName] = useState('');


  return (
    <div className="fashion-page">
      {/* --- Hero Section with Integrated Navbar --- */}
      <div className="fp-hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
        <Navbar variant="dark" expand="lg" className="fp-navbar">
          <Container fluid className="px-5">
            <Navbar.Brand href="/">
              <span className="fw-bold fs-5">ShopSphere</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/electronics">Electronics</Nav.Link>
                <Nav.Link as={Link} to="/homeandgarden">Home & Garden</Nav.Link>
                <Nav.Link as={Link} to="/book">Books</Nav.Link>
                <Nav.Link href="#" className="active">Fashion</Nav.Link>
              </Nav>
              <Nav>
                <Form className="d-flex me-3">
                  <InputGroup>
                    <FormControl type="search" placeholder="Search" aria-label="Search" />
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
        <Container className="fp-hero-content">
          <p className="text-uppercase">Home / Fashion</p>
          <h1>Fashion Collection</h1>
          <p className="lead px-lg-5">Discover the latest trends and timeless pieces for every occasion.</p>
        </Container>
      </div>

      {/* --- Product List Section --- */}
      <Container className="mt-5 mb-5">
        <div className="fp-product-list-header">
          <h2>All Apparel</h2>
          <div className="d-flex">
            <Dropdown className="fp-filter-dropdown me-3">
              <Dropdown.Toggle variant="light" id="dropdown-category">Category</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Men's Clothing</Dropdown.Item>
                <Dropdown.Item href="#">Women's Clothing</Dropdown.Item>
                <Dropdown.Item href="#">Accessories</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="fp-filter-dropdown me-3">
              <Dropdown.Toggle variant="light" id="dropdown-size">Size</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">S</Dropdown.Item>
                <Dropdown.Item href="#">M</Dropdown.Item>
                <Dropdown.Item href="#">L</Dropdown.Item>
                <Dropdown.Item href="#">XL</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="fp-filter-dropdown">
              <Dropdown.Toggle variant="light" id="dropdown-brand">Brand</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Calvin Klein</Dropdown.Item>
                <Dropdown.Item href="#">Levi's</Dropdown.Item>
                <Dropdown.Item href="#">Zara</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {fashionProducts.map(product => (
            <Col key={product.id}>
              {/* The Link component ensures the entire card is clickable and leads to the product detail page */}
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="fp-product-card h-100">
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text> {/* Uses Card.Text which can be styled by .fp-product-card .card-text */}
                    <div className="d-flex justify-content-start">
                      <Button
                        variant="primary"
                        className="add-to-cart-button"
                        onClick={(e) => {
                          e.preventDefault(); // Prevents the Link (card click) from navigating
                          e.stopPropagation(); // Stops the click from bubbling up to the Link
                          const numericPrice = typeof product.price === 'number'
                            ? product.price
                            : parseFloat(String(product.price).replace(/[^0-9.-]+/g, '')) || 0;
                          if (typeof addToCart === 'function') {
                            addToCart({ id: product.id, name: product.name, price: numericPrice, image: product.image });
                            setLastAddedName(product.name);
                            setShowAddToast(true);
                            setTimeout(() => setShowAddToast(false), 1800);
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
        <BSPagination className="fp-pagination">
          <BSPagination.Prev><BsChevronLeft /></BSPagination.Prev>
          <BSPagination.Item active>{1}</BSPagination.Item>
          <BSPagination.Item>{2}</BSPagination.Item>
          <BSPagination.Ellipsis />
          <BSPagination.Item>{7}</BSPagination.Item>
          <BSPagination.Next><BsChevronRight /></BSPagination.Next>
        </BSPagination>
      </Container>
    </div>
  );
};

export default Fashion;