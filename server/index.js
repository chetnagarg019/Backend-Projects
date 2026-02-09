import express from "express";

const app = express();
app.use(express.json()); // ye ek middleware hai jo re.body ko json format me convert krta h


app.get("/", (req, res) => {
    res.send("Server is running hello");
});

const notes = [];

app.post("/notes",(req,res) => {
   notes.push(req.body);

   res.status(201).json({
     message : "note created successfully"
   })
    
})

//server se data fetch krne ke liye 
app.get("/notes",(req,res) => {
    res.status(200).json({
        message : 'note fetched succesfully',
        notes : notes
    })
})

//delete krne ke liye note
app.delete("/notes/:index",(req,res) => {

    const index = req.params.index;
    // delete notes [index] => null rerurn
    notes.splice(index, 1)
    res.status(200).json({
        message : "note deleted successfully"
    })
})

// : colon likhne se hota kya hai ki express ko pta chlta jata hai ki ye chiz tumahri dynamic rhegi esliye colon ka use kiya jata hai 
//jo bhi note humene delet kiya hai uski jagah null likha hua aa jata hai 

//update krne ke liye 
app.patch("/notes/:index",(req,res) => {

    const index = req.params.index;
    const description = req.body.description

    notes[index].description = description;
    res.status(200).json({
        message : "note updated successfully"
    })
})




app.listen(5000, () => {
    console.log("Server started on port 3000");
});
//jo bhi data body ke andr aane vala hai usko express read nhi kr skta 
//line4 middleware express ke andr vo capcity deta hai jisse vo body ke andr aane vale data ko read kr ske

//production level pr jb backend ko steup krte h to 
//folder ke andr src name ka folder create krte hai uske andr app.js file
//app.js file ke andr server ko create krte h 
//root folder ke andr index.js file bhar bnate hai or uske andr server ko start krte h
