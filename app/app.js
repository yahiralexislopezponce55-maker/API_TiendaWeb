'use strict'

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const categoriaRoutes = require('./routes/categoriaRoutes');
const productoRoutes = require('./routes/productoRoutes');
const metodoPagoRoutes = require('./routes/metodoPagoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const ventaRoutes = require('./routes/ventaRoutes');
const detalleVentaRoutes = require('./routes/detalleVentaRoutes');
const carritoRoutes = require('./routes/carritoRoutes');
const detalleCarritoRoutes = require('./routes/detalleCarritoRoutes');
const detalleMetodoPagoRoutes = require('./routes/detalleMetodoPagoRoutes');

app.use('/api/categoria', categoriaRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/metodoPago', metodoPagoRoutes);
app.use('/api/cliente', clienteRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/venta', ventaRoutes);
app.use('/api/detalleVenta', detalleVentaRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/detalleCarrito', detalleCarritoRoutes);
app.use('/api/detalleMetodoPago', detalleMetodoPagoRoutes);

module.exports = app;
