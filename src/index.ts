// @ts-nocheck
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./routes/router";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

app.use(express.json());
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    origin: ["http://localhost:3000", "https://book-club-api.onrender.com"],
  })
);
app.use(cookieParser());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`conectado na port ${PORT}`);
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../BookClub-Mobile/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/uploads", upload.single("file"), (req, res) => {
  const file = req.file;

  req.statusCode(200).json(file.filename);
});

app.use(router);
