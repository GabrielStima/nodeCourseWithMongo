const mongoose = require('mongoose');
require('../models/Postagem');
const Postagem = mongoose.model('postagens');

module.exports = {
    create: (request, response) => {
        const newPostagem = {
            titulo: request.body.titulo,
            slug: request.body.slug,
            descricao: request.body.descricao,
            conteudo: request.body.conteudo,
            categoria: request.body.categoria,
        }

        new Postagem(newPostagem).save()
            .then(() => response.end())
            .catch((err) => response.status(400).json({error: err, message: 'Fail in register new postagem' }))
    },

    list: (request, response) => {
        Postagem.find().populate('categoria')
            .then((postagens) => response.json(postagens))
            .catch((err) => response.status(404).json({error: err, message: 'postagens not found' }))
    },

    update: (request, response) => {
        Postagem.findOne({_id: request.params.id})
            .then((postagem) => {
                postagem.titulo = request.body.titulo;
                postagem.slug = request.body.slug;
                postagem.descricao = request.body.descricao;
                postagem.conteudo = request.body.conteudo;
                postagem.categoria = request.body.categoria;

                postagem.save()
                    .then(() => response.end())
                    .catch((err) => response.status(400).json({error: err, message: 'fail to update postagem' }))
            })
            .catch((err) => response.status(404).json({error: err, message: 'postagem not found' }))
    },

    delete: (request, response) => {
        Postagem.findOne({_id: request.params.id})
            .then((postagem) => {
                Postagem.deleteOne({_id: postagem._id})
                    .then(() => response.end())
                    .catch((err) => response.status(400).json({error: err, message: 'fail to delete postagem' }))
            })
            .catch((err) => response.status(404).json({error: err, message: 'postagem not found' }))
    }

}