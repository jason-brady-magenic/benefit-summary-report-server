const faker = require('faker')

// department 1 company 1 employees
const employee1 = {
  id: 1,
  companyId: 1,
  departmentId: 1,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  familySize: faker.datatype.number(9),
  costPaid: faker.datatype.float(50.00, 2000.00, 2)
}

const employee2 = {
  id: 2,
  companyId: 1,
  departmentId: 1,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  familySize: faker.datatype.number(9),
  costPaid: faker.datatype.float(50.00, 2000.00, 2)
}

const employee3 = {
  id: 3,
  companyId: 1,
  departmentId: 1,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  familySize: faker.datatype.number(9),
  costPaid: faker.datatype.float(50.00, 2000.00, 2)
}

// department 2 company 1 employees
const employee4 = {
  id: 4,
  companyId: 1,
  departmentId: 2,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  familySize: faker.datatype.number(9),
  costPaid: faker.datatype.float(50.00, 2000.00, 2)
}

const employee5 = {
  id: 5,
  companyId: 1,
  departmentId: 2,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  familySize: faker.datatype.number(9),
  costPaid: faker.datatype.float(50.00, 2000.00, 2)
}

// department 3 company 1 employees
const employee6 = {
  id: 6,
  companyId: 1,
  departmentId: 3,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  familySize: faker.datatype.number(9),
  costPaid: faker.datatype.float(50.00, 2000.00, 2)
}

// department 4 company 2 employees
const employee7 = {
  id: 7,
  companyId: 2,
  departmentId: 4,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  familySize: faker.datatype.number(9),
  costPaid: faker.datatype.float(50.00, 2000.00, 2)
}

const employee8 = {
  id: 8,
  companyId: 2,
  departmentId: 4,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  familySize: faker.datatype.number(9),
  costPaid: faker.datatype.float(50.00, 2000.00, 2)
}

// department 5 company 2 employees
const employee9 = {
  id: 9,
  companyId: 2,
  departmentId: 5,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  familySize: faker.datatype.number(9),
  costPaid: faker.datatype.float(50.00, 2000.00, 2)
}

const employee10 = {
  id: 10,
  companyId: 2,
  departmentId: 5,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  familySize: faker.datatype.number(9),
  costPaid: faker.datatype.float(50.00, 2000.00, 2)
}

const employee11 = {
  id: 11,
  companyId: 2,
  departmentId: 5,
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  familySize: faker.datatype.number(9),
  costPaid: faker.datatype.float(50.00, 2000.00, 2)
}

const employees = [
  employee1,
  employee2,
  employee3,
  employee4,
  employee5,
  employee6,
  employee7,
  employee8,
  employee9,
  employee10,
  employee11
]

module.exports = {
  employees
}
