const mongoose=require('mongoose');
const formtemplate=mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    number:{
    type:Number,
    required:true
    },
    email:{
    type:String,
    required:true
    },
    profession:{
    type:String,
    required:true
    },
    password:{
    type:String,
    required:true
    },
    cpassword:{
    type:String,
    required:true
    }
})
module.exports=mongoose.model('form',formtemplate);