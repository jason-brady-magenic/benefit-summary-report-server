const { companies } = require('../db/companies')
const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.status(200).json({ companies })
})

router.get('/:id', function (req, res, next) {
  const companyId = +req.params.id
  const company = companies.find(({ id }) => id === companyId)
  res.status(200).json({ company })
})

module.exports = router
