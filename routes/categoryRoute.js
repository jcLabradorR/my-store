const express = require('express');
const faker = require('faker');
const CategoryService = require('./../services/category.service');

const router =express.Router();

const service = new CategoryService();

router.get('/', (req, res) => {
  const categories = service.find();
  res.status(200).json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const categories =service.findOne(id);
  res.status(200).json(categories);
});

module.exports = router;
