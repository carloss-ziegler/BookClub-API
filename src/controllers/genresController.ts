import { connection } from "../models/connection";
import { Request, Response } from "express";

const getAllGenres = async (_req: Request, res: Response) => {
  const q = "SELECT * FROM genres";

  const [rows] = await connection.query(q);

  return res.status(200).json(rows);
};

export default { getAllGenres };
