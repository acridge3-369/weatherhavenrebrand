import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/products" className="nav-item">Products</Link>
        <Link to="/military" className="nav-item">Military</Link>
        <button className="nav-item">Medical</button>
        <button className="nav-item">Innovation</button>
        <Link to="/company" className="nav-item">Company</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
    </header>
  )
}

export default Header

