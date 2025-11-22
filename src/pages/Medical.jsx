import { useState } from 'react'
import Header from '../components/Header'
import './Medical.css'

function Medical() {
  const [activeImageIndex1, setActiveImageIndex1] = useState(0)
  const [activeImageIndex2, setActiveImageIndex2] = useState(0)
  const [activeImageIndex3, setActiveImageIndex3] = useState(0)
  
  const showcase1 = [
    {
      image: '/images/hosptial.jpg',
      alt: 'Field Hospital',
      text: 'Field Hospitals'
    }
  ]

  const showcase2 = [
    {
      image: '/images/003_peru_weatherhaven-peru-home-medical.jpg',
      alt: 'Medical Clinic',
      text: 'Medical Clinics'
    }
  ]

  const showcase3 = [
    {
      image: '/images/command post.jpg',
      alt: 'Emergency Response',
      text: 'Emergency Response'
    }
  ]

  const medicalImages = [
    '/images/003_peru_weatherhaven-peru-home-medical.jpg',
    '/images/hosptial.jpg',
    '/images/002_peru_weatherhaven-peru-home-military.jpg'
  ]

  return (
    <div className="app">
      <Header />
      <section className="medical-hero-section">
        <div className="medical-hero-content">
          <h1 className="medical-hero-title">Medical Solutions</h1>
          <p className="medical-hero-subtitle">Mobile Healthcare Infrastructure for Global Medical Needs</p>
        </div>
      </section>
      
      <section className="medical-intro-section">
        <div className="medical-intro-content">
          <h2 className="medical-section-title">Trusted Medical Shelter Solutions</h2>
          <ul className="medical-intro-list">
            <li className="medical-intro-item medical-intro-item-single-line">
              <span className="medical-intro-arrow">▶</span>
              <span className="medical-intro-text">From mobile clinics to field hospitals, Weatherhaven provides medical shelter solutions that meet the guidelines and standards for the use of foreign field hospitals, set by organizations like the World Health Organization and the United Nations.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="medical-image-bullets-section">
        <div className="medical-image-bullets-content">
          <img 
            src="/images/hosptial.jpg" 
            alt="Medical deployment"
            className="medical-image-bullets-image"
          />
          <div className="medical-bullets-row">
            <div className="medical-bullet-item">
              <span className="medical-bullet-arrow">▶</span>
              <span className="medical-bullet-text">
                <strong>Rapid:</strong> Weatherhaven's mobile medical shelter systems are easy to transport, quick to install, and flexible in design for rapid response to almost any medical need. Our expandable containers can be fully deployed and functional on the back of trucks and trailers for fast on-site deployment, in order to deliver medical services as quickly as possible.
              </span>
            </div>
            <div className="medical-bullet-item">
              <span className="medical-bullet-arrow">▶</span>
              <span className="medical-bullet-text">
                <strong>EcoDesign:</strong> Weatherhaven's innovative designs protect workers and patients from the environments they are located in. Whether providing efficient protection from extreme heat, or protection from mosquitos, our solutions are designed to be deployed anywhere in the world.
              </span>
            </div>
            <div className="medical-bullet-item">
              <span className="medical-bullet-arrow">▶</span>
              <span className="medical-bullet-text">
                <strong>Redeployable:</strong> Weatherhaven's range of softwall shelters and expandable containers are redeployable, allowing you to set up camp wherever help is needed. Our mobile clinics facilitate medical care for civilians, camp occupants, and military personnel engaged in remote areas all around the world.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="medical-applications-section">
        <div className="medical-applications-content">
          <h2 className="medical-section-title">Medical Applications</h2>
          <ul className="medical-applications-list">
            <li>Field Hospitals</li>
            <li>Medical Clinics</li>
            <li>Emergency Response</li>
            <li>CBRN</li>
          </ul>
        </div>
      </section>

      <section className="medical-showcase-section">
        <div className="medical-showcase-content">
          <div className="medical-showcase-grid">
            <div className="medical-showcase-item">
              <div className="medical-showcase-image-wrapper">
                {showcase1.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`medical-showcase-image ${index === activeImageIndex1 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="medical-showcase-text">
                <span className="medical-showcase-bullet">▶</span>
                {showcase1[activeImageIndex1].text}
              </p>
            </div>

            <div className="medical-showcase-item">
              <div className="medical-showcase-image-wrapper">
                {showcase2.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`medical-showcase-image ${index === activeImageIndex2 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="medical-showcase-text">
                <span className="medical-showcase-bullet">▶</span>
                {showcase2[activeImageIndex2].text}
              </p>
            </div>

            <div className="medical-showcase-item">
              <div className="medical-showcase-image-wrapper">
                {showcase3.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`medical-showcase-image ${index === activeImageIndex3 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="medical-showcase-text">
                <span className="medical-showcase-bullet">▶</span>
                {showcase3[activeImageIndex3].text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="medical-gallery-section">
        <div className="medical-gallery-content">
          <h2 className="medical-section-title">Deployment Gallery</h2>
          <div className="medical-gallery-grid">
            {medicalImages.map((image, index) => (
              <div key={index} className="medical-gallery-item">
                <img 
                  src={image} 
                  alt={`Medical deployment ${index + 1}`}
                  className="medical-gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="medical-features-section">
        <div className="medical-features-content">
          <h2 className="medical-section-title">Medical-Grade Capabilities</h2>
          <div className="medical-features-grid">
            <div className="medical-feature-card">
              <h3 className="medical-feature-title">Rapid Deployment</h3>
              <p className="medical-feature-text">
                Deploy in hours, not days. Our modular systems are designed for quick setup and 
                immediate operational readiness in any environment.
              </p>
            </div>
            <div className="medical-feature-card">
              <h3 className="medical-feature-title">Extreme Environments</h3>
              <p className="medical-feature-text">
                Engineered to operate in the harshest conditions - from desert heat to arctic cold, 
                withstanding extreme weather and terrain challenges.
              </p>
            </div>
            <div className="medical-feature-card">
              <h3 className="medical-feature-title">WHO & UN Compliant</h3>
              <p className="medical-feature-text">
                Meets guidelines and standards for foreign field hospitals set by organizations like 
                the World Health Organization and the United Nations.
              </p>
            </div>
            <div className="medical-feature-card">
              <h3 className="medical-feature-title">Custom Configurations</h3>
              <p className="medical-feature-text">
                Fully customizable to meet specific medical requirements - field hospitals, mobile 
                clinics, emergency response units, and CBRN facilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Medical

