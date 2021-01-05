const express = require('express');
const bookController = require('../controllers/book-controller');
const bookRouter = express.Router();

bookRouter.get('/', bookController.index)
bookRouter.get('/:id', bookController.display)
bookRouter.get('/:id/edit', bookController.edit)
bookRouter.put('/:id', bookController.update)

module.exports = bookRouter;
