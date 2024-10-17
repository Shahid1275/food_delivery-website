import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name:{type:"string",required:true},
   email:{type:"string",required:true,unique:true},
   password:{type:"string",required:true},
   cartData:{type:"object",default:{}},
},{minimize:false})

const userModel = mongoose.models.User || mongoose.model("User",userSchema);

export default userModel;