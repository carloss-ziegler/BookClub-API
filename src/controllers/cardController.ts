//@ts-nocheck
import { connection } from "../models/connection";

const getCards = async (req, res) => {
  const q = "SELECT * FROM cards WHERE cardUserId = ?";

  const [rows] = await connection.query(q, [req.query.userId], (err, data) => {
    if (err) return res.status(500).json(err);
  });

  return res.status(200).json(rows);
};

const addCard = async (req, res) => {
  const q =
    "INSERT INTO cards (cardName, cardNumber, expiryDate, cvv, cardUserId) VALUES (?, ?, ?, ?, ?)";

  const [rows] = await connection.query(
    q,
    [
      req.body.cardName,
      req.body.cardNumber,
      req.body.expiryDate,
      req.body.cvv,
      req.query.userId,
    ],
    (err, data) => {
      if (err) return res.status(500).json(err);
    }
  );

  return res.status(201).json(rows);
};

const updateCard = async (req, res) => {
  const q =
    "UPDATE cards SET cardName = ?, cardNumber = ?, expiryDate = ?, cvv = ? WHERE id = ?";

  const [rows] = await connection.query(
    q,
    [
      req.body.cardName,
      req.body.cardNumber,
      req.body.expiryDate,
      req.body.cvv,
      req.query.id,
    ],
    (err, data) => {
      if (err) return res.status(500).json(err);
    }
  );

  return res.status(204).json(rows);
};

const deleteCard = async (req, res) => {
  const q = "DELETE FROM cards WHERE id = ?";

  const [rows] = await connection.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
  });

  return res.status(204).json();
};

export default { getCards, addCard, updateCard, deleteCard };
