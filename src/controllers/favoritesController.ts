//@ts-nocheck
import { connection } from "../models/connection";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const getFavorites = async (req, res) => {
  const q =
    "SELECT books.* from books INNER JOIN favorites on books.id = favorites.bookId where favorites.userId = ?";

  const [rows] = await connection.query(q, [req.query.userId], (err, data) => {
    if (err) return res.status(500).json(err);
  });

  return res.status(200).json(rows);
};

const setFavorites = async (req, res) => {
  // const token = req.cookies.accessToken;
  // if (!token) return res.status(403).json("Token not valid");

  // jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
  //   if (err) return res.status(403).json("Token not valid");
  // });

  const q = "INSERT INTO favorites (userId, bookId) VALUES (?, ?)";

  const [rows] = await connection.query(
    q,
    [req.query.userId, req.body.bookId],
    (err, data) => {
      if (err) return res.status(500).json(err);
    }
  );

  return res.status(201).json(rows);
};

const removeFavorite = async (req, res) => {
  // const token = req.cookies.accessToken;
  // if (!token) return res.status(403).json("Token not valid");

  // jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
  //   if (err) return res.status(403).json("Token not valid");
  // });

  const q = "DELETE FROM favorites WHERE userId = ? AND bookId = ?";

  const [rows] = await connection.query(
    q,
    [req.query.userId, req.body.bookId],
    (err, data) => {
      if (err) res.status(500).json(err);
    }
  );

  return res.status(204).json("Deleted");
};

export default { getFavorites, setFavorites, removeFavorite };
