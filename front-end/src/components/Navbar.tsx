import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home" onClick={closeMenu}>MiPortfolio</a>
      </div>

      <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Inicio</a></li>
        <li><a href="#about" onClick={closeMenu}>Sobre mí</a></li>
        <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
        <li><a href="#cv" onClick={closeMenu}>CV</a></li>
        <li className="mobile-only">
          <a href="#contact" className="btn-nav" onClick={closeMenu}>Hablemos</a>
        </li>
      </ul>

      <div className="navbar-action desktop-only">
        <a href="#contact" className="btn-nav">Hablemos</a>
      </div>
    </nav>
  );
};

export default Navbar;
