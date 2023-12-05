const express = require('express');
const UsersController = require('../controllers/UsersController');

const router = express.Router();

router.get('/', UsersController.pageHome);
router.get('/login', UsersController.pageLogin);
router.get('/books', UsersController.pageAllBooks);
router.get('/registerBook', UsersController.pageRegisterBook);
router.post('/users', UsersController.createUser);
router.get('/users/:id', UsersController.findUser);
router.put('/users/:id', UsersController.update);
router.delete('/users/:id', UsersController.deleteUser);

module.exports = router;
