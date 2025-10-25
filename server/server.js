import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./configs/db.js";
import { adminLogin } from "./controller/adminController.js";

const app = express();

await connectDB();

// MiddleWare 
app.use(cors())

app.use(express.json());

app.get('/home',(req,res) => {
    res.send("This is the home page")
})

app.post("/login" , adminLogin);

const PORT = process.env.PORT || 3000;

app.listen(PORT,() =>{
    console.log(`The server is listening at http://localhost:${PORT}`)
})

export default app;