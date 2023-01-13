import express from "express";

// Books
import booksController from "../controllers/booksController";
import booksMiddleware from "../middlewares/booksMiddleware";

// Users
import usersController from "../controllers/usersController";

// Auth
import authController from "../controllers/authController";

//Favorites
import favoritesController from "../controllers/favoritesController";

// Notifications
import notificationsController from "../controllers/notificationsController";

// Cards
import cardController from "../controllers/cardController";

// Genres
import genresController from "../controllers/genresController";

export const router = express.Router();

// Books
router.get("/books", booksController.getAllBooks);
router.post("/books", booksMiddleware.validateBody, booksController.addBook);
router.delete("/books/:idbooks", booksController.deleteBook);
router.put("/books/:bookId", booksController.updateBook);
router.get("/books/:bookId", booksController.getSingleBook);

// Users
router.get("/users", usersController.getAllUsers);
router.get("/users/:userId", usersController.getUserById);
router.put("/users/:userId", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

// Auth
router.post("/auth/register", authController.createUser);
router.post("/auth/login", authController.signUser);
router.post("/auth/logout", authController.signOut);

// Favorites
router.get("/favorites", favoritesController.getFavorites);
router.post("/favorites", favoritesController.setFavorites);
router.delete("/favorites", favoritesController.removeFavorite);

// Notifications
router.get("/notifications", notificationsController.getNotification);
router.post("/notifications", notificationsController.addNotification);
router.delete("/notifications", notificationsController.removeNotification);

// Cards
router.get("/cards", cardController.getCards);
router.put("/cards", cardController.updateCard);
router.post("/cards", cardController.addCard);
router.delete("/cards/:id", cardController.deleteCard);

// Genres
router.get("/genres", genresController.getAllGenres);
