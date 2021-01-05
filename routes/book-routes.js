const express = require('express');
const bookController = require('../controllers/book-controller');
const bookRouter = express.Router();

bookRouter.get('/', bookController.index)

module.exports = bookRouter;
