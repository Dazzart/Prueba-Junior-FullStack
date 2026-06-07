const request = require('supertest');
const app = require('../src/api/server');

describe('GET /api/productos', () => {
  test('responde 200 y un array de productos', async () => {
    const res = await request(app).get('/api/productos');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('cada producto tiene nombre, precio y categoria', async () => {
    const res = await request(app).get('/api/productos');
    const producto = res.body[0];
    expect(producto).toHaveProperty('nombre');
    expect(producto).toHaveProperty('precio');
    expect(producto).toHaveProperty('categoria');
  });
});

describe('GET /api/productos/:categoria', () => {
  test('devuelve solo los productos de esa categoria', async () => {
    const res = await request(app).get('/api/productos/ropa');
    expect(res.status).toBe(200);
    expect(res.body.every((p) => p.categoria === 'ropa')).toBe(true);
  });
});

describe('POST /api/carrito/total', () => {
  test('calcula el total de los items enviados', async () => {
    const res = await request(app)
      .post('/api/carrito/total')
      .send({
        items: [
          { precio: 10, cantidad: 2 },
          { precio: 5, cantidad: 1 },
        ],
      });
    expect(res.status).toBe(200);
    expect(res.body.total).toBe(25);
  });

  test('aplica el cupon si se envia', async () => {
    const res = await request(app)
      .post('/api/carrito/total')
      .send({
        items: [{ precio: 100, cantidad: 1 }],
        cupon: 'DESC10',
      });
    expect(res.status).toBe(200);
    expect(res.body.total).toBe(90);
  });

  test('responde 400 si no se envian items', async () => {
    const res = await request(app).post('/api/carrito/total').send({});
    expect(res.status).toBe(400);
  });
});
