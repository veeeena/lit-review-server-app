import mongoose from "mongoose";
const reviewBookSchema = new mongoose.Schema({
    title: {type: String, required: true },
    author: {type: String, required: true},
    bookKey: {type: String, required: true, unique: true}
}, { collection: "review-books" })

export default reviewBookSchema;