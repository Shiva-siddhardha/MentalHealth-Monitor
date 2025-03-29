import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const Connection = async () => {
    const URL = process.env.MONGO_URI;

    if (!URL) {
        console.error("❌ ERROR: MONGO_URI is undefined. Check your .env file.");
        return;
    }

    try {
        await mongoose.connect(URL); // ✅ Removed deprecated options
        console.log("✅ Database connected successfully!");
    } catch (error) {
        console.error("❌ Error while connecting with the database:", error.message);
    }
};

export default Connection;
