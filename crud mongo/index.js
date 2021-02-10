const express = require('express');
const mongoose = require('mongoose');
const url='mongodb://localhost/AlienDBex';
const alienRouter = require('./routers/aliens')

const app = express();
app.use(express.json());

mongoose.connect(url,{useNewUrlParser:true});

const con = mongoose.connection;

con.on('on',()=>{

    console.log('connected.....');

});

app.use('/aliens',alienRouter);


app.listen(9000,()=>{

    console.log('server started');
});
