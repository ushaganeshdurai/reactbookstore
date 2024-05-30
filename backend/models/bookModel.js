import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  coverImageUrl: { type: String, required: true } // Ensure this field is included
});

export const Book = mongoose.model('Book', bookSchema);
