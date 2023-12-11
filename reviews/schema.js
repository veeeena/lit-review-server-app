import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    readerId: {type: String, required: true },
    reviewBookId: { type: String, required: true },
    title: {type: String, required: true },
    review: {type: String, required: true },
    recommended: {type: Boolean, required: true }
}, { collection: "reviews" })

export default reviewSchema;