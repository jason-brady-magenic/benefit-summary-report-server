const {
  calculateTotalPaidByEmployees,
  calculateTotalPaidByCompany
} = require('../helper/costCalculator')

const { departments } = require('../db/departments')
const { employees } = require('../db/employees')

const express = require('express')
const router = express.Router()

/**
 * total insurance cost for the company will be the total paid by employees plus the total paid by all departments
 */
router.get('/company/:id', function (req, res, next) {
  const companyId = +req.params.id
  const companyDepartments = departments.filter(({ companyId: id }) => id === companyId)
  const companyEmployees = employees.filter(({ companyId: id }) => id === companyId)

  const totalPaidByCompany = calculateTotalPaidByCompany({ departments: companyDepartments })
  const totalPaidByEmployees = calculateTotalPaidByEmployees({ employees: companyEmployees })
  const totalCostOfInsurance = totalPaidByCompany + totalPaidByEmployees
  res.status(200).json({
    companyId,
    totalCostOfInsurance,
    totalPaidByCompany,
    totalPaidByEmployees
  })
})

// router.get('/departments/company/:id', function (req, res, next) {
//   const companyId = +req.params.id
//   // const company = companies.find(({ id }) => id === companyId)
//   res.status(200).json({ company })
// })

router.get('/department/:id', function (req, res, next) {
  const departmentId = +req.params.id
  const department = departments.find(({ id }) => id === departmentId)
  const departmentEmployees = employees.filter(({ departmentId: id }) => id === departmentId)
  const totalPaidByEmployees = calculateTotalPaidByEmployees({ employees: departmentEmployees })
  const totalPaidByDepartment = department.costPaid
  const totalCostOfInsurance = totalPaidByDepartment + totalPaidByEmployees
  res.status(200).json({
    departmentId,
    totalCostOfInsurance,
    totalPaidByDepartment,
    totalPaidByEmployees
  })
})

module.exports = router
