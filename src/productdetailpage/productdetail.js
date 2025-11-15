import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, Breadcrumb, Button, ProgressBar, Navbar } from 'react-bootstrap';
import './productdetail.css';
import { allProducts } from './product';

import { useContext } from 'react';
import { CartContext } from '../cartpage/cartcontext';

// --- Placeholder Images for reviews ---
const userAvatar1 = 'https://www.bing.com/th/id/OIP.bJpr9jpclIkXQT-hkkb1KQHaHa?w=195&h=211';
const userAvatar2 = 'https://www.bing.com/th/id/OIP.bJpr9jpclIkXQT-hkkb1KQHaHa?w=195&h=211';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = allProducts.find(p => p.id === parseInt(productId));

  const reviews = [
    { author: 'Sophia Carter', avatar: userAvatar1, date: '2 months ago', rating: 5, text: 'Amazing performance and build quality. Worth every penny.', likes: 25, dislikes: 2 },
    { author: 'Olivia Bennett', avatar: userAvatar2, date: '3 months ago', rating: 4, text: "Great product, but I wish the battery lasted a bit longer.", likes: 18, dislikes: 3 }
  ];
  const ratingDistribution = { 5: 50, 4: 30, 3: 10, 2: 7, 1: 3 };

  const StarRating = ({ rating }) => (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>★</span>
      ))}
    </div>
  );

  if (!product) {
    return (
      <Container className="my-5 text-center">
        <h2>Product Not Found</h2>
        <p>We're sorry, but the product you are looking for does not exist.</p>
        <Button variant="primary" onClick={() => navigate('/')}>Return to Homepage</Button>
      </Container>
    );
  }
  
  // Create a standardized cart item object from the full product details
  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images.main // <-- FIX: Use the 'main' image property and rename it to 'image'
  };


  return (
    <div>
      <Navbar bg="light" expand="lg" className="px-4 border-bottom">
        <Navbar.Brand as={RouterLink} to="/">
          <span className="fw-bold ms-2 fs-4 align-middle">ShopSphere</span>
        </Navbar.Brand>
      </Navbar>
      
      <Container className="my-5">
        <Row>
          {/* --- Left Column: Product Image --- */}
          <Col md={6}>
            <Image src={product.images.main} fluid className="mb-3 main-product-image" alt={product.name} />
          </Col>

          {/* --- Right Column: Product Details --- */}
          <Col md={6}>
            <Breadcrumb>
              <Breadcrumb.Item as={RouterLink} to="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item as={RouterLink} to={`/${product.category.toLowerCase()}`}>{product.category}</Breadcrumb.Item>
              <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="fw-bold">{product.name}</h1>
            <h5 className="text-muted mb-3">Product ID: {product.id}</h5>
            <p>{product.description}</p>
            <h4 className="fw-bold mb-3">{product.price}</h4>

            {/* Example Specs Section */}
            <div className="mb-4">
              <h5 className="fw-bold">Key Specifications</h5>
              <ul>
                <li>High performance processor</li>
                <li>Long-lasting battery life</li>
                <li>Crystal-clear display</li>
                <li>1-year manufacturer warranty</li>
              </ul>
            </div>

            <Button variant="primary" size="lg" className="w-100" onClick={() => addToCart(cartItem)}>Add to Cart</Button>

            <hr className="my-4" />

            {/* --- Customer Reviews Section --- */}
            <div>
              <h3 className="fw-bold">Customer Reviews</h3>
              <Row className="align-items-center">
                <Col xs="auto"><span className="display-4 fw-bold">4.5</span></Col>
                <Col><StarRating rating={4.5} /><span className="text-muted">125 reviews</span></Col>
              </Row>
              <div className="mt-3">
                {Object.entries(ratingDistribution).sort((a,b) => b[0]-a[0]).map(([star, percent]) => (
                  <Row key={star} className="align-items-center mb-1">
                    <Col xs={1}>{star}</Col>
                    <Col xs={10}><ProgressBar now={percent} /></Col>
                    <Col xs={1} className="text-end text-muted">{percent}%</Col>
                  </Row>
                ))}
              </div>
              <div className="mt-4">
                {reviews.map((review, index) => (
                  <div key={index} className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <Image src={review.avatar} roundedCircle style={{ width: '40px', height: '40px' }} />
                      <div className="ms-3">
                        <div className="fw-bold">{review.author}</div>
                        <div className="text-muted small">{review.date}</div>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                    <p className="mt-2">{review.text}</p>
                    <div className="d-flex text-muted">
                      <span>👍 {review.likes}</span>
                      <span className="ms-3">👎 {review.dislikes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetail;