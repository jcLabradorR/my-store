const express = require('express');
const ProductsService = require('./../services/product.service');
const router =express.Router();

const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product =service.findOne(id);
  res.status(200).json(product);
});

//POST
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

//PUT
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'update',
    data: body,
    id,
  });
});

//PATCH
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'update partial',
    data: body,
    id,
  });
});

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: 'delete',
    id,
  });
});

module.exports = router;
