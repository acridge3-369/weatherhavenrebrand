import Header from '../components/Header'
import './ExpandingShelters.css'

function ExpandingShelters() {
  return (
    <div className="app">
      <Header />
      <section className="expanding-shelters-hero-section">
        <div className="expanding-shelters-hero-content">
          <h1 className="expanding-shelters-hero-title">Expanding Shelters</h1>
          <p className="expanding-shelters-hero-subtitle">Rugged Expandable Container Solutions</p>
        </div>
      </section>
      
      <section className="expanding-shelters-intro-section">
        <div className="expanding-shelters-intro-content">
          <h2 className="expanding-shelters-section-title">About Expanding Shelters</h2>
          <p className="expanding-shelters-description">
            Weatherhaven's range of rugged expandable container shelters - designed with logistical efficiency in mind - deliver superior functionality in every climate and location. Utilizing space-efficient ISO shipping container technology, Weatherhaven's expandable container shelters can be readily shipped anywhere on Earth by air, rail, road, or sea.
          </p>
          <div className="expanding-shelters-image-wrapper">
            <img 
              src="/expandablecontainer1.jpg" 
              alt="Expanding Shelters"
              className="expanding-shelters-main-image"
            />
          </div>
          <div className="expanding-shelters-products-grid">
            <div className="expanding-shelters-product-item">
              <h3 className="expanding-shelters-product-title">Mobile Expandable Container Configuration™ (MECC™)</h3>
              <div className="expanding-shelters-product-image-wrapper">
                <img 
                  src="/placeholder.jpg" 
                  alt="MECC"
                  className="expanding-shelters-product-image"
                />
              </div>
              <p className="expanding-shelters-product-description">
                Combines fabric shelter technology with ISO container standards. A fully assembled, self-contained unit offering three times the floor area of conventional modules with the same shipping footprint.
              </p>
            </div>
            <div className="expanding-shelters-product-item">
              <h3 className="expanding-shelters-product-title">Extended Height Mobile Expandable Container Configuration™ (EHMECC™)</h3>
              <div className="expanding-shelters-product-image-wrapper">
                <img 
                  src="/placeholder.jpg" 
                  alt="EHMECC"
                  className="expanding-shelters-product-image"
                />
              </div>
              <p className="expanding-shelters-product-description">
                Fully assembled and self-contained mobile expandable container with all MECC benefits, plus the capability to raise the roof an additional 4.5 feet for unrivalled spacious interior and expanded functionality.
              </p>
            </div>
            <div className="expanding-shelters-product-item">
              <h3 className="expanding-shelters-product-title">Tactical Redeployable Expandable Container Capability™ (TRECC™)</h3>
              <div className="expanding-shelters-product-image-wrapper">
                <img 
                  src="/placeholder.jpg" 
                  alt="TRECC"
                  className="expanding-shelters-product-image"
                />
              </div>
              <p className="expanding-shelters-product-description">
                Lightweight, extended-height expandable container with unmatched capability and versatile shipping configuration. Available in multiple sizes for helicopter, sealift, fixed wing, or vehicle transportation.
              </p>
            </div>
            <div className="expanding-shelters-product-item">
              <h3 className="expanding-shelters-product-title">Hardwall Expandable Redeployable Container™ (HERCon™)</h3>
              <div className="expanding-shelters-product-image-wrapper">
                <img 
                  src="/placeholder.jpg" 
                  alt="HERCon"
                  className="expanding-shelters-product-image"
                />
              </div>
              <p className="expanding-shelters-product-description">
                Breakthrough in redeployable shelter technology. Hard-walled expandable container incorporating ISO shipping standards for fast, cost-effective global deployment. Available in 4' and 8' wide configurations.
              </p>
            </div>
            <div className="expanding-shelters-product-item">
              <h3 className="expanding-shelters-product-title">Air-Transportable Expandable Pallet Shelter (ATEPS)</h3>
              <div className="expanding-shelters-product-image-wrapper">
                <img 
                  src="/placeholder.jpg" 
                  alt="ATEPS"
                  className="expanding-shelters-product-image"
                />
              </div>
              <p className="expanding-shelters-product-description">
                Tactical, quick-erect, robust shelter solution for expeditionary and emergency response operations. Allows militaries to safely and swiftly deploy forward operating bases, medical facilities, and specialized capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExpandingShelters

