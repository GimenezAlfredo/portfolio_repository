import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contac.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus("sending");

    // Variables de Entorno de Vite (aseguradas)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Faltan variables de entorno para EmailJS");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
          setTimeout(() => setStatus("idle"), 5000); // Reset status after 5s
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title" style={{ marginBottom: "40px" }}>Contacto</h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name">Nombre</label>
            <input type="text" id="user_name" name="user_name" placeholder="Tu nombre" required />
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" placeholder="tu@correo.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" placeholder="¿En qué te puedo ayudar?" rows={5} required />
          </div>

          <button type="submit" className="submit-btn" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {status === "success" && (
            <p style={{ color: "#4caf50", textAlign: "center", marginTop: "10px", fontFamily: "Inter" }}>
              Mensaje enviado correctamente.
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#f44336", textAlign: "center", marginTop: "10px", fontFamily: "Inter" }}>
              Hubo un error al intentar enviar el mensaje. Inténtalo de nuevo.
            </p>
          )}
        </form>

        <div className="contact-socials">
          <p>O encuéntrame en:</p>
          <div className="social-links">
            <a href="mailto:alfredogimenez431@gmail.com" className="social-btn">Gmail</a>
            <a href="https://github.com/GimenezAlfredo" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;