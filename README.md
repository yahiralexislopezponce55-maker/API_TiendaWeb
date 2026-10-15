# TiendaWeb - API Negocios Web

Proyecto backend basado en la estructura de `ICBFinal-main`, adaptado al diagrama de la tienda y a PostgreSQL.

## Tablas / módulos
- Categorias
- Productos
- Metodos_Pago
- Detalle_Metodo_Pago
- Clientes
- Usuarios
- Ventas
- Detalle_Ventas
- Carrito
- Detalle_Carrito

Cada módulo incluye **Model, Controller y Route** con operaciones CRUD similares al proyecto ICB.

## 1. Crear la base de datos
En PostgreSQL/pgAdmin cree una base de datos llamada `tienda_web` y ejecute:

`database/schema.sql`

## 2. Configurar variables
Copie `.env.example` como `.env` y cambie usuario/contraseña de PostgreSQL.

## 3. Instalar dependencias
```bash
npm install
```

## 4. Ejecutar
```bash
npm run dev
```

Servidor por defecto: `http://localhost:3300`

## Ejemplo de rutas
- `GET /api/producto/getProductos`
- `POST /api/producto/insertProducto`
- `PUT /api/producto/updateProducto`
- `DELETE /api/producto/deleteProducto/:id_producto`

La misma estructura se repite para categoria, metodoPago, cliente, usuario, venta, detalleVenta, carrito, detalleCarrito y detalleMetodoPago.
