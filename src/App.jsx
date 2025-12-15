import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Military from './pages/Military'
import Medical from './pages/Medical'
import Products from './pages/Products'
import SoftShelters from './pages/SoftShelters'
import ExpandingShelters from './pages/ExpandingShelters'
import Accessories from './pages/Accessories'
import Innovation from './pages/Innovation'
import Company from './pages/Company'
import MatterportViewer from './pages/MatterportViewer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/soft-shelters" element={<SoftShelters />} />
        <Route path="/products/expanding-shelters" element={<ExpandingShelters />} />
        <Route path="/products/accessories" element={<Accessories />} />
        <Route path="/military" element={<Military />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/company" element={<Company />} />
        <Route path="/matterport" element={<MatterportViewer />} />
      </Routes>
    </Router>
  )
}

export default App
