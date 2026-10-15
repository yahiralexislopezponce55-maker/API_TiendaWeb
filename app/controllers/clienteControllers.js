'use strict'

const db = require('../config/db');
const Clientes = db.Clientes;

// Traer todos los registros
async function findAll(req, res){
    Clientes.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar
async function insertCliente(req, res){
    const clienteInsert = req.body;
    Clientes.create({
        nombre: clienteInsert.nombre,
        apellido: clienteInsert.apellido,
        correo: clienteInsert.correo,
        telefono: clienteInsert.telefono,
        direccion: clienteInsert.direccion
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar
async function updateCliente(req, res){
    const clienteUpdate = req.body;
    Clientes.update(clienteUpdate, {
        where: { id_cliente: clienteUpdate.id_cliente }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Cliente actualizado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar el registro con ID=${clienteUpdate.id_cliente}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al actualizar el registro"
        });
    });
}

// Eliminar
async function deleteCliente(req, res){
    const id_cliente = req.params.id_cliente;
    Clientes.destroy({
        where: { id_cliente: id_cliente }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Cliente eliminado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni eliminar el registro con ID=${id_cliente}`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Sucedió un error al eliminar el registro"
        });
    });
}

module.exports = {
    findAll,
    insertCliente,
    updateCliente,
    deleteCliente
};
