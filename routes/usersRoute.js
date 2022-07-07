const express = require('express');
const router =express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
      id,
      name: 'Arturo',
      type: 'employee'
  });
});

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
  });
  }else{
    res.send('no hay parametros');
  }});

  module.exports = router;
