import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { fakeData } from '../data/fakeData';
import { FaKitchenSet } from "react-icons/fa6";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen);
  let category = fakeData.Category;
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className='navbar-container'>
        <Link to="/" className="navbar-logo">
          <div className='navbar-logo-icon'>
            <FaKitchenSet className="logo-icon"/>
          </div>
          <h1 className="title-logo">Délices Culinaires</h1>
        </Link>
        <nav className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <Link to="/mes-recettes" className="btn desktop-only">Mes recettes</Link>
          <Link to="/mes-recettes" className="btn mobile-only" onClick={closeMenu}>Carnet de Recettes</Link>

          {/* Liens visibles seulement en mobile */}
          <ul className="mobile-only-links">
            {
              category.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/category/${encodeURIComponent(cat.slug)}`} onClick={closeMenu}>
                  {cat.slug}
                  </Link>
                </li>
              ) )
            }
          </ul>
        </nav>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="menu-toggle-icon" /> : <FaBars className="menu-toggle-icon"/>}
        </div>
      </div>
    </header>
  )
}
