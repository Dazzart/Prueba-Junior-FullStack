// =========================================================================
//  API DEL CARRITO (Express)
//  Implementa las rutas para que pasen los tests de tests/api.test.js
//  IMPORTANTE: debes exportar la app (module.exports = app) para los tests.
//  Puedes (y debes) reutilizar las funciones de src/logic/cart.js
// =========================================================================

const express = require('express');
// const { calcularTotal, aplicarCupon, filtrarPorCategoria } = require('../logic/cart');

const app = express();
app.use(express.json());

// Catalogo de productos de ejemplo (puedes usarlo tal cual)
const PRODUCTOS = [
  { nombre: 'Camiseta', precio: 25, categoria: 'ropa' },
  { nombre: 'Pantalon', precio: 40, categoria: 'ropa' },
  { nombre: 'Manzana', precio: 1, categoria: 'comida' },
  { nombre: 'Cafe', precio: 8, categoria: 'comida' },
  { nombre: 'Teclado', precio: 60, categoria: 'tecnologia' },
];

// TODO: GET /api/productos -> devuelve el catalogo completo

// TODO: GET /api/productos/:categoria -> devuelve solo los de esa categoria

// TODO: POST /api/carrito/total -> recibe { items, cupon? } y devuelve { total }
//       Debe responder 400 si no se envian items.


//Traemos el catalogo completo con la ruta /api/productos, se devuelve un json con el array de productos y un status 200 
app.get ('/api/productos', (req, res) => {
  return res.status(200).json(PRODUCTOS);
});


//Filtro por categorias endpoint 
app.get ('/api/productos/:categoria', (req, res) => {
  const categoria = req.params;
//Filtro categoria fija 
  const productosFiltrados = filtrarPorCategoria(PRODUCTOS, categoria);
  return res.status(200).json(productosFiltrados);
});


// post total del carrito recibe item y cupon para tirar el total
app.post('/api/carrito/total', (req, res) => {
  const { items, cupon } = req.body;

  //validacion o error (item en array)
  if (!items || !Array.isArray (items)) {
    return res.status(400).json({ error: 'Items son requeridos y deben ser un array' });
  }


  // 1 total de base sumando subtotales de los items
  const totalBase = calcularTotal(items);

  // 2 aplicar cupon si hay
  const totalFinal = aplicarCupon(totalBase, cupon);

  //responder 200 con el objeto que espera el test
  return res.status(200).json({ total: totalFinal });
});


// Solo arranca el servidor si se ejecuta directamente (no en los tests)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`API escuchando en http://localhost:${PORT}`));
}

module.exports = app;
