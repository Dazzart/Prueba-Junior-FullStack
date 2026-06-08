import React, { useState } from 'react'; 
import CarritoResumen from './components/CarritoResumen';

// Pantalla de demo para ver tu componente en el navegador (npm run dev).
// No se evalua en los tests; sirve para que pruebes visualmente.
const ITEMS_DEMO = [
  { nombre: 'Camiseta', precio: 25, cantidad: 2 },
  { nombre: 'Cafe', precio: 8, cantidad: 1 },
];

export default function App() {
  const [items, setItems] = useState(ITEMS_DEMO);
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 480, margin: '40px auto' }}>
      <h1>Mi carrito</h1>
      <CarritoResumen items={items} onVaciar={() => setItems([])} />
    </main>
  );
}