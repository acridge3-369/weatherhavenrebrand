import Header from '../components/Header'
import './Accessories.css'
import WeatherhavenText from '../components/WeatherhavenText'

function Accessories() {
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
            We believe that every shelter should be as unique as your operation or mission. Our goal is to keep you safe, comfortable, and operational - no matter where you're located or what your project calls for. Whether you need Solarshades, Interconnectors and Corridors, or Weather Protection Covers, <WeatherhavenText />'s accessories allow a level of customization that's second to none.
          </p>
          <div className="accessories-image-wrapper">
            <img
              src="/solarshade6.jpg"
              alt="Accessories"
              className="accessories-main-image"
            />
          </div>
          <div className="accessories-products-grid">
            <div className="accessories-product-item">
              <h3 className="accessories-product-title">Solar Shades</h3>
              <div className="accessories-product-image-wrapper">
                <img
                  src="/placeholder.jpg"
                  alt="Solar Shades"
                  className="accessories-product-image"
                />
              </div>
              <p className="accessories-product-description">
                <WeatherhavenText /> Solarshades are designed to be used in combination with your mobile shelter for protection in areas of extreme, direct solar radiation.
              </p>
            </div>
            <div className="accessories-product-item">
              <h3 className="accessories-product-title">Interconnectors and Corridors</h3>
              <div className="accessories-product-image-wrapper">
                <img
                  src="/placeholder.jpg"
                  alt="Interconnectors and Corridors"
                  className="accessories-product-image"
                />
              </div>
              <p className="accessories-product-description">
                <WeatherhavenText />'s interconnectors and corridors provide protected links and passageways that shield occupants from the outside elements while they travel between shelters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Accessories

