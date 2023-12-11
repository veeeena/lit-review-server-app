import model from "./model.js";
import { updateReviewBooks } from "../review-books/dao.js";

export const createBook = (book) => model.create(book);

export const findAllBooks = () => model.find();

export const findBooksByTitle = (bookTitle) => {
    const s = bookTitle.toString();
    const regex = new RegExp(s, 'i')
    return model.find({ title: { $regex : regex } })
};

export const findBooksByAuthor = (bookAuthor) =>
  model.find({ author: bookAuthor }
);

export const findBookById = (bookId) => model.findById(bookId);

export const updateBook = async (bookId, book) => {  
  const result = await model.updateOne({ _id: bookId }, { $set: book })
  await updateReviewBooks(bookId, book.title)
  return result;    
};

export const deleteBook = (bookId) => model.deleteOne({ _id: bookId });