const mongoose = require('mongoose');


const userschema = new mongoose.Schema({
    name:{

        type:String,
        default:null,
        required:true

    },
    email:{

        type:String,
        default:null,
        required:'email is required',
        lowercase:true,
        unique:true,
        
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }


})



module.exports = mongoose.model('User', userschema); 