import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CarritoResumen from '../src/components/CarritoResumen';

const items = [
  { nombre: 'Camiseta', precio: 25, cantidad: 2 },
  { nombre: 'Cafe', precio: 8, cantidad: 1 },
];

describe('CarritoResumen', () => {
  test('muestra el nombre de cada producto', () => {
    render(<CarritoResumen items={items} />);
    expect(screen.getByText('Camiseta')).toBeInTheDocument();
    expect(screen.getByText('Cafe')).toBeInTheDocument();
  });

  test('muestra el total formateado de todos los items', () => {
    // 25*2 + 8*1 = 58
    render(<CarritoResumen items={items} />);
    expect(screen.getByTestId('total')).toHaveTextContent('$58.00');
  });

  test('muestra un mensaje cuando el carrito esta vacio', () => {
    render(<CarritoResumen items={[]} />);
    expect(screen.getByText('Tu carrito esta vacio')).toBeInTheDocument();
  });

  test('al hacer click en "Vaciar" llama a onVaciar', async () => {
    let llamado = false;
    const onVaciar = () => {
      llamado = true;
    };
    render(<CarritoResumen items={items} onVaciar={onVaciar} />);
    await userEvent.click(screen.getByRole('button', { name: /vaciar/i }));
    expect(llamado).toBe(true);
  });
});
