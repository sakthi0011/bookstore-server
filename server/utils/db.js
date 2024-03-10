import mongoose from "mongoose";

const dbCon = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("moongoose connected sucessfully");
  } catch (error) {
    console.log(error);
  }
};
export default dbCon;
