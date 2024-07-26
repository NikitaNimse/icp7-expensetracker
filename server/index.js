import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';
import {posttransaction , gettransaction} from './controllers/transaction.js';
import { postsignup , postlogin } from './controllers/user.js';

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

app.post("/signup" ,  postsignup)


app.post("/login" , postlogin)

app.post ("/transaction" , posttransaction)

app.get ("/transactions" , gettransaction)

const PORT = process.env.PORT;
app.listen(PORT,()=>{{}
console.log(`Server is running on port ${PORT}`)
})
