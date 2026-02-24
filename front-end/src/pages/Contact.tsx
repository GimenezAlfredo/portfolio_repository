const Contact = () => {
  return (
    <section className="contact">
      <h2 className="section-title">Contacto</h2>

      <div className="contact-buttons">
        <a
          href="mailto:tucorreo@gmail.com"
          className="btn"
        >
          Gmail
        </a>

        <a
          href="https://github.com/tuusuario"
          target="_blank"
          className="btn"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;