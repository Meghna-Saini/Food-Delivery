//to connect with database 
import mongoose from "mongoose";

export const connectDB = async () => {
   await mongoose.connect('mongodb+srv://meghnaug23_db_user:eKvzEF2klFuAB70o@cluster0.o6ot2s7.mongodb.net/Food-del').then(()=>console.log("DB connected"));
}