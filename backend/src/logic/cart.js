// =========================================================================
//  LOGICA DEL CARRITO
//  Implementa cada funcion para que pasen los tests de tests/cart.test.js
//  Ejecuta `npm test` para ver el estado de los tests.
//  NO modifiques los tests. NO cambies los nombres ni las firmas exportadas.
// =========================================================================

function crearItem(nombre, precio, cantidad, categoria = 'general') {
  // TODO: valida los datos y devuelve un objeto { nombre, precio, cantidad, categoria }
  throw new Error('No implementado');
}

function calcularSubtotalItem(item) {
  // TODO: devuelve precio * cantidad
  throw new Error('No implementado');
}

function calcularTotal(items) {
  // TODO: suma el subtotal de todos los items del array
  throw new Error('No implementado');
}

function aplicarCupon(total, codigo) {
  // TODO: aplica el descuento segun el codigo de cupon
  throw new Error('No implementado');
}

function filtrarPorCategoria(items, categoria) {
  // TODO: devuelve solo los items que pertenecen a la categoria
  throw new Error('No implementado');
}

function agruparPorCategoria(items) {
  // TODO: devuelve un objeto { categoria: [items...] }
  throw new Error('No implementado');
}

function productoMasCaro(items) {
  // TODO: devuelve el item con mayor precio (o null si el array esta vacio)
  throw new Error('No implementado');
}

function ordenarPorPrecio(items, orden = 'asc') {
  // TODO: devuelve una NUEVA lista ordenada por precio sin mutar la original
  throw new Error('No implementado');
}

function generarResumen(items) {
  // TODO: devuelve un string con una linea por item
  throw new Error('No implementado');
}

module.exports = {
  crearItem,
  calcularSubtotalItem,
  calcularTotal,
  aplicarCupon,
  filtrarPorCategoria,
  agruparPorCategoria,
  productoMasCaro,
  ordenarPorPrecio,
  generarResumen,
};
