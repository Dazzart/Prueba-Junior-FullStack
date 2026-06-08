// =========================================================================
//  UTILIDADES DE FORMATO
//  Implementa estas funciones para que pasen tests/format.test.js
// =========================================================================

export function formatearPrecio(numero) {
  // TODO: devuelve el numero como "$25.00" (simbolo $ y SIEMPRE dos decimales)
return `$${Number(numero).toFixed(2)}`;
}

export function truncarTexto(texto, limite) {
  if (!texto) return '';
  // TODO: si el texto supera el limite, cortalo y agrega "..."
  if (!texto) return '';
  if (texto.length > limite) {
    return texto.slice(0, limite) + '...';
  }
  return texto;
}
