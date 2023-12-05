const express = require('express');
const BooksController = require('../controllers/BooksController');

const router = express.Router();

router.get('/', BooksController.findBooks);
router.post('/books', BooksController.createBook);
router.get('/books/:id', BooksController.findBook);
// router.get("/books/book-info/:id", BooksController.showBookInfo);
router.get("/books/edit/:id", BooksController.showPageUpdate);
router.post('/books/update/:id', BooksController.updateBook);
router.post('/books/delete/:id', BooksController.deleteBook);
router.get('/', BooksController.homeButton);
router.get('/books/allBooks', BooksController.searchButton);
router.get('/books/registerBook', BooksController.addButton);

module.exports = router;
