import express from "express";
import cors from "cors";
import {connectDB} from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoutes.js";


//app config 
const app = express();
const port = 4000;

//middlewares
app.use(express.json());
app.use(cors());


//db connection
connectDB();

//api end points
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use('/api/user',userRouter);


//api routes
app.get("/",(req,res)=>{
res.send("App is working good");
})

//listen
app.listen(port,()=>{
    console.log(`App is running on http://localhost:${port}`);
})


//mongodb+srv://shahidameen:<db_password>@cluster0.mnpqr.mongodb.net/?