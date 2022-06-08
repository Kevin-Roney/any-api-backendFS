const { Router } = require('express');
const Band = require('../models/Band');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingBand = Band.getById(id);
    res.json(matchingBand);
  })

  .get('/', (req, res) => {
    const bands = Band.getAll();
    res.json(bands);
  });
