# Web-2-tp

Trabajo Práctico — Desarrollo Web 2  
Tienda online construida con React + Vite que consume APIs externas.

🌐 **Demo en vivo:** [https://igleciaprecente-arch.github.io/Web-2-tp/](https://igleciaprecente-arch.github.io/Web-2-tp/)

---

## Tecnologías utilizadas

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio — presentación de la tienda con cards de características |
| `/productos` | Catálogo — grilla de productos con filtros por categoría |
| `/contacto` | Contacto — formulario funcional conectado a Formspree |

---

## APIs utilizadas

### 🛒 FakeStore API — datos de productos

Se usa para obtener los productos que se muestran en el catálogo.

- **URL base:** `https://fakestoreapi.com`
- **Documentación:** https://fakestoreapi.com/docs

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/products` | Obtiene todos los productos |
| `GET` | `/products/:id` | Obtiene un producto por ID |
| `GET` | `/products/categories` | Lista todas las categorías |
| `GET` | `/products/category/:cat` | Filtra productos por categoría |

**Ejemplo de respuesta:**
```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack",
    "price": 109.95,
    "description": "Your perfect pack for everyday use...",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fAn66UrqL._AC_UX679_.jpg",
    "rating": { "rate": 3.9, "count": 120 }
  }
]
```

El servicio está encapsulado en `src/services/productoServicio.js`:

```js
export async function obtenerProductos() {
  const respuesta = await fetch('https://fakestoreapi.com/products');
  return respuesta.json();
}
```

---

### 📧 Formspree — envío de formulario de contacto

Se usa para recibir los mensajes del formulario de contacto por email, sin necesidad de backend propio.

- **Endpoint:** `https://formspree.io/f/mjyyawpl`
- **Documentación:** https://formspree.io/

**Campos enviados:**

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `name` | `string` | Nombre del remitente |
| `email` | `email` | Email del remitente |
| `message` | `string` | Texto del mensaje |

**Implementación en `src/pages/Contacto.jsx`:**

```js
const respuesta = await fetch('https://formspree.io/f/mjyyawpl', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    name: formulario.nombre,
    email: formulario.email,
    message: formulario.mensaje,
  }),
});
```

Al enviar el formulario, el mensaje llega directamente al email del administrador configurado en Formspree.

---

## Estructura del proyecto

```
src/
├── services/
│   └── productoServicio.js   # Capa de acceso a FakeStore API
├── components/
│   ├── TarjetaProducto.jsx   # Card individual de producto
│   └── TarjetaProducto.css
├── layout/
│   ├── Navegacion.jsx        # Navbar con React Router
│   └── Navegacion.css
├── pages/
│   ├── Inicio.jsx            # Página de inicio
│   ├── Productos.jsx         # Catálogo con filtros
│   └── Contacto.jsx          # Formulario con Formspree
└── App.jsx                   # Rutas principales
```

---

## Cómo correrlo localmente

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

---

## Autores

Trabajo Práctico de la materia **Desarrollo Web 2**
