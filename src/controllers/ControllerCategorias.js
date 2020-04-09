const mongoose = require('mongoose');
require('../models/Categoria');
const Categoria = mongoose.model('categorias');

module.exports = {
    create: (request, response) => {
        const newCategoria = {
            nome: request.body.nome,
            slug: request.body.slug
        }
        new Categoria(newCategoria).save()
            .then(() => response.end())
            .catch((err) => response.json({error: err, message: 'Fail in register new categoria' }))
    },

    list: (request, response) => {
        Categoria.find()
            .then((categorias) => response.json(categorias))
            .catch((err) => response.json({error: err, message: 'Fail to list categorias' }))
    },

    update: (request, response) => {

    },

    delete: (request, response) => {

    }

}