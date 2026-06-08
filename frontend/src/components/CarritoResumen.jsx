// =========================================================================
//  COMPONENTE CarritoResumen
//  Implementalo para que pasen los tests de tests/CarritoResumen.test.jsx
//
//  Props:
//    - items: array de { nombre, precio, cantidad }
//    - onVaciar: funcion que se llama al pulsar el boton "Vaciar carrito"
//
//  Requisitos:
//    - Si no hay items, muestra el texto "Tu carrito esta vacio"
//    - Muestra el nombre de cada producto
//    - Muestra el total en un elemento con data-testid="total", formateado ($XX.XX)
//    - Incluye un boton "Vaciar carrito" que dispare onVaciar al hacer click
//  Pista: reutiliza formatearPrecio de ../utils/format
// =========================================================================
import React from 'react'; 
import { formatearPrecio } from '../utils/format';

export default function CarritoResumen({ items = [], onVaciar }) {
  // TODO: implementar
  if (!items || items.length === 0) {
    return (
      // Requisito: Si no hay items, muestra el texto "Tu carrito esta vacio"
      <div>
        <p>Tu carrito esta vacio</p>
      </div>
    );
  }
  //Calcular el total multiplicando el precio por la cantidad de cada item y sumando el resultado
    const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    return (
      <div className="carrito-resumen">
        <h2>Resumen del Carrito</h2>
        {/* Requisito: Muestra el nombre de cada producto */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.nombre}
          </li>
        ))}
      </ul>
        {/* Requisito: Muestra el total en un elemento con data-testid="total", formateado ($XX.XX) */}
      <div>
        Total: <span data-testid="total">{formatearPrecio(total)}</span>
      </div>
        {/* Requisito: Incluye un boton "Vaciar carrito" que dispare onVaciar al hacer click */}
        {onVaciar && (
        <button onClick={onVaciar}>
          Vaciar carrito
        </button>
        )}
      </div>
    );
}
