const { createDepartments } = require('./helpers/creator')

const departments = createDepartments(5)

// set associations
// company 1 departments
departments[0].companyId = 1
departments[1].companyId = 1
departments[2].companyId = 1
// company 2 departments
departments[3].companyId = 2
departments[4].companyId = 2

module.exports = {
  departments
}
