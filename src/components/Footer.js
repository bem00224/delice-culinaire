import React from 'react'
import "../styles/footer.css"
import { FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer-text'>Créé avec <span className="heart">❤️</span> par Fatoumata Binta Diallo</p>
      <p className='footer-text'>© 2025 - Fatoumata Binta Diallo  </p>
      <p className='me-trouver'>Retrouvez-moi sur : </p>
      <div className='social-icons'>
          <a href='https://www.linkedin.com/in/fatoumata-binta-diallo-989051338' target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className='icon' />
          </a>
      </div>
    </footer>
  )
}