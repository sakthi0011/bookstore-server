import express from "express";
import {
  createBook,
  getBooks,
  getBook,
  UpdateBook,
  Deletebook,
} from "../controller/BookController.js";
const routers = express.Router();
routers.post("/create", createBook);
routers.get("/getbooks", getBooks);
routers.get("/getbook/:id", getBook);
routers.put("/updatebook/:id", UpdateBook);

routers.delete("/deletebook/:id", Deletebook);

export default routers;
