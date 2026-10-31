import { NavLink } from 'react-router-dom';
import './Navegacion.css';

function Navegacion() {
  return (
    <header className="nav">
      <div className="nav__marca">
        <span className="nav__logo">🛒</span>
        <span className="nav__nombre">MiTienda</span>
      </div>
      <nav className="nav__enlaces" aria-label="Navegación principal">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav__link nav__link--activo' : 'nav__link'}>
          Inicio
        </NavLink>
        <NavLink to="/productos" className={({ isActive }) => isActive ? 'nav__link nav__link--activo' : 'nav__link'}>
          Productos
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => isActive ? 'nav__link nav__link--activo' : 'nav__link'}>
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}

export default Navegacion;
