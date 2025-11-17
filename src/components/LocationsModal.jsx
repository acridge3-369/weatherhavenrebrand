import { useEffect } from 'react'
import './LocationsModal.css'

function LocationsModal({ isOpen, onClose, locations }) {
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

  if (!isOpen) return null

  return (
    <div className="locations-modal-overlay" onClick={onClose}>
      <div className="locations-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="locations-modal-close" onClick={onClose}>×</button>
        <div className="locations-modal-header">
          <h2 className="locations-modal-title">Defence and Peacekeeping Around the World</h2>
        </div>
        <div className="locations-modal-body">
          <div className="locations-countries-grid">
            {locations.map((location, index) => (
              <div key={index} className="locations-country-item">
                {location.country}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationsModal

