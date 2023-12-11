import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    title: {type: String, required: true },
    author: String,
    year: Date,
    synopsis: String,
}, { collection: "books" })

export default bookSchema;