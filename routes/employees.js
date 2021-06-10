const { employees } = require('../db/employees')
const express = require('express')
const router = express.Router()

router.get('/department/:id', function (req, res, next) {
  const departmentId = +req.params.id
  const departmentEmployees = employees.filter(({ departmentId: id }) => id === departmentId)
  res.status(200).json(departmentEmployees)
})

module.exports = router
