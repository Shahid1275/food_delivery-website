import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';


//login user

 const loginUser = async (req, res) => {
    const { email, password } = req.body;
}
// register user
 const registerUser = async (req, res) => {
    const { name,email, password } = req.body;
   try{
    const exists = await userModel.findOne({ email });
    if (exists) {
        return res.json({success:false, message:"user already exists"})
    }
    if(!validator.isEmail(email)){
        return res.json({success:false, message:"please enter valid email address"})
   }
   if(password.length<8){
    return res.json({success:false, message:"password must be at least 8 characters long"})
   }
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password,salt);
   
   const newUser = new userModel ({
     name:name,
     email:email,
     password:hashedPassword
   })
   await newUser.save();
   }
   catch(error){
     
   }
}

export {registerUser, loginUser}