const Book = require('../models/Book');

module.exports = {
  async createBook(request, response) {
    const { title, author, editor_book, category } = request.body;

    const book = await Book.create({ title,author, editor_book, category });

    response.redirect('/');
  },

  async findBooks(request, response) {
    const books = await Book.findAll({ raw: true });

    return response.json(books);
  },

  async findBook(request, response) {
    const { id } = request.params;

    const book = await Book.findOne({ where: { id: id } });

    return response.json(book);
  },

  async showBookDetails(request, response) {
      const { id } = request.params;
      const book = await Book.findOne({ where: { id: id }, raw: true });

  
      return response.render('/show', { book });
  },

  async showPageUpdate(request, response){
    const { id } = request.params

    const book = await Book.findOne({ where: { id: id }, raw: true });

    return response.render(`/books/edit/${id}`, { book });
  },

  async updateBook(request, response) {
    const { id } = request.params;
    const { title, author, editor_book, category } = request.body;

    const book = await Book.update(
      { title, author, editor_book, category },
      { where: { id: id } }
      );
      return response.redirect(`/books/update/${id}`);
    },

  async deleteBook(request, response) {
    const { id } = request.params;
    const book = await Book.destroy({ where: { id: id } });
    return response.redirect('/allBooks');
  },

  async homeButton(request, response){
    return response.redirect('/'); 
  },

  async searchButton(request, response){
    return response.redirect('/allBooks'); 
  },

  async addButton(request, response){
    return response.redirect('/registerBook'); 
  },
};
