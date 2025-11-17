import Header from '../components/Header'
import './SoftShelters.css'

function SoftShelters() {
  return (
    <div className="app">
      <Header />
      <section className="soft-shelters-hero-section">
        <div className="soft-shelters-hero-content">
          <h1 className="soft-shelters-hero-title">Soft Shelters</h1>
          <p className="soft-shelters-hero-subtitle">High-Performance Mobile Shelters for Tactical Applications</p>
        </div>
      </section>
      
      <section className="soft-shelters-intro-section">
        <div className="soft-shelters-intro-content">
          <h2 className="soft-shelters-section-title">About Soft Shelters</h2>
          <p className="soft-shelters-description">
            As a result of ongoing customer feedback and 39-40 years of engineering, designing, and manufacturing tensioned fabric structures, Weatherhaven's softwall shelters have evolved into the high-performance mobile shelters that they are today. Readily shipped to any corner of Earth - and functional in even the harshest, most demanding locations and climates - these robust mobile shelters were built for tactical or semi-permanent applications with the end user in mind.
          </p>
          <div className="soft-shelters-image-wrapper">
            <img 
              src="/soft shelter.jpg" 
              alt="Soft Shelters"
              className="soft-shelters-main-image"
            />
          </div>
          <div className="soft-shelters-products-grid">
            <div className="soft-shelters-product-item">
              <h3 className="soft-shelters-product-title">Modular Tent System</h3>
              <div className="soft-shelters-product-image-wrapper">
                <img 
                  src="/placeholder.jpg" 
                  alt="Modular Tent System"
                  className="soft-shelters-product-image"
                />
              </div>
              <p className="soft-shelters-product-description">
                One of the most thermally efficient and robust tactical shelters in the world. Available in multiple sizes for various field applications, particularly popular with military forces for operations centres and medical facilities.
              </p>
            </div>
            <div className="soft-shelters-product-item">
              <h3 className="soft-shelters-product-title">Series 4</h3>
              <div className="soft-shelters-product-image-wrapper">
                <img 
                  src="/placeholder.jpg" 
                  alt="Series 4"
                  className="soft-shelters-product-image"
                />
              </div>
              <p className="soft-shelters-product-description">
                High-performance shelter used worldwide by commercial and military customers in all climates, including polar regions. Widely utilized for workforce housing, accommodation, recreation, and first-aid units.
              </p>
            </div>
            <div className="soft-shelters-product-item">
              <h3 className="soft-shelters-product-title">Series 8</h3>
              <div className="soft-shelters-product-image-wrapper">
                <img 
                  src="/placeholder.jpg" 
                  alt="Series 8"
                  className="soft-shelters-product-image"
                />
              </div>
              <p className="soft-shelters-product-description">
                Lightweight version of the Series 4, designed for locations without high winds or snow loads. Ideal for equipment maintenance, storage, temporary manufacturing facilities, and silviculture applications.
              </p>
            </div>
            <div className="soft-shelters-product-item">
              <h3 className="soft-shelters-product-title">MEX-26</h3>
              <div className="soft-shelters-product-image-wrapper">
                <img 
                  src="/placeholder.jpg" 
                  alt="MEX-26"
                  className="soft-shelters-product-image"
                />
              </div>
              <p className="soft-shelters-product-description">
                Designed to facilitate armoured vehicle and helicopter maintenance for global military forces. Provides a dust-free environment for repairs on optics and weapons.
              </p>
            </div>
            <div className="soft-shelters-product-item">
              <h3 className="soft-shelters-product-title">Polar Shelters</h3>
              <div className="soft-shelters-product-image-wrapper">
                <img 
                  src="/placeholder.jpg" 
                  alt="Polar Shelters"
                  className="soft-shelters-product-image"
                />
              </div>
              <p className="soft-shelters-product-description">
                Includes the Polarhaven, Polar Chief, and Endurance shelters designed for high winds, snow, and extremely low temperatures. Ideal for Arctic expeditions, base camps, and scientific studies.
              </p>
            </div>
            <div className="soft-shelters-product-item">
              <h3 className="soft-shelters-product-title">RDMSS</h3>
              <div className="soft-shelters-product-image-wrapper">
                <img 
                  src="/placeholder.jpg" 
                  alt="RDMSS"
                  className="soft-shelters-product-image"
                />
              </div>
              <p className="soft-shelters-product-description">
                The most advanced softwall shelter system in Weatherhaven's fleet. Offers rapidly deployed capability for any geographic and climatic zone worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SoftShelters

