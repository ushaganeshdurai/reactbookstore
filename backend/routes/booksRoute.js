import express from "express";
const app = express.Router();
import { Book } from "../models/bookModel.js";

app.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.publishedYear || !req.body.author) {
      return res.status(400).send({ message: "send all field" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//route to get all books

app.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route to update a book

app.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.publishedYear || !req.body.author) {
      return res.status(400).send({ message: "send all" });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "not found" });
    }
    return res.status(200).send({ message: "updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//route to delete a book
app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "not found" });
    }
    return res.status(200).send({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "internal error" });
  }
});

export default app;