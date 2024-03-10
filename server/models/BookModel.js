import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
 title:String, author:String, publishYear:Number
  },
  { timestamps: true }
);

const bookModel = mongoose.model("book", bookSchema);

export default bookModel;
