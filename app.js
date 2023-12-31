import express from 'express'
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import BookRoutes from "./books/routes.js";
import ReviewRoutes from "./reviews/routes.js";
import ReviewBookRoutes from "./review-books/routes.js";
import session from "express-session";
import "dotenv/config";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/lit-review';
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
  })
); 
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));
app.get('/', (req, res) => {res.send('welcome to the lit review api!')})
app.use(express.json());
UserRoutes(app);
BookRoutes(app);
ReviewBookRoutes(app);
ReviewRoutes(app);
app.listen(process.env.PORT || 4000);