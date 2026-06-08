const { aplicarImpuesto } = require('../src/logic/cart'); // O la ruta exacta a tu cart.js

describe('Pruebas del Bonus - Función aplicarImpuesto (TDD)', () => {
    
    test('Debería calcular correctamente el impuesto del 19% a un total de 100000', () => {
        const resultado = aplicarImpuesto(100000, 19);
        expect(resultado).toBe(119000); // 100k + 19k de impuesto
    });

    test('Debería retornar el mismo total si el porcentaje de impuesto es 0', () => {
        const resultado = aplicarImpuesto(50000, 0);
        expect(resultado).toBe(50000);
    });

    test('Debería manejar impuestos con decimales correctamente', () => {
        const resultado = aplicarImpuesto(100, 5.5);
        expect(resultado).toBe(105.5);
    });
});