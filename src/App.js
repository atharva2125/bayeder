import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ShoppingCart, Menu, X, Headphones, Music, Mic } from 'lucide-react';

// Placeholder components
const ProductList = () => <div style={{ padding: '16px' }}>Product List</div>;
const About = () => <div style={{ padding: '16px' }}>About Us</div>;
const Contact = () => <div style={{ padding: '16px' }}>Contact Us</div>;

// Featured Product Component
// Featured Product Component
const FeaturedProduct = ({ product }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
  }}>
    {/* Image Placeholder */}
    <img 
      src="/src/download.jpg" // This assumes download.jpg is in the public directory
      alt={product.name} 
      style={{
        width: '100%',
        height: '160px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '16px',
      }} 
    />
    
    <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{product.name}</h3>
    <p style={{ color: '#4b5563', marginBottom: '16px' }}>${product.price}</p>
    <button style={{
      width: '100%',
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '9999px',
      transition: 'background-color 0.3s ease-in-out'
    }}>
      Add to Cart
    </button>
  </div>
);

// Hero Section Component
const HeroSection = () => (
  <div style={{
    background: 'linear-gradient(to right, #3b82f6, #6366f1)',
    color: 'white',
    padding: '80px 16px',
    textAlign: 'center'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '40px',
        fontWeight: '700',
        marginBottom: '24px',
        animation: 'fadeIn 0.3s'
      }}>Welcome to Bayeder</h1>
      <p style={{
        fontSize: '20px',
        marginBottom: '32px',
        animation: 'fadeIn 0.3s 0.3s'
      }}>Discover premium audio experiences with our cutting-edge headphones and audio equipment.</p>
      <button style={{
        backgroundColor: 'white',
        color: '#3b82f6',
        padding: '12px 32px',
        borderRadius: '9999px',
        fontSize: '18px',
        fontWeight: '600',
        transition: 'background-color 0.3s',
        animation: 'fadeIn 0.3s 0.6s'
      }}>
        Shop Now
      </button>
    </div>
  </div>
);

// Feature Section Component
const FeatureSection = () => (
  <div style={{ padding: '64px 0', backgroundColor: '#f3f4f6' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '48px'
      }}>Why Choose Bayeder?</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', justifyContent: 'center' }}>
        <FeatureCard 
          icon={<Headphones size={40} />}
          title="Premium Sound Quality"
          description="Experience crystal-clear audio with our state-of-the-art technology."
        />
        <FeatureCard 
          icon={<Music size={40} />}
          title="Wireless Freedom"
          description="Enjoy your music without the hassle of tangled wires."
        />
        <FeatureCard 
          icon={<Mic size={40} />}
          title="Professional Grade"
          description="Studio-quality equipment for the discerning audiophile."
        />
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out'
  }}>
    <div style={{ color: '#3b82f6', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>{icon}</div>
    <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{title}</h3>
    <p style={{ color: '#4b5563' }}>{description}</p>
  </div>
);

// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch featured products
    const fetchFeaturedProducts = () => {
      const products = [
        { id: 1, name: "Premium Headphones", price: 299.99 },
        { id: 2, name: "Wireless Earbuds", price: 149.99 },
        { id: 3, name: "Studio Microphone", price: 199.99 },
      ];
      setFeaturedProducts(products);
    };

    fetchFeaturedProducts();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        {/* Header */}
        <header style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Link to="/" style={{ fontSize: '24px', fontWeight: '700', color: '#3b82f6' }}>Bayeder</Link>
            <nav style={{ display: 'none', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
              <Link to="/" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Home</Link>
              <Link to="/products" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Products</Link>
              <Link to="/about" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>About</Link>
              <Link to="/contact" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</Link>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <ShoppingCart style={{ color: '#6b7280', cursor: 'pointer', transition: 'color 0.3s' }} />
              <button onClick={toggleMenu} style={{ color: '#6b7280', transition: 'color 0.3s' }}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            padding: '16px',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <Link to="/" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Home</Link>
            <Link to="/products" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Products</Link>
            <Link to="/about" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>About</Link>
            <Link to="/contact" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</Link>
          </div>
        )}

        {/* Main Content */}
        <main style={{ paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <FeatureSection />
                <section style={{ padding: '64px 0' }}>
                  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '700', textAlign: 'center', marginBottom: '48px' }}>Featured Products</h2>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '32px'
                    }}>
                      {featuredProducts.map(product => (
                        <FeaturedProduct key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </section>
              </>
            } />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
