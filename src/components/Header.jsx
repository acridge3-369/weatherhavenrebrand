import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/products" className="nav-item">Products</Link>
        <Link to="/military" className="nav-item">Military</Link>
        <Link to="/medical" className="nav-item">Medical</Link>
        <Link to="/innovation" className="nav-item">Innovation</Link>
        <Link to="/company" className="nav-item">Company</Link>
      </nav>
    </header>
  )
}

export default Header

