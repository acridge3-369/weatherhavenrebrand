import { useState } from 'react'
import Header from '../components/Header'
import LocationsModal from '../components/LocationsModal'
import './Military.css'

function Military() {
  const [showLocationsModal, setShowLocationsModal] = useState(false)
  const [activeImageIndex1, setActiveImageIndex1] = useState(0)
  const [activeImageIndex2, setActiveImageIndex2] = useState(0)
  const [activeImageIndex3, setActiveImageIndex3] = useState(0)
  const [activeImageIndex4, setActiveImageIndex4] = useState(0)
  const [activeImageIndex5, setActiveImageIndex5] = useState(0)
  const [activeImageIndex6, setActiveImageIndex6] = useState(0)
  
  const showcase1 = [
    {
      image: '/command post.jpg',
      alt: 'Military Command Post',
      text: 'Command Posts'
    }
  ]

  const showcase2 = [
    {
      image: '/hosptial.jpg',
      alt: 'Military Hospital',
      text: 'Field Hospitals'
    }
  ]

  const showcase3 = [
    {
      image: '/military maintenance.jpg',
      alt: 'Military Maintenance',
      text: 'Maintenance camps'
    }
  ]

  const showcase4 = [
    {
      image: '/426_uk_EHMECC-Power-Generation-and-Environmental-Control-.jpg',
      alt: 'Power Generation',
      text: 'Power Generation'
    }
  ]

  const showcase5 = [
    {
      image: '/military dining hall.jpg',
      alt: 'Military Dining Hall',
      text: 'Dining Halls'
    }
  ]

  const showcase6 = [
    {
      image: '/storage.jpg',
      alt: 'Storage',
      text: 'Storage'
    }
  ]

  const nextImage1 = () => {
    setActiveImageIndex1((prev) => (prev + 1) % showcase1.length)
  }

  const prevImage1 = () => {
    setActiveImageIndex1((prev) => (prev - 1 + showcase1.length) % showcase1.length)
  }

  const nextImage2 = () => {
    setActiveImageIndex2((prev) => (prev + 1) % showcase2.length)
  }

  const prevImage2 = () => {
    setActiveImageIndex2((prev) => (prev - 1 + showcase2.length) % showcase2.length)
  }

  const nextImage3 = () => {
    setActiveImageIndex3((prev) => (prev + 1) % showcase3.length)
  }

  const prevImage3 = () => {
    setActiveImageIndex3((prev) => (prev - 1 + showcase3.length) % showcase3.length)
  }
  
  const militaryImages = [
    '/122_uk_services-maintenance-banner-1024x649.jpg',
    '/002_peru_weatherhaven-peru-home-military.jpg',
    '/404_uk_Series-4-Staff-Camp-Canada-2048x1419.jpeg'
  ]

  const locationsData = [
    { country: 'Afghanistan', mission: 'NATO' },
    { country: 'Algeria', mission: 'UN' },
    { country: 'Angola', mission: 'UN' },
    { country: 'Australia', mission: '—' },
    { country: 'Belgium', mission: 'NATO' },
    { country: 'Belize', mission: '—' },
    { country: 'Bosnia & Herzegovina', mission: 'UN & Coalition' },
    { country: 'Brazil', mission: '—' },
    { country: 'Burkina Faso', mission: '—' },
    { country: 'Burundi', mission: 'UN' },
    { country: 'Cambodia', mission: 'UN' },
    { country: 'Canada', mission: '—' },
    { country: 'Chile', mission: '—' },
    { country: 'Colombia', mission: '—' },
    { country: 'Congo', mission: '—' },
    { country: 'Croatia', mission: 'UN' },
    { country: 'DRC', mission: 'UN' },
    { country: 'East Timor', mission: '—' },
    { country: 'Ecuador', mission: '—' },
    { country: 'Eritrea', mission: 'UN' },
    { country: 'Ethiopia', mission: 'UN' },
    { country: 'Germany', mission: '—' },
    { country: 'Greece', mission: '—' },
    { country: 'Guatemala', mission: 'UN' },
    { country: 'Iraq', mission: 'Coalition' },
    { country: 'Ireland', mission: '—' },
    { country: 'Japan', mission: '—' },
    { country: 'Jordan', mission: '—' },
    { country: 'Kosovo and Metohija', mission: 'UN' },
    { country: 'Kuwait', mission: 'Coalition' },
    { country: 'Latvia', mission: '—' },
    { country: 'Lebanon', mission: 'UN' },
    { country: 'Lesotho', mission: '—' },
    { country: 'Lithuania', mission: '—' },
    { country: 'Mali', mission: 'UN' },
    { country: 'Mauritania', mission: '—' },
    { country: 'Mexico', mission: '—' },
    { country: 'Mozambique', mission: 'UN' },
    { country: 'Netherlands', mission: '—' },
    { country: 'New Zealand', mission: '—' },
    { country: 'Norway', mission: '—' },
    { country: 'Peru', mission: '—' },
    { country: 'Poland', mission: 'NATO' },
    { country: 'Qatar', mission: '—' },
    { country: 'Romania', mission: '—' },
    { country: 'Rwanda', mission: 'UN' },
    { country: 'Saudi Arabia', mission: '—' },
    { country: 'Seychelles', mission: '—' },
    { country: 'Sierra Leone', mission: '—' },
    { country: 'Singapore', mission: '—' },
    { country: 'Somalia', mission: 'UN' },
    { country: 'South Africa', mission: '—' },
    { country: 'South Sudan', mission: 'UN' },
    { country: 'Sudan', mission: '—' },
    { country: 'Switzerland', mission: '—' },
    { country: 'Turkey', mission: '—' },
    { country: 'UAE', mission: '—' },
    { country: 'Ukraine', mission: 'NATO' },
    { country: 'United Kingdom', mission: '—' },
    { country: 'United States', mission: '—' },
    { country: 'Western Sahara', mission: '—' }
  ]

  return (
    <div className="app">
      <Header />
      <section className="military-hero-section">
        <div className="military-hero-content">
          <h1 className="military-hero-title">Military Solutions</h1>
          <p className="military-hero-subtitle">Rapidly Deployable Infrastructure for Defense Operations</p>
        </div>
      </section>
      
      <section className="military-intro-section">
        <div className="military-intro-content">
          <h2 className="military-section-title">Trusted by Military Forces Worldwide</h2>
          <ul className="military-intro-list">
            <li className="military-intro-item military-intro-item-single-line">
              <span className="military-intro-arrow">▶</span>
              <span className="military-intro-text">Providing critical mobile infrastructure solutions to military forces around the globe for over 40 years</span>
            </li>
            <li className="military-intro-item">
              <span className="military-intro-arrow">▶</span>
              <span className="military-intro-text">Engineered to meet the most demanding operational requirements</span>
            </li>
            <li className="military-intro-item">
              <span className="military-intro-arrow">▶</span>
              <span className="military-intro-text">From forward operating bases to command centers, field hospitals, and specialized facilities</span>
            </li>
          </ul>
          <button 
            className="military-locations-button"
            onClick={() => setShowLocationsModal(true)}
          >
            Military Locations
          </button>
        </div>
      </section>

      <section className="military-image-bullets-section">
        <div className="military-image-bullets-content">
          <img 
            src="/militarypic.jpg" 
            alt="Military deployment"
            className="military-image-bullets-image"
          />
          <div className="military-bullets-row">
            <div className="military-bullet-item">
              <span className="military-bullet-arrow">▶</span>
              <span className="military-bullet-text">
                <strong>Rapid:</strong> Deployed on all 7 continents. Fully operational in 20 minutes.
              </span>
            </div>
            <div className="military-bullet-item">
              <span className="military-bullet-arrow">▶</span>
              <span className="military-bullet-text">
                <strong>Ecodesign:</strong> Designed for harsh environments. Solar shades reduce power and fuel needs.
              </span>
            </div>
            <div className="military-bullet-item">
              <span className="military-bullet-arrow">▶</span>
              <span className="military-bullet-text">
                <strong>Redeployable:</strong> Expertly engineered for repeated deployment anywhere.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="military-applications-section">
        <div className="military-applications-content">
          <h2 className="military-section-title">Military Applications</h2>
          <ul className="military-applications-list">
            <li>Military Camps</li>
            <li>Command & Control</li>
            <li>Workshops</li>
            <li>Simulation Training</li>
            <li>Unmanned Aerial Vehicles & Satellite Systems</li>
            <li>Ballistic Defense</li>
          </ul>
        </div>
      </section>

      <section className="military-showcase-section">
        <div className="military-showcase-content">
          <div className="military-showcase-grid">
            <div className="military-showcase-item">
              <div className="military-showcase-image-wrapper">
                {showcase1.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`military-showcase-image ${index === activeImageIndex1 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="military-showcase-text">
                <span className="military-showcase-bullet">▶</span>
                {showcase1[activeImageIndex1].text}
              </p>
            </div>

            <div className="military-showcase-item">
              <div className="military-showcase-image-wrapper">
                {showcase2.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`military-showcase-image ${index === activeImageIndex2 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="military-showcase-text">
                <span className="military-showcase-bullet">▶</span>
                {showcase2[activeImageIndex2].text}
              </p>
            </div>

            <div className="military-showcase-item">
              <div className="military-showcase-image-wrapper">
                {showcase3.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`military-showcase-image ${index === activeImageIndex3 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="military-showcase-text">
                <span className="military-showcase-bullet">▶</span>
                {showcase3[activeImageIndex3].text}
              </p>
            </div>
          </div>

          <div className="military-showcase-grid">
            <div className="military-showcase-item">
              <div className="military-showcase-image-wrapper">
                {showcase4.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`military-showcase-image ${index === activeImageIndex4 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="military-showcase-text">
                <span className="military-showcase-bullet">▶</span>
                {showcase4[activeImageIndex4].text}
              </p>
            </div>

            <div className="military-showcase-item">
              <div className="military-showcase-image-wrapper">
                {showcase5.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`military-showcase-image ${index === activeImageIndex5 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="military-showcase-text">
                <span className="military-showcase-bullet">▶</span>
                {showcase5[activeImageIndex5].text}
              </p>
            </div>

            <div className="military-showcase-item">
              <div className="military-showcase-image-wrapper">
                {showcase6.map((item, index) => (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.alt}
                    className={`military-showcase-image ${index === activeImageIndex6 ? 'active' : ''}`}
                  />
                ))}
              </div>
              <p className="military-showcase-text">
                <span className="military-showcase-bullet">▶</span>
                {showcase6[activeImageIndex6].text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="military-gallery-section">
        <div className="military-gallery-content">
          <h2 className="military-section-title">Deployment Gallery</h2>
          <div className="military-gallery-grid">
            {militaryImages.map((image, index) => (
              <div key={index} className="military-gallery-item">
                <img 
                  src={image} 
                  alt={`Military deployment ${index + 1}`}
                  className="military-gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="military-features-section">
        <div className="military-features-content">
          <h2 className="military-section-title">Military-Grade Capabilities</h2>
          <div className="military-features-grid">
            <div className="military-feature-card">
              <h3 className="military-feature-title">Rapid Deployment</h3>
              <p className="military-feature-text">
                Deploy in hours, not days. Our modular systems are designed for quick setup and 
                immediate operational readiness in any environment.
              </p>
            </div>
            <div className="military-feature-card">
              <h3 className="military-feature-title">Extreme Environments</h3>
              <p className="military-feature-text">
                Engineered to operate in the harshest conditions - from desert heat to arctic cold, 
                withstanding extreme weather and terrain challenges.
              </p>
            </div>
            <div className="military-feature-card">
              <h3 className="military-feature-title">Ballistic Protection</h3>
              <p className="military-feature-text">
                Integrated ballistic protection systems available, providing enhanced security for 
                personnel and critical assets in forward operating areas.
              </p>
            </div>
            <div className="military-feature-card">
              <h3 className="military-feature-title">Custom Configurations</h3>
              <p className="military-feature-text">
                Fully customizable to meet specific mission requirements - command centers, medical 
                facilities, maintenance bays, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <LocationsModal
        isOpen={showLocationsModal}
        onClose={() => setShowLocationsModal(false)}
        locations={locationsData}
      />
    </div>
  )
}

export default Military

