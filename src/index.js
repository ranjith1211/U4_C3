const express = require('express');

const app = express();

const userController = require('./controllers/user.controller');

const login = require('./controllers/user.controller')

const bookController = require('./controllers/book.controllers');

app.use(express.json());

app.use('/register', userController);

app.use('/book', bookController);

app.use('/login', login);

module.exports = app;
