const mongoose = require('mongoose');
const express=require('express');
const app = express();
const dotenv=require('dotenv');
const cors=require('cors')
app.use(express.json());
const routeUrls=require('./routes/routes')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS);
app.use(cors())
app.use('/api',routeUrls)
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
const User=new mongoose.model("User",formtemplate);
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
app.post("/register",(req,res)=>{
  const{name,email,number,profession,password,cpassword}=(req.body)
  const existinguser=User.findOne({email:email})
    if(existinguser){
      res.send({message:"User already registered"})
    }
    else{
      const user=new User({
        name,
        email,
        number,
        profession,
        password,
        cpassword
      })
      user.save()
    }
  })
  