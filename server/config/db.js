import mongoose from "mongoose";
//function to connect mongoDB

const connectDB= async ()=>{
    try {
        //connection string from .env file
     await mongoose.connect(process.env.Mongo_URL);
     console.log('MongoDB connected succesfully');
    } catch (error) {
        console.log("X connection failed");
        console.log(error.message);
        process.exit(1)
        
        
    }

};
export default connectDB;

//Ye ek library hai jo MongoDB se connect hone me help karti hai.
//Yaha tum ek async function bana rahi ho jiska naam hai connectDB.Async isliye kyunki MongoDB se connect hona ek time-taking process hai.
