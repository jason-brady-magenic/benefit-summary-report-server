const { createEmployees } = require('./helpers/creator')

const employees = createEmployees(11)

// set associations
// department 1 company 1 employees
employees[0].companyId = 1
employees[0].departmentId = 1

employees[1].companyId = 1
employees[1].departmentId = 1

employees[2].companyId = 1
employees[2].departmentId = 1

// department 2 company 1 employees
employees[3].companyId = 1
employees[3].departmentId = 2

employees[4].companyId = 1
employees[4].departmentId = 2

// department 3 company 1 employees
employees[5].companyId = 1
employees[5].departmentId = 3

// department 4 company 2 employees
employees[6].companyId = 2
employees[6].departmentId = 4

employees[7].companyId = 2
employees[7].departmentId = 4

// department 5 company 2 employees
employees[8].companyId = 2
employees[8].departmentId = 5

employees[9].companyId = 2
employees[9].departmentId = 5

employees[10].companyId = 2
employees[10].departmentId = 5

module.exports = {
  employees
}
