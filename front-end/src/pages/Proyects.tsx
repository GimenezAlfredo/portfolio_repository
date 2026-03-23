import { useState } from "react";
import "../styles/Proyects.css";

import recolectaImg1 from "../assets/Recolecta-app_imag1.png";
import recolectaImg2 from "../assets/Recolecta-app_imag2.png";

import marquezImg1 from "../assets/MarquezComunicaciones-img1.jpeg";
import marquezImg2 from "../assets/MarquezComunicaciones-img2.jpeg";

import roundcubeImg1 from "../assets/Roundcube-img1.png";
import roundcubeImg2 from "../assets/Roundcube-img2.png";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
};

const projectsData: Project[] = [
  {
    title: "Re-Colecta App",
    description:
      "Sistema que ayuda e incentiva la economía circular, resolviendo el desperdicio de residuos reciclables. Participé en el desarrollo backend, seguridad, autenticación, APIs y estructura general del sistema.",
    technologies: ["JavaScript", "React", "Node.js", "MySQL"],
    images: [recolectaImg1, recolectaImg2],
  },
  {
    title: "Marquez Comunicaciones",
    description:
      "Sistema web para gestionar el flujo completo de reparaciones de equipos y el control de stock de repuestos. Incluye módulos de seguimiento, estados y gestión operativa del negocio.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    images: [marquezImg1, marquezImg2],
  },
  {
    title: "Roundcube",
    description:
      "Implementación y configuración de Roundcube como cliente webmail, integrando servicios de correo y validando el flujo de acceso y administración del entorno.",
    technologies: ["Linux", "Roundcube", "Apache", "MySQL", "PHP"],
    images: [roundcubeImg1, roundcubeImg2],
  },
];

type CarouselProps = {
  images: string[];
  title: string;
  onImageClick: (images: string[], index: number) => void;
};

const ProjectCarousel = ({ images, title, onImageClick }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="custom-carousel">
      {/* Indicadores tipo Bootstrap */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Imagen */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={images[currentIndex]}
            alt={`${title} imagen ${currentIndex + 1}`}
            className="carousel-image"
            onClick={() => onImageClick(images, currentIndex)}
          />
        </div>
      </div>

      {/* Flechas */}
      <button className="carousel-control prev" onClick={goToPrev} aria-label="Anterior">
        ❮
      </button>

      <button className="carousel-control next" onClick={goToNext} aria-label="Siguiente">
        ❯
      </button>
    </div>
  );
};

const Projects = () => {
  const [lightboxData, setLightboxData] = useState<{ images: string[], currentIndex: number } | null>(null);

  const goToPrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxData) return;
    setLightboxData({
      ...lightboxData,
      currentIndex: lightboxData.currentIndex === 0 ? lightboxData.images.length - 1 : lightboxData.currentIndex - 1
    });
  };

  const goToNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxData) return;
    setLightboxData({
      ...lightboxData,
      currentIndex: lightboxData.currentIndex === lightboxData.images.length - 1 ? 0 : lightboxData.currentIndex + 1
    });
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Proyectos</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <article className="project-card" key={index}>
            <ProjectCarousel images={project.images} title={project.title} onImageClick={(imgs, idx) => setLightboxData({ images: imgs, currentIndex: idx })} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxData && (
        <div className="lightbox-overlay" onClick={() => setLightboxData(null)}>
          <button className="lightbox-close" onClick={() => setLightboxData(null)}>✕</button>

          <button className="lightbox-nav prev" onClick={goToPrevLightbox} aria-label="Anterior en Lightbox">❮</button>

          <img
            src={lightboxData.images[lightboxData.currentIndex]}
            alt={`Proyecto ampliado ${lightboxData.currentIndex + 1}`}
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="lightbox-nav next" onClick={goToNextLightbox} aria-label="Siguiente en Lightbox">❯</button>
        </div>
      )}
    </section>
  );
};

export default Projects;