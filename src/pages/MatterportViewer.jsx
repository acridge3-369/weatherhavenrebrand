import { useState, useEffect } from 'react'
import Header from '../components/Header'
import './MatterportViewer.css'

function MatterportViewer() {
  const [matterportId, setMatterportId] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  // You can set a default Matterport ID here or get it from props/state
  useEffect(() => {
    // Example: Set a default Matterport showcase ID
    // Replace with your actual Matterport showcase ID
    // setMatterportId('YOUR_MATTERPORT_SHOWCASE_ID')
  }, [])

  const handleIdChange = (e) => {
    setMatterportId(e.target.value)
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className="app">
      <Header />
      <section className="matterport-hero-section">
        <div className="matterport-hero-content">
          <h1 className="matterport-hero-title">3D Virtual Tour</h1>
          <p className="matterport-hero-subtitle">Explore Our Facilities in Immersive 3D</p>
        </div>
      </section>
      
      <section className="matterport-viewer-section">
        <div className="matterport-viewer-content">
          <div className="matterport-description">
            <p className="matterport-description-text">
              Matterport interior capture made for seamless interior exploration of all WEATHERHAVEN SHELTERS
            </p>
          </div>
          <div className="matterport-controls">
            <div className="matterport-input-group">
              <label htmlFor="matterport-id" className="matterport-label">
                Matterport Showcase ID
              </label>
              <input
                id="matterport-id"
                type="text"
                value={matterportId}
                onChange={handleIdChange}
                placeholder="Enter Matterport Showcase ID"
                className="matterport-input"
              />
            </div>
          </div>
          
          <div className="matterport-viewer-wrapper">
            {matterportId ? (
              <iframe
                src={`https://my.matterport.com/show/?m=${matterportId}`}
                className="matterport-iframe"
                allow="xr-spatial-tracking"
                allowFullScreen
                onLoad={handleLoad}
                title="Matterport 3D Showcase"
              />
            ) : (
              <div className="matterport-placeholder">
                <div className="matterport-placeholder-content">
                  <svg
                    className="matterport-placeholder-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                  <h3 className="matterport-placeholder-title">Enter Matterport Showcase ID</h3>
                  <p className="matterport-placeholder-text">
                    Enter a Matterport Showcase ID above to view the 3D virtual tour
                  </p>
                </div>
              </div>
            )}
            {!isLoaded && matterportId && (
              <div className="matterport-loading">
                <div className="matterport-spinner"></div>
                <p>Loading 3D Tour...</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MatterportViewer

