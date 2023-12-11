import mongoose from "mongoose";
import schema from "./schema.js";

const reviews = mongoose.model("reviews", schema);

export default reviews;