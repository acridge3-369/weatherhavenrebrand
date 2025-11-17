import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <button className="nav-item">Products</button>
        <Link to="/military" className="nav-item">Military</Link>
        <button className="nav-item">Medical</button>
        <button className="nav-item">Innovation</button>
      </nav>
    </header>
  )
}

export default Header

