import * as dao from "./dao.js";

function ReviewBooksRoutes(app) {
  const createReviewBook = async (req, res) => {
    try {
      const book = await dao.createReviewBook(req.body);
      res.json(book);  
    } catch (err) {
      res.status(404)
         .json({ message: `Unable to create review-book` });
    }
   };
  const deleteReviewBook = async (req, res) => {
    const status = await dao.deleteReviewBook(req.params.reviewBookId);
    res.json(status);  
  };
  const findReviewBookById = async (req, res) => {
    const review = await dao.findReviewBookById(req.params.reviewBookId);
    res.json(review);
  };

  const findReviewBooksByBookKey = async (req, res) => {
    const reviews = await dao.findReviewBooksByBookKey(req.params.bookKey)
    res.json(reviews);
   }
   
  const updateReviewBook = async (req, res) => {
    const { reviewBookId } = req.params;
    const status = await dao.updateReviewBook(reviewBookId, req.body);
    res.json(status);
  };
  app.post("/api/reviewBooks", createReviewBook);
  app.get("/api/reviewBooks/:reviewBookId", findReviewBookById);
  app.get("/api/reviewBooks/key/:bookKey", findReviewBooksByBookKey);
  app.put("/api/reviewBooks/:reviewBookId", updateReviewBook);
  app.delete("/api/reviewBooks/:reviewId", deleteReviewBook);
}
export default ReviewBooksRoutes;