import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app=express();
app.use(express.json);
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


const PORT=process.env.PORT || 8000;

app.listen(PORT, ()=> {
    console.log(`server is running on port${PORT}`);
})


