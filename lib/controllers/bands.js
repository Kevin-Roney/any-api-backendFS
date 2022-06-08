const { Router } = require('express');
const Band = require('../models/Band');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingBand = await Band.getById(id);
    res.json(matchingBand);
  })

  .get('/', async (req, res) => {
    const bands = await Band.getAll();
    res.json(bands);
  });
