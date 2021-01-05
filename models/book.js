const dbase = require('../db/config');

const Book = {};

Book.returnAll = () => {
  return dbase.query('SELECT * FROM books ORDER BY id ASC');
};

Book.searchById = id => {
  return dbase.oneOrNone(`SELECT * FROM books WHERE id = $1`, [id]);
};


module.exports = Book;
