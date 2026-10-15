'use strict'

const db = require('../config/db');
const Usuarios = db.Usuarios;

// Traer todos los registros
async function findAll(req, res){
    Usuarios.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    })
}

// Insertar
async function insertUsuario(req, res){
    const usuarioInsert = req.body;
    Usuarios.create({
        id_cliente: usuarioInsert.id_cliente,
        usuario: usuarioInsert.usuario,
        password: usuarioInsert.password,
        rol: usuarioInsert.rol
    })
    .then(data =>{
        res.status(200).send(data);
    })
    .catch(error =>{
        res.status(400).send(error);
    });
}

// Actualizar
async function updateUsuario(req, res){
    const usuarioUpdate = req.body;
    Usuarios.update(usuarioUpdate, {
        where: { id_usuario: usuarioUpdate.id_usuario }
    })
    .then(num =>{
        if(num[0] === 1){
            res.status(200).send({
                message: "Usuario actualizado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni actualizar el registro con ID=${usuarioUpdate.id_usuario}`
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
async function deleteUsuario(req, res){
    const id_usuario = req.params.id_usuario;
    Usuarios.destroy({
        where: { id_usuario: id_usuario }
    })
    .then(num =>{
        if(num === 1){
            res.status(200).send({
                message: "Usuario eliminado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se pudo encontrar ni eliminar el registro con ID=${id_usuario}`
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
    insertUsuario,
    updateUsuario,
    deleteUsuario
};
