import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`/n mogodb connected: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error in connecting to DB",error);
        process.exit(1);
    }
}

export default connectDB;