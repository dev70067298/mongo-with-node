const express = require('express');
const routes = express.Router();

const User = require('../models/user');

//signup api 
routes.post('/signup', async (req, res) => {


    try {
        const data = new User({
            name: req.params.name,
            email: req.params.email,
            password: req.params.password
        });

        const a1 = await data.save();
        res.send({

            "user": a1,
            "message": 'data inserted',
            "status": true

        });

    }
    catch (err) {
        res.send({

            "error": err,
            "message": 'data not inserted',
            "status": false

        });
    }



})

module.exports = routes;