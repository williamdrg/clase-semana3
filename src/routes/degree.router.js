const { getAll, create, getOne, remove, update } = require('../controllers/degrees.controllers');
const express = require('express');

const rotuerDegree = express.Router();


rotuerDegree.route('/')
.get(getAll)
.post(create);

rotuerDegree.route('/:id')
.get(getOne)
.delete(remove)
.put(update);

module.exports = rotuerDegree;