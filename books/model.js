

import mongoose from "mongoose";
import schema from "./schema.js";

const books = mongoose.model("books", schema);

export default books;