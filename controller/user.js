const UserModel = require('../models/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registration = async (req,res)=> {

    const obj = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }
    console.log(req.body+" "+obj+" "+"DATA")
    const hashedPassword = await bcrypt.hash(obj.password, 10)//for hashing
    obj.password = hashedPassword//save the password in hashing form
    const newUser = await UserModel.User.create(obj)//from body
    res.send('done')

    console.log(newUser)   //print the result on console screen 
}

//Login Function
const Login = async(req, res)=> {
    const email = req.body.email;
    const password = req.body.password;
    try{
             const alreadyExist = await UserModel.User.findOne({email:email})
             if (alreadyExist == null){
             return res.status(401).send("Can't find the user")}
             console.log(req.body)
             console.log(await bcrypt.compare(password,alreadyExist.password));
        if(await bcrypt.compare(password,alreadyExist.password)){
         var token = jwt.sign({_id:alreadyExist._id},"rs");
            res.json("success " + token)
        }
        else{
          res.json("Invalid User")
        }
     } catch (error) {
         return res.sendStatus(500).send(
             {
                 message:error
             }
         )
         
     }
}


module.exports = {
    registration : registration,
    Login : Login
}