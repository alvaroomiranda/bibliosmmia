const { DataTypes } = require('sequelize');

const db = require('../database/conn');

const Book = db.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  editor_book: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Book;
