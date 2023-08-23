import mongoose from "mongoose";
let isConnect = false;
export const connectToDB=async ()=>{
    mongoose.set('strictQuery',true);
    if(isConnect)
    {
        
    }
}