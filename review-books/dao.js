import model from "./model.js";

export const createReviewBook = (reviewBook) => model.create(reviewBook);

export const findAllReviewBooks = () => model.find();

export const findReviewBooksByBookKey = (key) =>
  model.find({ bookKey: key }
);

export const updateReviewBooks = async (key, newTitle) => {
  await model.updateMany(
    { bookKey: key },
    { $set: { title : newTitle } }
  );
}

export const findReviewBookById = (reviewBookId) => model.findById(reviewBookId);

export const updateReview = (reviewBookId, reviewBook) =>
  model.updateOne({ _id: reviewBookId }, { $set: reviewBook }
);

export const deleteReviewBook = (reviewBookId) => model.deleteOne({ _id: reviewBookId });