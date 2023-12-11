import model from "./model.js";
import reviewBookModel from "../review-books/model.js"
import usersModel from "../users/model.js"

export const createReview = async (review) =>{
  const rev = await model.create(review)
  try {
    const revWithReviewBook = await rev
        .populate({
            path: 'reviewBookId',
            model: reviewBookModel,
            select: ['author', 'title', 'bookKey'],
        })
    return revWithReviewBook
        .populate({
            path: 'readerId',
            model: usersModel,
            select: ['username'], // Only retrieve the username
    })
    } catch (error) {
        console.error('Error creating review:', error);
        throw error;
    }
}

export const findAllReviews = () => model.find();

export const findReviewsByReader = async (id) => {
    try {
      return await model.find({readerId: id})
          .populate({
              path: 'reviewBookId',
              model: reviewBookModel,
              select: ['author', 'title', 'bookKey'], // retrieve the author, title, and bookkey field
          })
          .exec();
  } catch (error) {
      console.error('Error retrieving review books:', error);
      throw error;
  }
};

export const findReviewsByBook = async (id) => {
  try {
    return await model.find({reviewBookId: id})
        .populate({
            path: 'readerId',
            model: usersModel,
            select: ['username'], // Only retrieve the username
        })
        .exec();
    } catch (error) {
        console.error('Error retrieving reviews:', error);
        throw error;
    }
}

export const getReviewWithReviewBook = async (reviewId) => {
  try {
      return await model.findById({_id: reviewId})
          .populate({
              path: 'reviewBookId',
              model: reviewBookModel,
              select: ['author', 'title'], // Only retrieve the author and title field
          })
          .exec();
  } catch (error) {
      console.error('Error retrieving review books:', error);
      throw error;
  }
}

export const findReviewById = (reviewId) => {  
  model.findById(reviewId);
};

export const updateReview = (reviewId, review) =>
  model.updateOne({ _id: reviewId }, { $set: review }
);

export const deleteReview = (reviewId) => model.deleteOne({ _id: reviewId });

export const findReviewsByReaderAndBook = (rId, bId) =>
  model.find({readerId: rId, reviewBookId: bId});