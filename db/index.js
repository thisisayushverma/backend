import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";

const connectDB  = async ()=>{
    try{
        const conn=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB connected ${conn}`);
        console.log(`\nMongoDB connected ${conn.connection.host}`);
    }
    catch(error){
        console.log("MongoDB con error",error);
        process.exit(1)
    }
}


export default connectDB