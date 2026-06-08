# Prueba Tecnica - Junior Full Stack 🛒

Bienvenido/a. Esta prueba simula una pequeña parte de una tienda online (un **carrito de compras**). El repositorio que recibes tiene **todos los tests en rojo**: tu trabajo es hacer que pasen a **verde** implementando el codigo que falta.

Trabajamos con un enfoque **TDD (Test Driven Development)**: los tests ya describen el comportamiento esperado. Tu mision es escribir la implementacion hasta que cada test pase, sin tocar los tests.

---

## ⏱️ Tiempo

Tienes **24 horas** desde que recibes el repositorio. No esperamos que dediques las 24 horas completas; es un reto pensado para resolverse en unas **3-5 horas**. El plazo amplio es para que lo organices con tranquilidad.

---

## 🧰 Stack

- **Backend:** Node.js + Express, tests con Jest + Supertest.
- **Frontend:** React, tests con Vitest + Testing Library.

Necesitas tener instalado **Node.js 18 o superior**.

---

## 📁 Estructura

```
prueba-junior-fullstack/
├── backend/
│   ├── src/
│   │   ├── logic/cart.js        <- IMPLEMENTAR (logica del carrito)
│   │   └── api/server.js        <- IMPLEMENTAR (rutas de la API)
│   └── tests/                   <- NO MODIFICAR
│       ├── cart.test.js
│       └── api.test.js
└── frontend/
    ├── src/
    │   ├── utils/format.js              <- IMPLEMENTAR
    │   └── components/CarritoResumen.jsx <- IMPLEMENTAR
    └── tests/                            <- NO MODIFICAR
        ├── format.test.js
        └── CarritoResumen.test.jsx
```

Los archivos a implementar tienen comentarios `// TODO` que te guian.

---

## ▶️ Como ejecutar

### Backend
```bash
cd backend
npm install
npm test          # corre los tests (empiezan en rojo)
npm run test:watch  # opcional: re-ejecuta al guardar
npm start         # levanta la API en http://localhost:3000
```

### Frontend
```bash
cd frontend
npm install
npm test          # corre los tests (empiezan en rojo)
npm run test:watch  # opcional
npm run dev       # opcional: levanta la app en el navegador
```

---

## ✅ Que tienes que hacer

1. Lee los tests: **ellos son la especificacion**.
2. Implementa el codigo en los archivos marcados con `// TODO`.
3. Haz que **los 40 tests pasen en verde** (31 backend + 9 frontend).
4. Haz commits pequenos y descriptivos a medida que avanzas (queremos ver tu proceso).

### Reglas
- ❌ **No** modifiques los archivos dentro de las carpetas `tests/`.
- ❌ **No** cambies los nombres ni las firmas de las funciones/componentes exportados.
- ✅ Puedes anadir funciones auxiliares si lo necesitas.
- ✅ Reutiliza tu propio codigo (p. ej. la API puede usar la logica de `cart.js`).

---

## ⭐ Bonus (opcional, suma puntos)

Esto es lo que de verdad demuestra que entiendes TDD: **anade tu** una funcionalidad nueva siguiendo el ciclo *test primero → codigo despues*.

Elige UNA de estas:

- **Backend:** una funcion `aplicarImpuesto(total, porcentaje)` en `cart.js`. Primero escribe sus tests en un archivo nuevo `backend/tests/extra.test.js`, luego impleméntala.
- **Frontend:** un boton "Eliminar" por cada producto que dispare un `onEliminar(index)`. Primero el test, luego el codigo.

En el README final cuentanos brevemente que decidiste hacer y por que.

---

## 📦 Entregable

Un **repositorio Git** (sube a GitHub/GitLab y comparte el enlace, o envia un `.zip` con la carpeta `.git` incluida) que cumpla:

- Todos los tests en verde (`npm test` en `backend/` y en `frontend/`).
- Historial de commits que refleje tu avance.
- Un breve apartado al final de este README (o un `NOTAS.md`) contando: decisiones que tomaste, que harias distinto con mas tiempo, y el bonus si lo hiciste.

---

## 🧪 Que evaluamos

| Area | Que miramos |
|------|-------------|
| **Funcionalidad** | Que los tests pasen sin trampas |
| **Logica** | Uso correcto de arrays, ciclos y condicionales |
| **Limpieza** | Codigo legible, nombres claros, sin duplicacion innecesaria |
| **Git** | Commits ordenados y con sentido |
| **Comunicacion** | Tus notas finales |

No buscamos la solucion "perfecta": buscamos ver como piensas y como escribes codigo. ¡Mucho exito! 🚀




## Notas de Desarrollo

### Decisiones que tomé
* **Respetar la estructura:** El repositorio ya venía con la lógica armada, así que me acoplé a lo que había y programé mi función ahí sin dañar el flujo del carrito tampoco cambie ningun nombre de las funciones como lo decia el requerimiendo.
* **Bases de testing:** Respetar y Leer los test para entender que requerimientos se estan pidiendo para que el test pase en verde tuve que arreglar unos errores que iba cometiendo con la sintaxis y para armar las pruebas de la función nueva, usé las bases que traía de mi programa de formación.

### ¿Qué haría distinto con más tiempo?
* **Aprender más TypeScript:** Como apenas lo estoy empezando a usar y a estudiar, con más tiempo migraría el proyecto para asegurar los datos desde el principio y evitar errores de tipado.
* **Automatizar las pruebas:** Dejar configurado que los tests corran solos cada vez que se suba código a GitHub.
* **Validaciones estrictas con Zod:** Implementar esquemas (*schemas*) de Zod para validar la estructura de los datos del carrito, asegurando que los precios y las cantidades sean del tipo correcto antes de hacer cualquier cálculo.

### Bonus Realizado: TDD en el Backend
Hice la función `aplicarImpuesto(total, porcentaje)` en `cart.js` intentando seguir el ciclo de pruebas:
1. **Primero el test:** Creé el archivo `tests/extra.test.js` con los casos de prueba (impuesto normal, en cero y decimales). Al correrlo falló porque la función no existía en el carrito .
2. **Luego el código:** Escribí la lógica de la función, la exporté y logré que la suite pasara con los **34 tests en verde**.

