const dbase = require('../db/config');

const Book = {};

Book.returnAll = () => {
  return dbase.query('SELECT * FROM books ORDER BY id ASC');
};

Book.searchById = id => {
  return dbase.oneOrNone(`SELECT * FROM books WHERE id = $1`, [id]);
};
Book.update = (book, id) => {
  return dbase.none(`UPDATE books SET
    title = $1,
    description = $2
    WHERE id = $3
  `,
  [book.title, book.description,id]
  );
};
Book.create = book => {
  return dbase.one(
    `
      INSERT INTO books
      (title, description)
      VALUES($1,$2) RETURNING *
    `,
    [book.title, book.description]
  );
};
Book.remove = id => {
  return dbase.none(
    `
      DELETE FROM books
      WHERE id = $1
    `,
    [id]
  );
};


module.exports = Book;
