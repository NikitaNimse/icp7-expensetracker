import Transaction from "../models/Transaction.js";

import User from "../models/User.js";
const posttransaction = async(req,res)=>{
    const {title,amount,category,type,user} =req.body
    const transaction=new Transaction({
       title: title,
       amount: amount,
       category: category,
       type: type,
       user: user

       });

       try{
   
        const savedtransaction =await transaction.save();
        res.json({
         success:true,
         message:"transaction successfully ",
         data:savedtransaction
         })
        
       }
       catch(e){
         res.json({
           success: false,
           message: e.message,
           data: null,
         })
       }
}

const gettransaction = async (req,res)=>{

const {userId} = req.query;
const user =await User.findById(userId)
if(!user){
  return res.json({
    success:false,
    message:"user not found",
    data:null
  })
}

const transactions = await Transaction.find ({user: userId})
return res.json({
  success:true,
  message:"transaction fetched successfully",
  data:transactions 
})
}




export {posttransaction , gettransaction}