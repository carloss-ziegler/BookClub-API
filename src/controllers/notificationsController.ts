//@ts-nocheck
import { Request, Response } from "express";
import { connection } from "../models/connection";

const getNotification = async (req: Request, res: Response) => {
  const q = "SELECT * FROM notifications WHERE notificationsUserId = ?";

  const [rows] = await connection.query(q, [req.query.userId], (err, data) => {
    if (err) return res.status(500).json(err);
  });

  return res.status(200).json(rows);
};

const addNotification = async (req: Request, res: Response) => {
  const q = "INSERT INTO notifications (notificationsUserId) VALUES (?)";

  const [rows] = await connection.query(q, [req.query.userId], (err, data) => {
    if (err) return res.status(500).json(err);
  });

  return res.status(201).json(rows);
};

const removeNotification = async (req: Request, res: Response) => {
  const q = "DELETE FROM notifications WHERE notificationsUserId = ?";

  const [rows] = await connection.query(q, [req.query.userId], (err, data) => {
    if (err) return res.status(500).json(err);
  });

  return res.status(204).json("Notificação desativada");
};

export default { getNotification, addNotification, removeNotification };
