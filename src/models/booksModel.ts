import { BookProps } from "../types";
import { connection } from "./connection";

const getAllBooks = async () => {
  const [books] = await connection.execute("SELECT * FROM books");
  return books;
};

const getSingleBook = async (bookId: string) => {
  const [book] = await connection.query("SELECT * FROM books WHERE id = ?", [
    bookId,
  ]);
  return book;
};

const addBook = async (book: BookProps) => {
  const { title, author, stars, thumbnail } = book;

  const [createdBook] = await connection.execute(
    "INSERT INTO books(title, author, stars, thumbnail) VALUES (?, ?, ?, ?)",
    [title, author, stars, thumbnail]
  );

  return createdBook;
};

const deleteBook = async (bookId: string) => {
  const [deletedBook] = await connection.query(
    "DELETE FROM books WHERE bookid = ?",
    [bookId]
  );

  return deletedBook;
};

const updateBook = async (bookId: string, book: BookProps) => {
  const { title, author, stars, thumbnail } = book;

  const [updatedBook] = await connection.execute(
    "UPDATE books SET title = ?, author = ?, stars = ?, thumbnail = ? WHERE id = ?",
    [title, author, stars, thumbnail, bookId]
  );

  return updatedBook;
};

export default { getAllBooks, getSingleBook, addBook, deleteBook, updateBook };
