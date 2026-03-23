import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">MiPortfolio</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="#cv">CV</a></li>
      </ul>
      <div className="navbar-action">
        <a href="#contact" className="btn-nav">Hablemos</a>
      </div>
    </nav>
  );
};

export default Navbar;
