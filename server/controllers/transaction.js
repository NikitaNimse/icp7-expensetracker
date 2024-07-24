import Transaction from "../models/Transaction.js";

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
export {posttransaction}