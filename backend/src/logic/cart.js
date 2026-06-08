// =========================================================================
//  LOGICA DEL CARRITO
//  Implementa cada funcion para que pasen los tests de tests/cart.test.js
//  Ejecuta `npm test` para ver el estado de los tests.
//  NO modifiques los tests. NO cambies los nombres ni las firmas exportadas.
// =========================================================================

function crearItem(nombre, precio, cantidad, categoria = 'general') {
  // TODO: valida los datos y devuelve un objeto { nombre, precio, cantidad, categoria }
  
  //validación de nombre
  if (!nombre || nombre.trim === '') {
  throw new Error('Nombre obligatorio');
}
//segun el test el precio no es negativo 
if (precio < 0) {
  throw new Error('Precio negativo');
}

//la cantidad es al menos 1 o da error tambien
if (cantidad < 1) {
  throw new Error('Cantidad debe ser al menos 1');
}

return { nombre, precio, cantidad, categoria };
}



function calcularSubtotalItem(item) {
  // TODO: devuelve precio * cantidad
  return item.precio * item.cantidad;
}

function calcularTotal(items) {
  // TODO: suma el subtotal de todos los items del array
  if (!items || items.length === 0) return 0;
  return items.reduce((total, item) => total + calcularSubtotalItem(item), 0);
}

function aplicarCupon(total, codigo) {
  // TODO: aplica el descuento segun el codigo de cupon
  if (!codigo) return total; // sin codigo no hay descuento
  switch (codigoClean) {
    case 'DESCUENTO10':
      return total * 0.9; // 10% de descuento
    case 'DESCUENTO20':
      return total * 0.8; // 20% de descuento
    default:
      return total; // sin descuento
  }
}
 
function filtrarPorCategoria(items, categoria) {
  // TODO: devuelve solo los items que pertenecen a la categoria
  if (!categoria) return []; // sin categoria devuelve todo
  return items.filter(item => item.categoria === categoria);
}

function agruparPorCategoria(items) {
  if (!items || items.length === 0) return {};
  
  return items.reduce((acumulado, item) => {
    const cat = item.categoria;
    if (!acumulado[cat]) {
      acumulado[cat] = [];
    }
    acumulado[cat].push(item);
    return acumulado;
  }, {});
}


function productoMasCaro(items) {
  // TODO: devuelve el item con mayor precio (o null si el array esta vacio)
if (!items || items.length === 0) return null;

//se compara precio uno a uno para sacar el mayor objeto completo
return items.reduce((max, item) => (item.precio > max.precio ? item : max), items[0]);
}

function ordenarPorPrecio(items, orden = 'asc') {
  // TODO: devuelve una NUEVA lista ordenada por precio sin mutar la original
  if (!items) return [];
  const copiaItems = [...items];

  return copiaItems.sort((a, b) => {
    return orden === 'asc' ? a.precio - b.precio : b.precio - a.precio;
  });
}

function generarResumen(items) {
  // TODO: devuelve un string con una linea por item
  if (!items || items.length === 0) 
    return 'Carrito vacio';
}

return items.map(item => `${item.nombre} x${item.cantidad} - $${calcularSubtotalItem(item)}`).join('\n');

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
