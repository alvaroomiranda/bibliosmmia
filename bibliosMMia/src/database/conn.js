const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('books_system', 'alvaro_casa', 'alvaro06@!.com', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('connected');
} catch (error) {
  console.error(error);
}

module.exports = sequelize;