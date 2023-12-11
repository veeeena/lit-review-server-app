import * as dao from "./dao.js";

function ReviewRoutes(app) {
  const createReview = async (req, res) => {
    try {
      const book = await dao.createReview(req.body);
      res.json(book);  
    } catch (err) {
      res.status(404)
         .json({ message: `unable to create review` });
    }
   };
  const deleteReview = async (req, res) => {
    const status = await dao.deleteReview(req.params.reviewId);
    res.json(status);  
  };
  const findAllReviews = async (req, res) => { 
    const reviews = await dao.findAllReviews();
    res.json(reviews);
  };
  const findReviewById = async (req, res) => {
    const review = await dao.findReviewById(req.params.reviewId);
    res.json(review);
  };

  const findReviewsByReader = async (req, res) => {
    try {
      const reviews = await dao.findReviewsByReader(req.params.readerId)
      res.json(reviews);
     } catch (err) {
      res.status(404)
      .json({ message: `Unable to find reviews` });
     }
   }

   const findReviewsByBook = async (req, res) => {
    const reviews = await dao.findReviewsByBook(req.params.bookId)
    res.json(reviews);
   }
   
   const findReviewsByReaderAndBook = async (req, res) => {
    const { readerId, bookId } = req.params
    const reviews = await dao.findReviewsByReaderAndBook(readerId, bookId)
    res.json(reviews);
   }
   
  const updateReview = async (req, res) => {
    const { reviewId } = req.params;
    const status = await dao.updateReview(reviewId, req.body);
    res.json(status);
  };

  const getReviewWithReviewBook = async (req, res) => {
    const { reviewId } = req.params;
    const result = await dao.getReviewsWithReviewBook(reviewId);
    res.json(result);
  }

  app.post("/api/reviews", createReview);
  app.get("/api/reviews", findAllReviews);
  app.get("/api/reviews/:reviewId", findReviewById);
  app.get("/api/reviews/reviewbook/:reviewId", getReviewWithReviewBook)
  app.get("/api/reviews/reader/:readerId", findReviewsByReader);
  app.get("/api/reviews/reader/:readerId/book/:bookId", findReviewsByReaderAndBook);
  app.get("/api/reviews/book/:bookId", findReviewsByBook);
  app.put("/api/reviews/:reviewId", updateReview);
  app.delete("/api/reviews/:reviewId", deleteReview);
}
export default ReviewRoutes;