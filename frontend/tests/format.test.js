import { describe, test, expect } from 'vitest';
import { formatearPrecio, truncarTexto } from '../src/utils/format';

describe('formatearPrecio', () => {
  test('formatea un numero entero con simbolo y dos decimales', () => {
    expect(formatearPrecio(25)).toBe('$25.00');
  });

  test('redondea a dos decimales', () => {
    expect(formatearPrecio(9.999)).toBe('$10.00');
  });

  test('formatea el cero correctamente', () => {
    expect(formatearPrecio(0)).toBe('$0.00');
  });
});

describe('truncarTexto', () => {
  test('deja el texto igual si es mas corto que el limite', () => {
    expect(truncarTexto('Hola', 10)).toBe('Hola');
  });

  test('trunca y agrega "..." si supera el limite', () => {
    expect(truncarTexto('Camiseta de algodon', 8)).toBe('Camiseta...');
  });
});
