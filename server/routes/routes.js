const express=require('express');
const router=express.Router();
const signUpTemplateCopy=require('../models/formmodels');
router.post('/signup',(request,response)=>{
    const signedUpUser=new signUpTemplateCopy({
        name:request.body.name,
        number:request.body.number,
        email:request.body.email,
        profession:request.body.profession,
        password:request.body.password,
        cpassword:request.body.cpassword
})

signedUpUser.save()
.then(data=>{
    response.json(data)
})
.catch(error=>{
    response.json(error)
})
});
module.exports=router;