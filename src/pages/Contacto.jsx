import { useState } from 'react';
import './Contacto.css';

const IconoEmail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const IconoTelefono = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12a19.79 19.79 0 0 1-3-8.57A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconoDireccion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconoHorario = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const infoItems = [
  { Icono: IconoEmail,     titulo: 'Email',     texto: 'contacto@mitienda.com' },
  { Icono: IconoTelefono,  titulo: 'Teléfono',  texto: '+54 9 3874 73-6030' },
  { Icono: IconoDireccion, titulo: 'Dirección', texto: 'Av. Borelli, A4400 Salta' },
  { Icono: IconoHorario,   titulo: 'Horario',   texto: 'Lunes a viernes, 9:00 – 18:00' },
];

const ENDPOINT = 'https://formspree.io/f/mjyyawpl';

function Contacto() {
  const [formulario, setFormulario] = useState({ nombre: '', email: '', mensaje: '' });
  const [estado, setEstado] = useState('idle');

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setEstado('enviando');

    try {
      const respuesta = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formulario.nombre,
          email: formulario.email,
          message: formulario.mensaje,
        }),
      });

      if (respuesta.ok) {
        setEstado('ok');
        setFormulario({ nombre: '', email: '', mensaje: '' });
      } else {
        setEstado('error');
      }
    } catch {
      setEstado('error');
    }
  };

  return (
    <div className="contacto">
      <header className="contacto__encabezado">
        <h1 className="contacto__titulo">Contacto</h1>
        <p className="contacto__subtitulo">
          ¿Tenés alguna pregunta o consulta? Escribinos y te respondemos a la brevedad.
        </p>
      </header>

      <div className="contacto__contenido">

        <div className="contacto__info">
          {infoItems.map(({ Icono, titulo, texto }) => (
            <div key={titulo} className="contacto__info-item">
              <div className="contacto__info-icono-wrap">
                <Icono />
              </div>
              <div>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="contacto__formulario" onSubmit={manejarEnvio} noValidate>

          {estado === 'ok' && (
            <div className="contacto__mensaje contacto__mensaje--ok" role="alert">
              Mensaje enviado. Te respondemos pronto.
            </div>
          )}

          {estado === 'error' && (
            <div className="contacto__mensaje contacto__mensaje--error" role="alert">
              Ocurrió un error. Intentá de nuevo o escribinos directo al email.
            </div>
          )}

          <div className="campo">
            <label htmlFor="nombre" className="campo__etiqueta">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              className="campo__input"
              placeholder="Tu nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="email" className="campo__etiqueta">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="campo__input"
              placeholder="tu@email.com"
              value={formulario.email}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="mensaje" className="campo__etiqueta">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="campo__input campo__textarea"
              placeholder="Escribí tu consulta acá…"
              rows={5}
              value={formulario.mensaje}
              onChange={manejarCambio}
              required
            />
          </div>

          <button
            type="submit"
            className="contacto__btn"
            disabled={estado === 'enviando'}
          >
            {estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje'}
          </button>

        </form>
      </div>

      <div className="contacto__mapa">
        <h2 className="contacto__mapa-titulo">Ubicación</h2>
        <div className="contacto__mapa-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14045.17403975263!2d-58.76865664096516!3d-34.58271902301878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1ses!2sar!4v1793489006545!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Ubicación en el mapa"
          />
        </div>
      </div>

    </div>
  );
}

export default Contacto;
