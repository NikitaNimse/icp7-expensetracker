import { Schema ,model } from "mongoose";

//credit:money comes in
//debit:money goes out

const transactionSchema =new Schema({
 amount: {
    type:Number,
    required:true
 },
 category: {
    type:String,
    default:"others"
   
 },
 type: {
    type:String,
    enum:["debit" , "credit"]
 },
 user: {
    type:Schema.Types,objectId,
    ref:"User",
 }
});

const User =model("Transaction", userSchema);

export default Transaction; 
