const {
  crearItem,
  calcularSubtotalItem,
  calcularTotal,
  aplicarCupon,
  filtrarPorCategoria,
  agruparPorCategoria,
  productoMasCaro,
  ordenarPorPrecio,
  generarResumen,
} = require('../src/logic/cart');

describe('crearItem', () => {
  test('crea un item con los datos correctos', () => {
    const item = crearItem('Camiseta', 25, 2, 'ropa');
    expect(item).toEqual({
      nombre: 'Camiseta',
      precio: 25,
      cantidad: 2,
      categoria: 'ropa',
    });
  });

  test('si no se pasa categoria, usa "general" por defecto', () => {
    const item = crearItem('Lapiz', 1.5, 3);
    expect(item.categoria).toBe('general');
  });

  test('lanza un error si el precio es negativo', () => {
    expect(() => crearItem('Malo', -5, 1)).toThrow('El precio no puede ser negativo');
  });

  test('lanza un error si la cantidad es menor a 1', () => {
    expect(() => crearItem('Malo', 5, 0)).toThrow('La cantidad debe ser al menos 1');
  });

  test('lanza un error si el nombre esta vacio', () => {
    expect(() => crearItem('', 5, 1)).toThrow('El nombre es obligatorio');
  });
});

describe('calcularSubtotalItem', () => {
  test('multiplica precio por cantidad', () => {
    expect(calcularSubtotalItem({ precio: 10, cantidad: 3 })).toBe(30);
  });

  test('funciona con decimales', () => {
    expect(calcularSubtotalItem({ precio: 2.5, cantidad: 4 })).toBe(10);
  });
});

describe('calcularTotal', () => {
  test('suma el subtotal de todos los items', () => {
    const items = [
      { precio: 10, cantidad: 2 }, // 20
      { precio: 5, cantidad: 3 },  // 15
      { precio: 1, cantidad: 1 },  // 1
    ];
    expect(calcularTotal(items)).toBe(36);
  });

  test('devuelve 0 si el carrito esta vacio', () => {
    expect(calcularTotal([])).toBe(0);
  });
});

describe('aplicarCupon', () => {
  test('DESC10 aplica 10% de descuento', () => {
    expect(aplicarCupon(100, 'DESC10')).toBe(90);
  });

  test('DESC20 aplica 20% de descuento', () => {
    expect(aplicarCupon(100, 'DESC20')).toBe(80);
  });

  test('MITAD aplica 50% de descuento', () => {
    expect(aplicarCupon(100, 'MITAD')).toBe(50);
  });

  test('un cupon no valido no cambia el total', () => {
    expect(aplicarCupon(100, 'NOEXISTE')).toBe(100);
  });

  test('el cupon es insensible a mayusculas/minusculas', () => {
    expect(aplicarCupon(100, 'desc10')).toBe(90);
  });
});

describe('filtrarPorCategoria', () => {
  const items = [
    { nombre: 'Camiseta', categoria: 'ropa' },
    { nombre: 'Pantalon', categoria: 'ropa' },
    { nombre: 'Manzana', categoria: 'comida' },
  ];

  test('devuelve solo los items de la categoria pedida', () => {
    const resultado = filtrarPorCategoria(items, 'ropa');
    expect(resultado).toHaveLength(2);
    expect(resultado.map((i) => i.nombre)).toEqual(['Camiseta', 'Pantalon']);
  });

  test('devuelve un array vacio si no hay coincidencias', () => {
    expect(filtrarPorCategoria(items, 'tecnologia')).toEqual([]);
  });
});

describe('agruparPorCategoria', () => {
  test('agrupa los items en un objeto por categoria', () => {
    const items = [
      { nombre: 'Camiseta', categoria: 'ropa' },
      { nombre: 'Manzana', categoria: 'comida' },
      { nombre: 'Pantalon', categoria: 'ropa' },
    ];
    expect(agruparPorCategoria(items)).toEqual({
      ropa: [
        { nombre: 'Camiseta', categoria: 'ropa' },
        { nombre: 'Pantalon', categoria: 'ropa' },
      ],
      comida: [{ nombre: 'Manzana', categoria: 'comida' }],
    });
  });

  test('devuelve un objeto vacio si no hay items', () => {
    expect(agruparPorCategoria([])).toEqual({});
  });
});

describe('productoMasCaro', () => {
  test('devuelve el item con mayor precio', () => {
    const items = [
      { nombre: 'Barato', precio: 5 },
      { nombre: 'Caro', precio: 99 },
      { nombre: 'Medio', precio: 50 },
    ];
    expect(productoMasCaro(items).nombre).toBe('Caro');
  });

  test('devuelve null si el carrito esta vacio', () => {
    expect(productoMasCaro([])).toBeNull();
  });
});

describe('ordenarPorPrecio', () => {
  const items = [
    { nombre: 'B', precio: 20 },
    { nombre: 'A', precio: 10 },
    { nombre: 'C', precio: 30 },
  ];

  test('ordena de menor a mayor por defecto', () => {
    expect(ordenarPorPrecio(items).map((i) => i.precio)).toEqual([10, 20, 30]);
  });

  test('ordena de mayor a menor con "desc"', () => {
    expect(ordenarPorPrecio(items, 'desc').map((i) => i.precio)).toEqual([30, 20, 10]);
  });

  test('no modifica el array original (es inmutable)', () => {
    const copia = [...items];
    ordenarPorPrecio(items);
    expect(items).toEqual(copia);
  });
});

describe('generarResumen', () => {
  test('genera una linea por item con su subtotal', () => {
    const items = [
      { nombre: 'Camiseta', precio: 25, cantidad: 2 },
      { nombre: 'Lapiz', precio: 1.5, cantidad: 4 },
    ];
    const resumen = generarResumen(items);
    expect(resumen).toBe('Camiseta x2 = $50\nLapiz x4 = $6');
  });

  test('devuelve "Carrito vacio" cuando no hay items', () => {
    expect(generarResumen([])).toBe('Carrito vacio');
  });
});
