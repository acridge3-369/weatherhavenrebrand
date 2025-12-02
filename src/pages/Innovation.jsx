import { useState } from 'react'
import Header from '../components/Header'
import './Innovation.css'

function Innovation() {
  const [activeImageIndex1, setActiveImageIndex1] = useState(0)
  const [activeImageIndex2, setActiveImageIndex2] = useState(0)
  const [activeImageIndex3, setActiveImageIndex3] = useState(0)
  
  const showcase1 = [
    {
      image: '/images/426_uk_EHMECC-Power-Generation-and-Environmental-Control-.jpg',
      alt: 'Power Generation and Environmental Control',
      text: 'Advanced Power Systems'
    }
  ]

  const showcase2 = [
    {
      image: '/images/554_uk_MTS-Shelters-in-the-Middle-East.jpg',
      alt: 'MTS Deployment',
      text: 'Tactical Innovation'
    }
  ]

  const showcase3 = [
    {
      image: '/images/122_uk_services-maintenance-banner-1024x649.jpg',
      alt: 'Maintenance and Service',
      text: 'Engineering Excellence'
    }
  ]

  const innovationImages = [
    '/images/426_uk_EHMECC-Power-Generation-and-Environmental-Control-.jpg',
    '/images/554_uk_MTS-Shelters-in-the-Middle-East.jpg',
    '/images/122_uk_services-maintenance-banner-1024x649.jpg',
    '/images/387_uk_RDMSS-Deployed-Behind-Barbed-Wire-1024x683.jpg'
  ]

  return (
    <div className="app">
      <Header />
      <section className="innovation-hero-section">
        <div className="innovation-hero-content">
          <h1 className="innovation-hero-title">Innovation</h1>
          <p className="innovation-hero-subtitle">Pushing the Boundaries of Mobile Shelter Technology</p>
        </div>
      </section>
      
      <section className="innovation-intro-section">
        <div className="innovation-intro-content">
          <h2 className="innovation-section-title">Engineering the Future</h2>
          <ul className="innovation-intro-list">
            <li className="innovation-intro-item innovation-intro-item-single-line">
              <span className="innovation-intro-arrow">▶</span>
              <span className="innovation-intro-text">For over four decades, Weatherhaven has been at the forefront of mobile shelter innovation, continuously pushing the boundaries of what's possible in extreme environments. Our commitment to research, development, and engineering excellence drives us to create solutions that meet tomorrow's challenges today.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="innovation-image-bullets-section">
        <div className="innovation-image-bullets-content">
          <img 
            src="/images/426_uk_EHMECC-Power-Generation-and-Environmental-Control-.jpg" 
            alt="Innovation and technology"
            className="innovation-image-bullets-image"
          />
          <div className="innovation-bullets-row">
            <div className="innovation-bullet-item">
              <span className="innovation-bullet-arrow">▶</span>
              <span className="innovation-bullet-text">
                <strong>Continuous Innovation:</strong> Weatherhaven's engineering team continuously refines and improves our shelter systems based on real-world feedback from deployments across the globe. Every product iteration incorporates lessons learned from the field, ensuring our solutions evolve to meet emerging needs.
              </span>
            </div>
            <div className="innovation-bullet-item">
              <span className="innovation-bullet-arrow">▶</span>
              <span className="innovation-bullet-text">
                <strong>Material Science:</strong> Our commitment to innovation extends to materials research, developing proprietary fabrics and coatings that withstand extreme temperatures, UV exposure, and environmental challenges. From polar-grade insulation to tropical ventilation systems, we engineer materials for specific operational requirements.
              </span>
            </div>
            <div className="innovation-bullet-item">
              <span className="innovation-bullet-arrow">▶</span>
              <span className="innovation-bullet-text">
                <strong>Modular Architecture:</strong> Our modular design philosophy allows for unprecedented flexibility in shelter configurations. By standardizing components while maintaining customization capabilities, we enable rapid deployment of complex facilities that adapt to any mission requirement.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="innovation-technologies-section">
        <div className="innovation-technologies-content">
          <h2 className="innovation-section-title">Innovation Focus Areas</h2>
          <ul className="innovation-technologies-list">
            <li>Environmental Control Systems</li>
            <li>Power Generation Solutions</li>
            <li>Rapid Deployment Technologies</li>
            <li>Thermal Efficiency</li>
            <li>Lightweight Materials</li>
            <li>Interconnectivity Systems</li>
          </ul>
        </div>
      </section>

      <section className="innovation-showcase-section">
        <div className="innovation-showcase-content">
          <div className="innovation-showcase-grid">
            <div className="innovation-showcase-item">
              <div className="innovation-showcase-image-wrapper">
                {showcase1.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`innovation-showcase-image ${index === activeImageIndex1 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="innovation-showcase-text">
                <span className="innovation-showcase-bullet">▶</span>
                {showcase1[activeImageIndex1].text}
              </p>
            </div>

            <div className="innovation-showcase-item">
              <div className="innovation-showcase-image-wrapper">
                {showcase2.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`innovation-showcase-image ${index === activeImageIndex2 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="innovation-showcase-text">
                <span className="innovation-showcase-bullet">▶</span>
                {showcase2[activeImageIndex2].text}
              </p>
            </div>

            <div className="innovation-showcase-item">
              <div className="innovation-showcase-image-wrapper">
                {showcase3.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`innovation-showcase-image ${index === activeImageIndex3 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="innovation-showcase-text">
                <span className="innovation-showcase-bullet">▶</span>
                {showcase3[activeImageIndex3].text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="innovation-gallery-section">
        <div className="innovation-gallery-content">
          <h2 className="innovation-section-title">Innovation in Action</h2>
          <div className="innovation-gallery-grid">
            {innovationImages.map((image, index) => (
              <div key={index} className="innovation-gallery-item">
                <img 
                  src={image} 
                  alt={`Innovation deployment ${index + 1}`}
                  className="innovation-gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="innovation-features-section">
        <div className="innovation-features-content">
          <h2 className="innovation-section-title">Research & Development</h2>
          <div className="innovation-features-grid">
            <div className="innovation-feature-card">
              <h3 className="innovation-feature-title">Field-Tested Solutions</h3>
              <p className="innovation-feature-text">
                Every innovation undergoes rigorous testing in real-world conditions. From Antarctic expeditions 
                to desert deployments, our products are proven in the harshest environments on Earth.
              </p>
            </div>
            <div className="innovation-feature-card">
              <h3 className="innovation-feature-title">Customer-Driven Design</h3>
              <p className="innovation-feature-text">
                Innovation at Weatherhaven is driven by customer needs. We work closely with operators worldwide 
                to understand challenges and develop solutions that address real operational requirements.
              </p>
            </div>
            <div className="innovation-feature-card">
              <h3 className="innovation-feature-title">Sustainable Technology</h3>
              <p className="innovation-feature-text">
                Our commitment to innovation includes sustainable practices. We develop energy-efficient systems, 
                reusable components, and environmentally responsible materials without compromising performance.
              </p>
            </div>
            <div className="innovation-feature-card">
              <h3 className="innovation-feature-title">Future-Ready Platforms</h3>
              <p className="innovation-feature-text">
                Our modular architecture ensures our shelters can adapt to future technologies. Whether integrating 
                new power systems, communication equipment, or environmental controls, our platforms evolve with your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Innovation


