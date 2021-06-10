const { departments } = require('../db/departments')
const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.status(200).json(departments)
})

router.get('/:id', function (req, res, next) {
  const departmentId = +req.params.id
  const department = departments.find(({ id }) => id === departmentId)
  res.status(200).json(department)
})

router.get('/company/:id', function (req, res, next) {
  const companyId = +req.params.id
  const companyDepartments = departments.filter(({ companyId: id }) => id === companyId)
  res.status(200).json(companyDepartments)
})

module.exports = router
