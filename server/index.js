import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './models/User.js';
import Transaction from './models/Transaction.js';
dotenv.config();

const app =express()
app.use(express.json())
app.use(cors());

//connection to mongodb

const connectDB =async()=>{

    const conn =  await mongoose.connect(process.env.MONGODB_URL)
    if(conn){
      console.log("MongoDB connected 📦")
    }
    else{
      console.log("MongoDB  Not connected ❌")
    }
  }
  connectDB();

app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to Expense tracker API"
    })
})

app.post("/signup" , async(req,res)=>{
 const {fullname,email,password,dob} =req.body
 const user=new User({
  fullname:fullname,
  email:email,
  password:password,
  dob:dob
 })

 try{

 const savedUser =await user.save();
 res.json({
  success:true,
  message:"singup successfully ",
  data:savedUser
 
 })
 
}
catch(e){
  res.json({
    success: false,
    message: e.message,
    data: null,
  })
}

})


app.post("/login" ,(req,res)=>{

})

const PORT = process.env.PORT;
app.listen(PORT,()=>{{}
console.log(`Server is running on port ${PORT}`)
})
