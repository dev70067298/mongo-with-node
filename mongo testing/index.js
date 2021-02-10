const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const user = require('./routes/users');


//connection
mongoose.connect('mongodb://localhost/Aoun',{useNewUrlParser: true },(err)=>{
    if(!err){
        console.log('connected.....');

    }
});
const con = mongoose.connection;
con.on('on',()=>{

    console.log('connected.....');

});
console.log(mongoose.connection.readyState);


//------------routes--------------

//route for users api
app.use('/user',user);


app.listen(4000,()=>{

    console.log('server starting');
});
