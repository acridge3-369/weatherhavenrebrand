import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past 100vh (hero section height)
      const scrollPosition = window.scrollY || window.pageYOffset
      const heroHeight = window.innerHeight
      setIsScrolled(scrollPosition > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    // Check initial scroll position
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLinkClick = () => {
    setIsDropdownOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/products" className="nav-item">Products</Link>
        <div className="nav-dropdown" ref={dropdownRef}>
          <button 
            className="nav-item nav-dropdown-button" 
            onClick={toggleDropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            Application
            <span className="dropdown-arrow"></span>
          </button>
          {isDropdownOpen && (
            <div 
              className="dropdown-menu"
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to="/military" className="dropdown-item" onClick={handleLinkClick}>
                Military
              </Link>
              <Link to="/medical" className="dropdown-item" onClick={handleLinkClick}>
                Medical
              </Link>
              <Link to="/innovation" className="dropdown-item" onClick={handleLinkClick}>
                Innovation
              </Link>
            </div>
          )}
        </div>
        <Link to="/company" className="nav-item">Company</Link>
        <Link to="/matterport" className="nav-item">3D Tour</Link>
      </nav>
    </header>
  )
}

export default Header

