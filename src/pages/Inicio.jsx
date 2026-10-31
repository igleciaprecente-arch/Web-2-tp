import { Link } from 'react-router-dom';
import './Inicio.css';

const IconoEnvio = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
    <rect x="9" y="11" width="14" height="10" rx="2" />
    <circle cx="12" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
  </svg>
);

const IconoPago = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconoDevolucion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-4.5" />
  </svg>
);

const IconoSoporte = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const caracteristicas = [
  { Icono: IconoEnvio,     titulo: 'Envío rápido',  descripcion: 'Recibí tu pedido en 24 hs hábiles.' },
  { Icono: IconoPago,      titulo: 'Pago seguro',   descripcion: 'Todos tus datos protegidos con cifrado SSL.' },
  { Icono: IconoDevolucion, titulo: 'Devoluciones', descripcion: '30 días para devolver sin preguntas.' },
  { Icono: IconoSoporte,   titulo: 'Soporte 24/7',  descripcion: 'Atención disponible todos los días.' },
];

function Inicio() {
  return (
    <div className="inicio">
      <section className="inicio__hero">
        <h1 className="inicio__hero-titulo">Bienvenido a <span>MiTienda</span></h1>
        <p className="inicio__hero-subtitulo">
          Encontrá los mejores productos al mejor precio. Electrónica, ropa, joyería y mucho más.
        </p>
        <Link to="/productos" className="inicio__hero-btn">
          Ver productos
        </Link>
      </section>

      <section className="inicio__caracteristicas">
        <h2 className="inicio__seccion-titulo">¿Por qué elegirnos?</h2>
        <div className="inicio__grid">
          {caracteristicas.map(({ Icono, titulo, descripcion }) => (
            <div key={titulo} className="inicio__card">
              <div className="inicio__card-icono">
                <Icono />
              </div>
              <h3 className="inicio__card-titulo">{titulo}</h3>
              <p className="inicio__card-descripcion">{descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="inicio__cta">
        <h2>¿Listo para comprar?</h2>
        <p>Explorá nuestro catálogo completo y encontrá lo que buscás.</p>
        <Link to="/productos" className="inicio__hero-btn">
          Ir al catálogo
        </Link>
      </section>
    </div>
  );
}

export default Inicio;
