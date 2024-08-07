import express from "express";
const app = express();
import cors from "cors";
import {} from 'dotenv/config'
const port = 5555;
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
app.use(express.json()); //middleware for parsing req body
//option 1: allow all origins with default of cors(*) 24:33
app.use(cors());
//option 2: custom origins;
//  app.use(cors({
//    origin:'https://reactbookstore-frontend.vercel.app/',
//    allowedHeaders:['Content-Type'],
//    methods:['GET','POST','PUT','DELETE']
//  }))

app.use(express.urlencoded());
app.get("/", (req, res) => {
  //general url
  console.log(req);
  return res.status(234);
});

app.use("/books", booksRoute);
//route to save a book

mongoose
  .connect(process.env.MONGOD_URL)
  .then(() => {
    console.log("connected to db");
    app.listen(port, () => {
      console.log(`Server running at ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
