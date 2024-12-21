import express from "express"
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors"
app.use(cors())
import userRoute from "./routes/userRoute.js";

app.use(express.json());
mongoose.connect(process.env.URI).then(()=>{
    console.log("connected successfully")
    app.listen(process.env.PORT ||3006,(err)=>{
        if(err) console.log(err);
        console.log("running at",process.env.PORT || 3006);
    })
}).catch((error)=>{
    console.log("error",error);
});
app.use(userRoute);



