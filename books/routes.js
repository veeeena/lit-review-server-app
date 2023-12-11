import * as dao from "./dao.js";

function BookRoutes(app) {
  const createBook = async (req, res) => {
    try {
      const book = await dao.createBook(req.body);
      res.json(book);  
    } catch (err) {
      res.status(404)
         .json({ message: `unable to create book` });
    }
   };
  const deleteBook = async (req, res) => {
    const status = await dao.deleteBook(req.params.bookId);
    res.json(status);  
  };
  const findAllBooks = async (req, res) => { 
    const books = await dao.findAllBooks();
    res.json(books);
  };
  const findBookById = async (req, res) => {
    const book = await dao.findBookById(req.params.bookId);
    res.json(book);
   };
   const findBooksByTitle = async (req, res) => {
    const t = req.params.title
    const transformTitle = t.replace(/[^A-Z0-9]+/ig, " ")
    const books = await dao.findBooksByTitle(transformTitle)
    res.json(books);
   }
   const findBooksByAuthor = async (req, res) => {
    const books = await dao.findBooksByAuthor(req.params.author)
    res.json(books);
   }
  const updateBook = async (req, res) => {
    const { bookId } = req.params;
    const status = await dao.updateBook(bookId, req.body);
    res.json(status);
  };
  app.post("/api/books", createBook);
  app.get("/api/books", findAllBooks);
  app.get("/api/books/:bookId", findBookById);
  app.get("/api/books/title/:title", findBooksByTitle);
  app.get("/api/books/author/:author", findBooksByAuthor);
  app.put("/api/books/:bookId", updateBook);
  app.delete("/api/books/:bookId", deleteBook);
}
export default BookRoutes;