import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import mongoose, { connect } from 'mongoose';
import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";


dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json()); // ye ek middleware hai jo re.body ko json format me convert krta h


app.get("/", (req, res) => {
    res.send("Server is running hello");
});




app.listen(5000, () => {
    console.log("Server started on port 5000");
});

//production level pr jb backend ko steup krte h to 
//folder ke andr src name ka folder create krte hai uske andr app.js file
//app.js file ke andr server ko create krte h 
//root folder ke andr index.js file bhar bnate hai or uske andr server ko start krte h
