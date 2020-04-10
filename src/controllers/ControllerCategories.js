const mongoose = require('mongoose');
require('../models/Category');
const Category = mongoose.model('categories');

module.exports = {
    create: (request, response) => {
        const authorization = request.headers.authorization;

        try {
          if (authorization) {
            const newCategory = {
                name: request.body.name,
                slug: request.body.slug
            }
            new Category(newCategory).save()
                .then(() => response.end())
                .catch((err) => response.json({error: err, message: 'Fail in register new category' }))
          }else{
            throw new Error("Not authorizate");
          }
        }catch(err){
            response.status(400).json({ error: err.message });
        }
    },

    list: (request, response) => {
        Category.find()
            .then((categories) => response.json(categories))
            .catch((err) => response.json({error: err, message: 'Fail to list categories' }))
    },

    update: (request, response) => {
        const authorization = request.headers.authorization;

        try {
          if (authorization) {
            Category.findOne({_id:request.params.id})
            .then((category) => {
                category.nome = request.body.name;
                category.slug = request.body.slug;

                category.save()
                    .then(() => response.end())
                    .catch((err) => response.json({error: err, message: 'Fail to update category' }))
            })
            .catch((err) => response.status(404).json({error: err, message: 'id not found' }))
          }else{
            throw new Error("Not authorizate");
          }
        }catch(err){
            response.status(400).json({ error: err.message });
        }
    },

    delete: (request, response) => {
        const authorization = request.headers.authorization;

        try {
          if (authorization) {
            Category.findOne({_id: request.params.id})
            .then((category) => {
                Category.deleteOne({_id: category._id})
                    .then(() => response.end())
                    .catch((err) => response.json({error: err, message: 'fail to delete' }))
            })
            .catch((err) => response.status(404).json({error: err, message: 'id not found' }))
          }else{
            throw new Error("Not authorizate");
          }
        }catch(err){
            response.status(400).json({ error: err.message });
        }        
    }

}