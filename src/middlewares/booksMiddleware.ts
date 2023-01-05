import { Request, Response, NextFunction } from "express";

const validateBody = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  if (
    body.title === undefined ||
    body.author === undefined ||
    body.stars === undefined ||
    body.thumbnail === undefined
  ) {
    return res.status(400).json({ erro: "All fields are required" });
  }

  if (
    body.title === "" ||
    body.author === "" ||
    body.stars === "" ||
    body.thumbnail === ""
  ) {
    return res.status(400).json({ erro: "Preencha todos os campos" });
  }

  next();
};

export default { validateBody };
