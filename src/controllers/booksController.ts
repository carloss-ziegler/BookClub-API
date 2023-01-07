//@ts-nocheck
import { Request, Response } from "express";
import booksModel from "../models/booksModel";

const getAllBooks = async (_req: Request, res: Response) => {
  const books = await booksModel.getAllBooks();

  return res.status(200).json(books);
};

const getSingleBook = async (req: Request, res: Response) => {
  const book = await booksModel.getSingleBook(req.query);

  return res.status(200).json(book);
};

const addBook = async (req: Request, res: Response) => {
  const createdBook = await booksModel.addBook(req.body);
  return res.status(201).json(createdBook);
};

const deleteBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;

  await booksModel.deleteBook(bookId);
  return res.status(204).json();
};

const updateBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;

  await booksModel.updateBook(bookId, req.body);

  return res.status(204).json();
};

export default { getAllBooks, getSingleBook, addBook, deleteBook, updateBook };
