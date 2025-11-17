import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './Products.css'

function Products() {
  return (
    <div className="app">
      <Header />
      <section className="products-hero-section">
        <div className="products-hero-content">
          <h1 className="products-hero-title">Products</h1>
          <p className="products-hero-subtitle">Innovative Solutions for Every Need</p>
        </div>
      </section>
      
      <section className="products-intro-section">
        <div className="products-intro-content">
          <h2 className="products-section-title">Our Product Lineup</h2>
          <ul className="products-intro-list">
            <li className="products-intro-item">
              <span className="products-intro-arrow">▶</span>
              <span className="products-intro-text">Comprehensive range of deployable infrastructure solutions</span>
            </li>
            <li className="products-intro-item">
              <span className="products-intro-arrow">▶</span>
              <span className="products-intro-text">Designed for versatility and reliability</span>
            </li>
            <li className="products-intro-item">
              <span className="products-intro-arrow">▶</span>
              <span className="products-intro-text">Customizable to meet your specific requirements</span>
            </li>
          </ul>
          <div className="products-buttons-container">
            <div className="products-category-item">
              <Link to="/products/soft-shelters" className="products-category-button">
                Soft Shelters
              </Link>
              <div className="products-category-image-wrapper">
                <img 
                  src="/soft shelter.jpg" 
                  alt="Soft Shelters"
                  className="products-category-image"
                />
              </div>
              <p className="products-category-bullet">
                <span className="products-category-bullet-arrow">▶</span>
                <span className="products-category-bullet-text">High-performance mobile shelters built for tactical applications in the world's harshest climates</span>
              </p>
            </div>
            <div className="products-category-item">
              <Link to="/products/expanding-shelters" className="products-category-button">
                Expanding Shelters
              </Link>
              <div className="products-category-image-wrapper">
                <img 
                  src="/expandablecontainer1.jpg" 
                  alt="Expanding Shelters"
                  className="products-category-image"
                />
              </div>
              <p className="products-category-bullet">
                <span className="products-category-bullet-arrow">▶</span>
                <span className="products-category-bullet-text">Rugged expandable container shelters utilizing space-efficient ISO shipping container technology</span>
              </p>
            </div>
            <div className="products-category-item">
              <Link to="/products/accessories" className="products-category-button">
                Accessories
              </Link>
              <div className="products-category-image-wrapper">
                <img 
                  src="/solarshade6.jpg" 
                  alt="Accessories"
                  className="products-category-image"
                />
              </div>
              <p className="products-category-bullet">
                <span className="products-category-bullet-arrow">▶</span>
                <span className="products-category-bullet-text">Customizable accessories including Solarshades, Interconnectors, and Weather Protection Covers</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-features-section">
        <div className="products-features-content">
          <h2 className="products-section-title">Product Features</h2>
          <div className="products-features-grid">
            <div className="products-feature-card">
              <h3 className="products-feature-title">Modular Design</h3>
              <p className="products-feature-text">
                Flexible configurations that adapt to your needs. Mix and match components 
                to create the perfect solution for any application.
              </p>
            </div>
            <div className="products-feature-card">
              <h3 className="products-feature-title">Durable Construction</h3>
              <p className="products-feature-text">
                Built to last in the most challenging environments. Engineered with quality 
                materials and proven designs for long-term reliability.
              </p>
            </div>
            <div className="products-feature-card">
              <h3 className="products-feature-title">Easy Deployment</h3>
              <p className="products-feature-text">
                Quick setup and breakdown for maximum efficiency. Designed for rapid 
                deployment without compromising on quality or functionality.
              </p>
            </div>
            <div className="products-feature-card">
              <h3 className="products-feature-title">Custom Solutions</h3>
              <p className="products-feature-text">
                Tailored to your specifications. Work with our team to create custom 
                configurations that perfectly match your operational requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

