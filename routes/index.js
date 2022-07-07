const express = require('express');

const productsRouter = require('./productsRouter');
const categoryRoute = require('./categoryRoute');
const usersRoute = require('./usersRoute');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/category', categoryRoute);
  router.use('/users', usersRoute);
}

module.exports = routerApi;
