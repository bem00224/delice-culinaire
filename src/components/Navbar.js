import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className='navbar-container'>
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" className="logo" loading="lazy"/>
        </Link>
        <nav className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <Link to="/mes-recettes" className="btn desktop-only">Mes recettes</Link>
          <Link to="/mes-recettes" className="btn mobile-only">Carnet de Recettes</Link>

          {/* Liens visibles seulement en mobile */}
          <ul className="mobile-only-links">
            <li><Link to="/rapides">Rapides</Link></li>
            <li><Link to="/entrees">Entrées</Link></li>
            <li><Link to="/plats">Plats</Link></li>
            <li><Link to="/desserts">Desserts</Link></li>
            <li><Link to="/aperitifs">Apéritifs</Link></li>
          </ul>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  )
}
