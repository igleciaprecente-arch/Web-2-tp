import { useEffect, useState } from 'react';
import { obtenerProductos, obtenerCategorias, obtenerProductosPorCategoria } from '../services/productoServicio';
import TarjetaProducto from '../components/TarjetaProducto';
import './Productos.css';

const CATEGORIAS_ES = {
  "electronics":        "Electrónica",
  "jewelery":           "Joyería",
  "men's clothing":     "Ropa hombre",
  "women's clothing":   "Ropa mujer",
};

function Productos() {
  const [productos, setProductos]         = useState([]);
  const [categorias, setCategorias]       = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState('todas');
  const [cargando, setCargando]           = useState(true);
  const [error, setError]                 = useState(null);

  useEffect(() => {
    obtenerCategorias()
      .then(setCategorias)
      .catch((err) => console.error('Error al cargar categorías:', err));
  }, []);

  useEffect(() => {
    setCargando(true);
    setError(null);

    const peticion =
      categoriaActiva === 'todas'
        ? obtenerProductos()
        : obtenerProductosPorCategoria(categoriaActiva);

    peticion
      .then(setProductos)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [categoriaActiva]);

  return (
    <section className="productos">
      <header className="productos__encabezado">
        <h1 className="productos__titulo">Productos</h1>
        <p className="productos__subtitulo">
          Catálogo completo — {productos.length} artículos
        </p>
      </header>

      <nav className="productos__filtros" aria-label="Filtrar por categoría">
        <button
          className={`filtro-btn ${categoriaActiva === 'todas' ? 'filtro-btn--activo' : ''}`}
          onClick={() => setCategoriaActiva('todas')}
          type="button"
        >
          Todos
        </button>
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`filtro-btn ${categoriaActiva === cat ? 'filtro-btn--activo' : ''}`}
            onClick={() => setCategoriaActiva(cat)}
            type="button"
          >
            {CATEGORIAS_ES[cat] ?? cat}
          </button>
        ))}
      </nav>

      {cargando && (
        <div className="productos__estado">
          <div className="spinner" aria-label="Cargando productos…" />
          <p>Cargando productos…</p>
        </div>
      )}

      {error && (
        <div className="productos__estado productos__estado--error" role="alert">
          <p>⚠️ {error}</p>
          <button type="button" onClick={() => setCategoriaActiva(categoriaActiva)}>
            Reintentar
          </button>
        </div>
      )}

      {!cargando && !error && (
        <div className="productos__grilla">
          {productos.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Productos;
