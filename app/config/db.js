'use strict'

const Sequelize = require('sequelize');
require('dotenv').config();

const sequelizeInstance = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        port: parseInt(process.env.DB_PORT || '5432'),
        dialect: process.env.DIALECT || 'postgres',
        dialectOptions: {
            connectTimeout: 100000,
        },
        logging: false,
        pool: {
            max: parseInt(process.env.POOL_MAX || '5'),
            min: parseInt(process.env.POOL_MIN || '0'),
            acquire: parseInt(process.env.POOL_ACQUIRE || '30000'),
            idle: parseInt(process.env.POOL_IDLE || '10000'),
        }
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelizeInstance = sequelizeInstance;

db.Categorias = require('../models/categoriaModels')(sequelizeInstance);
db.Productos = require('../models/productoModels')(sequelizeInstance);
db.MetodosPago = require('../models/metodoPagoModels')(sequelizeInstance);
db.Clientes = require('../models/clienteModels')(sequelizeInstance);
db.Usuarios = require('../models/usuarioModels')(sequelizeInstance);
db.Ventas = require('../models/ventaModels')(sequelizeInstance);
db.DetalleVentas = require('../models/detalleVentaModels')(sequelizeInstance);
db.Carritos = require('../models/carritoModels')(sequelizeInstance);
db.DetalleCarritos = require('../models/detalleCarritoModels')(sequelizeInstance);
db.DetalleMetodosPago = require('../models/detalleMetodoPagoModels')(sequelizeInstance);

// Relaciones del diagrama de base de datos
db.Categorias.hasMany(db.Productos, { foreignKey: 'id_categoria' });
db.Productos.belongsTo(db.Categorias, { foreignKey: 'id_categoria' });
db.Clientes.hasMany(db.Usuarios, { foreignKey: 'id_cliente' });
db.Usuarios.belongsTo(db.Clientes, { foreignKey: 'id_cliente' });
db.Clientes.hasMany(db.Ventas, { foreignKey: 'id_cliente' });
db.Ventas.belongsTo(db.Clientes, { foreignKey: 'id_cliente' });
db.Ventas.hasMany(db.DetalleVentas, { foreignKey: 'id_venta' });
db.DetalleVentas.belongsTo(db.Ventas, { foreignKey: 'id_venta' });
db.Productos.hasMany(db.DetalleVentas, { foreignKey: 'id_producto' });
db.DetalleVentas.belongsTo(db.Productos, { foreignKey: 'id_producto' });
db.Clientes.hasMany(db.Carritos, { foreignKey: 'id_cliente' });
db.Carritos.belongsTo(db.Clientes, { foreignKey: 'id_cliente' });
db.Carritos.hasMany(db.DetalleCarritos, { foreignKey: 'id_carrito' });
db.DetalleCarritos.belongsTo(db.Carritos, { foreignKey: 'id_carrito' });
db.Productos.hasMany(db.DetalleCarritos, { foreignKey: 'id_producto' });
db.DetalleCarritos.belongsTo(db.Productos, { foreignKey: 'id_producto' });
db.Ventas.hasMany(db.DetalleMetodosPago, { foreignKey: 'id_venta' });
db.DetalleMetodosPago.belongsTo(db.Ventas, { foreignKey: 'id_venta' });
db.MetodosPago.hasMany(db.DetalleMetodosPago, { foreignKey: 'id_metodo_pago' });
db.DetalleMetodosPago.belongsTo(db.MetodosPago, { foreignKey: 'id_metodo_pago' });

module.exports = db;
