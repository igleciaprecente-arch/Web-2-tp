const BASE_URL = 'https://fakestoreapi.com';

export async function obtenerProductos() {
  const respuesta = await fetch(`${BASE_URL}/products`);
  if (!respuesta.ok) {
    throw new Error(`Error al obtener productos: ${respuesta.status} ${respuesta.statusText}`);
  }
  return respuesta.json();
}

export async function obtenerProductoPorId(id) {
  const respuesta = await fetch(`${BASE_URL}/products/${id}`);
  if (!respuesta.ok) {
    throw new Error(`Error al obtener el producto ${id}: ${respuesta.status} ${respuesta.statusText}`);
  }
  return respuesta.json();
}

export async function obtenerCategorias() {
  const respuesta = await fetch(`${BASE_URL}/products/categories`);
  if (!respuesta.ok) {
    throw new Error(`Error al obtener categorías: ${respuesta.status} ${respuesta.statusText}`);
  }
  return respuesta.json();
}

export async function obtenerProductosPorCategoria(categoria) {
  const respuesta = await fetch(`${BASE_URL}/products/category/${encodeURIComponent(categoria)}`);
  if (!respuesta.ok) {
    throw new Error(`Error al obtener la categoría "${categoria}": ${respuesta.status} ${respuesta.statusText}`);
  }
  return respuesta.json();
}
