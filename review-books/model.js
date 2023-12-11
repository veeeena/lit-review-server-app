import mongoose from "mongoose";
import schema from "./schema.js";

const reviewBooks = mongoose.model("review-books", schema);

export default reviewBooks;