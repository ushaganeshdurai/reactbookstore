import express from "express";
const app = express.Router();
import { Book } from "../models/bookModel.js";

// Route to create a new book
app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { title, author, publishedYear, coverImageUrl } = req.body;

    if (!title || !author || !publishedYear || !coverImageUrl) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const newBook = new Book({
      title,
      author,
      publishedYear,
      coverImageUrl
    });

    const savedBook = await newBook.save();
    return res.status(201).send(savedBook);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});

// Route to get all books
app.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Route to get a single book by ID
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

// Route to update a book by ID
app.put("/:id", async (req, res) => {
  try {
    const { title, author, publishedYear, coverImageUrl } = req.body;

    if (!title || !author || !publishedYear || !coverImageUrl) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, {
      title,
      author,
      publishedYear,
      coverImageUrl
    }, { new: true });

    if (!updatedBook) {
      return res.status(404).send({ message: "Book not found" });
    }

    return res.status(200).send(updatedBook);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});

// Route to delete a book by ID
app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).send({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});

export default app;
