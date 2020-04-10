const mongoose = require('mongoose');
require('../models/User');
const User = mongoose.model('users');

module.exports = {
    create: (request, response) => {
        const authorization = request.headers.authorization;

        try {
          if (authorization) {
            const newUser = {
                name: request.body.name,
                email: request.body.email,
                password: request.body.password
            }
            new User(newUser).save()
                .then(() => response.end())
                .catch((err) => response.json({error: err, message: 'Fail in register new user' }))
          }else{
            throw new Error("Not authorizate");
          }
        }catch(err){
            response.status(400).json({ error: err.message });
        }
    },

    list: (request, response) => {
        const authorization = request.headers.authorization;

        try {
          if (authorization) {
            User.find()
            .then((users) => response.json(users))
            .catch((err) => response.json({error: err, message: 'Fail to list users' }))
          }else{
            throw new Error("Not authorizate");
          }
        }catch(err){
            response.status(400).json({ error: err.message });
        }
    },

    update: (request, response) => {
        const authorization = request.headers.authorization;

        try {
          if (authorization) {
            User.findOne({_id:request.params.id})
            .then((user) => {
                user.name = request.body.name;
                user.email = request.body.email;
                user.password = request.body.password;

                user.save()
                    .then(() => response.end())
                    .catch((err) => response.json({error: err, message: 'Fail to update user' }))
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
            User.findOne({_id: request.params.id})
            .then((user) => {
                User.deleteOne({_id: user._id})
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