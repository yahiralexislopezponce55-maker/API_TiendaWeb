'use strict'

const express = require('express');
const usuarioControllers = require('../controllers/usuarioControllers');

const apiRoutes = express.Router();

apiRoutes
    .get('/getUsuarios', async (req, res) => await usuarioControllers.findAll(req, res))
    .post('/insertUsuario', async (req, res) => await usuarioControllers.insertUsuario(req, res))
    .put('/updateUsuario', async (req, res) => await usuarioControllers.updateUsuario(req, res))
    .delete('/deleteUsuario/:id_usuario', async (req, res) => await usuarioControllers.deleteUsuario(req, res));

module.exports = apiRoutes;
