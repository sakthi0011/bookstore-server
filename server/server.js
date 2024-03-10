import express from "express";
import dotenv from "dotenv";
import dbcon from "./utils/db.js";
import routers from "./routes/routes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routers);
app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
dbcon();
