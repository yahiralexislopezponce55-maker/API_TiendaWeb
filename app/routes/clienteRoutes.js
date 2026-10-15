'use strict'

const express = require('express');
const clienteControllers = require('../controllers/clienteControllers');

const apiRoutes = express.Router();

apiRoutes
    .get('/getClientes', async (req, res) => await clienteControllers.findAll(req, res))
    .post('/insertCliente', async (req, res) => await clienteControllers.insertCliente(req, res))
    .put('/updateCliente', async (req, res) => await clienteControllers.updateCliente(req, res))
    .delete('/deleteCliente/:id_cliente', async (req, res) => await clienteControllers.deleteCliente(req, res));

module.exports = apiRoutes;
