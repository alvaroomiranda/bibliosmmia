const User = require('../models/User');
const Book = require('../models/Book');

module.exports = {
  async createUser(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    return res.json(user);
  },
  async pageHome(req, res) {
    return res.render('home');
  },

  async findUser(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    res.redirect('/');
  },
  pageLogin(req, res) {
    res.render('login');
  },
  async pageAllBooks(req, res) {
    const books = await Book.findAll({ raw: true });

    console.log(books);

    res.render('allBooks', { books });
  },
  async pageRegisterBook(req, res) {
    res.render('registerBook');
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await User.update(
      {
        name,
        email,
        password,
      },
      {
        where: { id },
      },
    );

    return res.json({ message: 'Usuario atualizado!' });
  },

  async deleteUser(req, res) {
    const { id } = req.params;
    const user = await User.destroy({ where: { id } });

    return res.json({ message: 'Usuario deletado!' });
  },
};
