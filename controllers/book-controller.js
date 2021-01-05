const Book = require('../models/book');
const bookController = {};

bookController.index = (req,res) => {
  Book.returnAll()
    .then(books => {
      res.render('books/index', { books: books});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

/*module.exports = {
  index: (req,res) => {
    res.render('books/bmain')
    }
};*/

module.exports = bookController;
