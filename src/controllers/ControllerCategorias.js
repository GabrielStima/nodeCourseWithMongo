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
        Categoria.findOne({_id:request.params.id})
            .then((categoria) => {
                categoria.nome = request.body.nome;
                categoria.slug = request.body.slug;

                categoria.save()
                    .then(() => response.end())
                    .catch((err) => response.json({error: err, message: 'Fail to update categoria' }))
            })
            .catch((err) => response.status(404).json({error: err, message: 'id not found' }))
    },

    delete: (request, response) => {
        Categoria.findOne({_id: request.params.id})
            .then((categoria) => {
                Categoria.deleteOne({_id: categoria._id})
                    .then(() => response.end())
                    .catch((err) => response.json({error: err, message: 'fail to delete' }))
            })
            .catch((err) => response.status(404).json({error: err, message: 'id not found' }))

        
    }

}