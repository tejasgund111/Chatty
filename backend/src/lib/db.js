import mongoose from "mongoose";

// Error resolved by these lines
import dns from "dns"
dns.setServers(["1.1.1.1"], ["8.8.8.8"]);

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected")
    }
    catch(error){
        console.log("DB Connection error ", error);
    }
}