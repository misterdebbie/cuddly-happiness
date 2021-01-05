const dbase = require('../db/config');

const Book = {};

Book.returnAll = () => {
  return dbase.query('SELECT * FROM books ORDER BY id ASC');
};

Book.searchById = id => {
  return dbase.oneOrNone(`SELECT * FROM books WHERE id = $1`, [id]);
};
Book.upadte = (book, id) => {
  return dbase.none(`UPDATE books SET
    title = $1,
    description = $2
    WHERE id = $3
  `,
  [book.title, book.description,id]
  );
};


module.exports = Book;
