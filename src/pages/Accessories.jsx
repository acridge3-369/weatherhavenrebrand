import { useState } from 'react'
import Header from '../components/Header'
import ProductModal from '../components/ProductModal'
import './Accessories.css'

function Accessories() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      title: 'Solar Shades',
      description:
        'Weatherhaven Solarshades are designed to work with your mobile shelter to provide protection in areas of extreme, direct solar radiation. They help keep interior temperatures down and improve comfort in harsh sun conditions.',
      images: ['/images/solarshade6.jpg'],
      features: [
        'Designed to reduce solar gain and interior temperatures',
        'Integrates with existing shelters and camp layouts',
        'Lightweight and quick to deploy',
        'Suitable for long-term use in high-radiation environments'
      ],
      specificationSections: [],
      additionalInfo: []
    },
    {
      title: 'Interconnectors and Corridors',
      description:
        "Weatherhaven's interconnectors and corridors create protected passageways that shield occupants from the elements as they move between shelters, enabling fully integrated camp and facility layouts.",
      images: ['/images/command post.jpg'],
      features: [
        'Provides covered, weather-protected links between shelters',
        'Supports efficient camp circulation and workflow',
        'Can be configured for different shelter types and layouts',
        'Improves safety and comfort in harsh weather conditions'
      ],
      specificationSections: [],
      additionalInfo: []
    }
  ]

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="app">
      <Header />
      <section className="accessories-hero-section">
        <div className="accessories-hero-content">
          <h1 className="accessories-hero-title">Accessories</h1>
          <p className="accessories-hero-subtitle">Customizable Solutions for Your Operations</p>
        </div>
      </section>
      
      <section className="accessories-intro-section">
        <div className="accessories-intro-content">
          <h2 className="accessories-section-title">About Accessories</h2>
          <p className="accessories-description">
            We believe that every shelter should be as unique as your operation or mission. Our goal is to keep you safe, comfortable, and operational - no matter where you're located or what your project calls for. Whether you need Solarshades, Interconnectors and Corridors, or Weather Protection Covers, Weatherhaven's accessories allow a level of customization that's second to none.
          </p>
          <div className="accessories-image-wrapper">
            <img 
              src="/images/solarshade6.jpg" 
              alt="Accessories"
              className="accessories-main-image"
            />
          </div>
          <div className="accessories-products-grid">
            {products.map((product, index) => (
              <div 
                key={index}
                className="accessories-product-item accessories-product-item-clickable"
                onClick={() => handleProductClick(product)}
              >
                <h3 className="accessories-product-title">{product.title}</h3>
                <div className="accessories-product-image-wrapper">
                  <img 
                    src={product.images[0] || '/images/placeholder.jpg'} 
                    alt={product.title}
                    className="accessories-product-image"
                  />
                  <div className="accessories-product-cta">
                    <span className="accessories-product-cta-text">Click to see more</span>
                  </div>
                </div>
                <p className="accessories-product-description">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductModal 
        isOpen={selectedProduct !== null}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default Accessories

