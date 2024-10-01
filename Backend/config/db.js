import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shahidameen:Allah.1ha@cluster0.mnpqr.mongodb.net/food-del').then(() => console.log("MongoDB connected")).catch((err) => console.log(err));
}
