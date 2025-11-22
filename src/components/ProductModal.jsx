import { useEffect, useState } from 'react'
import './ProductModal.css'

function ProductModal({ isOpen, onClose, product }) {
  const [slideshow1Index, setSlideshow1Index] = useState(0)
  const [slideshow2Index, setSlideshow2Index] = useState(0)
  const [slideshow1PrevIndex, setSlideshow1PrevIndex] = useState(0)
  const [slideshow2PrevIndex, setSlideshow2PrevIndex] = useState(0)
  const [slideshow1Direction, setSlideshow1Direction] = useState('next')
  const [slideshow2Direction, setSlideshow2Direction] = useState('next')
  const [slideshow1Transitioning, setSlideshow1Transitioning] = useState(false)
  const [slideshow2Transitioning, setSlideshow2Transitioning] = useState(false)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      setSlideshow1Index(0)
      setSlideshow2Index(0)
    }
  }, [isOpen])

  if (!isOpen || !product) return null

  const images = product.images || []
  const images1 = images.slice(0, Math.ceil(images.length / 2))
  const images2 = images.slice(Math.ceil(images.length / 2))

  const nextSlide1 = () => {
    if (slideshow1Transitioning || images1.length <= 1) return
    setSlideshow1Transitioning(true)
    setSlideshow1Direction('next')
    setSlideshow1PrevIndex(slideshow1Index)
    setSlideshow1Index((prev) => (prev + 1) % images1.length)
    setTimeout(() => setSlideshow1Transitioning(false), 1000)
  }

  const prevSlide1 = () => {
    if (slideshow1Transitioning || images1.length <= 1) return
    setSlideshow1Transitioning(true)
    setSlideshow1Direction('prev')
    setSlideshow1PrevIndex(slideshow1Index)
    setSlideshow1Index((prev) => (prev - 1 + images1.length) % images1.length)
    setTimeout(() => setSlideshow1Transitioning(false), 1000)
  }

  const nextSlide2 = () => {
    if (slideshow2Transitioning || images2.length <= 1) return
    setSlideshow2Transitioning(true)
    setSlideshow2Direction('next')
    setSlideshow2PrevIndex(slideshow2Index)
    setSlideshow2Index((prev) => (prev + 1) % images2.length)
    setTimeout(() => setSlideshow2Transitioning(false), 1000)
  }

  const prevSlide2 = () => {
    if (slideshow2Transitioning || images2.length <= 1) return
    setSlideshow2Transitioning(true)
    setSlideshow2Direction('prev')
    setSlideshow2PrevIndex(slideshow2Index)
    setSlideshow2Index((prev) => (prev - 1 + images2.length) % images2.length)
    setTimeout(() => setSlideshow2Transitioning(false), 1000)
  }

  const firstImage = product.images && product.images.length > 0 ? product.images[0] : (product.productCardImage || '/images/mts.jpg')
  const backgroundImageStyle = {
    '--product-bg-image': `url('${firstImage}')`
  }

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()} style={backgroundImageStyle}>
        <button className="product-modal-close" onClick={onClose}>×</button>
        
        <div className="product-modal-header">
          <h2 className="product-modal-title">{product.title}</h2>
        </div>

        <div className="product-modal-body">
          {product.description && (
            <div className="product-modal-description">
              <p className="product-modal-description-text">{product.description}</p>
            </div>
          )}

          {product.features && product.features.length > 0 && (
            <div className="product-modal-features-container">
              <div className="product-modal-features">
                <h3 className="product-modal-features-title">Key Features</h3>
                <ul className="product-modal-features-list">
                  {product.features.map((feature, index) => (
                    <li key={index} className="product-modal-feature-item">
                      <span className="product-modal-feature-arrow">▶</span>
                      <span className="product-modal-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {images.length > 0 && (
                <div className="product-modal-slideshows">
                  {images1.length > 0 && (
                    <div className="product-modal-slideshow">
                      <div className="product-modal-slideshow-container">
                        {slideshow1Transitioning && (
                          <img 
                            src={images1[slideshow1PrevIndex]} 
                            alt={`${product.title} - Image ${slideshow1PrevIndex + 1}`}
                            className={`product-modal-slideshow-image product-modal-slideshow-image-exit product-modal-slideshow-image-exit-${slideshow1Direction}`}
                          />
                        )}
                        <img 
                          src={images1[slideshow1Index]} 
                          alt={`${product.title} - Image ${slideshow1Index + 1}`}
                          className={`product-modal-slideshow-image ${slideshow1Transitioning ? `product-modal-slideshow-image-enter product-modal-slideshow-image-enter-${slideshow1Direction}` : ''}`}
                        />
                        {images1.length > 1 && (
                          <>
                            <button 
                              className="product-modal-slideshow-button product-modal-slideshow-button-left"
                              onClick={prevSlide1}
                              aria-label="Previous image"
                            >
                              ‹
                            </button>
                            <button 
                              className="product-modal-slideshow-button product-modal-slideshow-button-right"
                              onClick={nextSlide1}
                              aria-label="Next image"
                            >
                              ›
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  {images2.length > 0 && (
                    <div className="product-modal-slideshow">
                      <div className="product-modal-slideshow-container">
                        {slideshow2Transitioning && (
                          <img 
                            src={images2[slideshow2PrevIndex]} 
                            alt={`${product.title} - Image ${slideshow2PrevIndex + images1.length + 1}`}
                            className={`product-modal-slideshow-image product-modal-slideshow-image-exit product-modal-slideshow-image-exit-${slideshow2Direction}`}
                          />
                        )}
                        <img 
                          src={images2[slideshow2Index]} 
                          alt={`${product.title} - Image ${slideshow2Index + images1.length + 1}`}
                          className={`product-modal-slideshow-image ${slideshow2Transitioning ? `product-modal-slideshow-image-enter product-modal-slideshow-image-enter-${slideshow2Direction}` : ''}`}
                        />
                        {images2.length > 1 && (
                          <>
                            <button 
                              className="product-modal-slideshow-button product-modal-slideshow-button-left"
                              onClick={prevSlide2}
                              aria-label="Previous image"
                            >
                              ‹
                            </button>
                            <button 
                              className="product-modal-slideshow-button product-modal-slideshow-button-right"
                              onClick={nextSlide2}
                              aria-label="Next image"
                            >
                              ›
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {product.specificationSections && product.specificationSections.length > 0 && (
            <div className="product-modal-specifications">
              <div className="product-modal-specifications-grid">
                {product.specificationSections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="product-modal-specification-section">
                    <h4 className="product-modal-specification-section-title">{section.title}</h4>
                    <ul className="product-modal-specifications-list">
                      {section.items.map((spec, index) => (
                        <li key={index} className="product-modal-specification-item">
                          <span className="product-modal-specification-arrow">▶</span>
                          <span className="product-modal-specification-text">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {product.specifications && product.specifications.length > 0 && !product.specificationSections && (
            <div className="product-modal-specifications">
              <h3 className="product-modal-specifications-title">Specifications</h3>
              <ul className="product-modal-specifications-list">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="product-modal-specification-item">
                    <span className="product-modal-specification-arrow">▶</span>
                    <span className="product-modal-specification-text">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.additionalInfo && (
            <div className="product-modal-additional">
              {product.additionalInfo.map((info, index) => (
                <p key={index} className="product-modal-additional-text">{info}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductModal

