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

bookController.display = (req,res) => {
  Book.searchById(req.params.id)
    .then(book => {
      res.render('books/displayOne', { book: book})
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
bookController.edit = (req,res) => {
  Book.searchById(req.params.id)
    .then(book => {
      res.render('books/edit', { book: book})
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
bookController.update = (req,res) => {
  Book.update({
    title: req.body.title,
    description: req.body.description
  }, req.params.id)
    .then(() => {
      res.redirect(`/${req.params.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
bookController.new = (req,res) => {
  res.render('books/new')
};
bookController.create = (req,res) => {
  Book.create({
    title: req.body.title,
    description: req.body.description
  })
    .then(book => {
      res.redirect(`/${book.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
bookController.remove = (req,res) => {
  Book.remove(req.params.id)
    .then(() => {
      res.redirect('/')
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
