import './TarjetaProducto.css';

function TarjetaProducto({ producto }) {
  const { title, price, description, image, category, rating } = producto;

  return (
    <article className="tarjeta-producto">
      <div className="tarjeta-producto__imagen-wrap">
        <img
          src={image}
          alt={title}
          className="tarjeta-producto__imagen"
          loading="lazy"
        />
      </div>

      <div className="tarjeta-producto__cuerpo">
        <span className="tarjeta-producto__categoria">{category}</span>
        <h3 className="tarjeta-producto__titulo">{title}</h3>
        <p className="tarjeta-producto__descripcion">{description}</p>
      </div>

      <div className="tarjeta-producto__pie">
        <div className="tarjeta-producto__rating">
          <span className="tarjeta-producto__estrellas" aria-hidden="true">
            {'★'.repeat(Math.round(rating?.rate ?? 0))}
            {'☆'.repeat(5 - Math.round(rating?.rate ?? 0))}
          </span>
          <span className="tarjeta-producto__resenas">
            ({rating?.count ?? 0} reseñas)
          </span>
        </div>
        <span className="tarjeta-producto__precio">${price?.toFixed(2)}</span>
      </div>

      <button className="tarjeta-producto__btn" type="button">
        Agregar al carrito
      </button>
    </article>
  );
}

export default TarjetaProducto;
