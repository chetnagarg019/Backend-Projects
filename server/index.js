import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import mongoose, { connect } from 'mongoose';
import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
import User from "./models/user.js";


dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json()); // ye ek middleware hai jo re.body ko json format me convert krta h


app.get("/", (req, res) => {
    res.send("Server is running hello");
});

// app.post("/notes",async (req,res) => {

//     const data = req.body;
//     await User.create({
//         title : data.title,
//         description : data.description
//     })

//     res.status(201).json({
//         message : "Note created"
//     })
    
// })

//craete by post method
app.post("/notes", async (req, res) => {
    try {
        const { title, description } = req.body;

        await User.create({ title, description });

        res.status(201).json({ message: "Note created" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

//all show by [get mehtod]
app.get("/notes", async (req,res) => {
    try{
        const notes = await User.find() //[] return
         res.status(200).json({ 
            message: "notes fetched sucessfully",
            data : notes
         });


    }catch(error){
         res.status(500).json({ 
            message: "Server error while fetching notes" });

    }
})

//delete method 
app.delete("/notes/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletedNote = await User.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error while deleting note"
        });
    }
});

//update[patch method]
app.patch("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updatedNote = await User.findOneAndUpdate(
      { _id: id },
      { description },
      { new: true } // updated data return karega
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      updatedNote
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});






app.listen(5000, () => {
    console.log("Server started on port 5000");
});

//production level pr jb backend ko steup krte h to 
//folder ke andr src name ka folder create krte hai uske andr app.js file
//app.js file ke andr server ko create krte h 
//root folder ke andr index.js file bhar bnate hai or uske andr server ko start krte h
