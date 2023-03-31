import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Kenta2428:Kenta2428@cluster0.nv7m1eb.mongodb.net/appDataBase?retryWrites=true&w=majority"
    );
    console.log("Success: Connected to MongoDB");
  } catch (error) {
    console.log("Failure: Unconnected to MongoDB");
  }
};

export default connectDB;
