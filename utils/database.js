import mongoose from "mongoose";
let isConnect = false;
export const connectToDB=async ()=>{
    mongoose.set('strictQuery',true);
    if(isConnect)
    {
        console.log("already dbconnected")
        return;

    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"share comment",
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        isConnect = true;
        console.log("dbconnected");
    } catch (error) {
        console.log(error);
    }
}