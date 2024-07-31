const express = require('express');
const routerCountry = require('./country.router');
const cityRouter = require('./city.router');
const rotuerDegree = require('./degree.router');
const routerStudent = require('./student.router');
const router = express.Router();

router.use('/countries', routerCountry)
router.use('/cities', cityRouter)
router.use('/degrees', rotuerDegree)
router.use('/students', routerStudent)

module.exports = router;