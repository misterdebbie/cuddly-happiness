const dbase = require('../db/config');

const Book = {};

Book.returnAll = () => {
  return dbase.query('SELECT * FROM books ORDER BY id ASC');
};

module.exports = Book;
