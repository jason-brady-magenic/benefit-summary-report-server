const faker = require('faker')

// company 1 departments
const department1 = {
  id: 1,
  companyId: 1,
  name: faker.commerce.department(),
  costPaid: faker.datatype.float(50.00, 20000.00, 2)
}

const department2 = {
  id: 2,
  companyId: 1,
  name: faker.commerce.department(),
  costPaid: faker.datatype.float(50.00, 20000.00, 2)
}

const department3 = {
  id: 3,
  companyId: 1,
  name: faker.commerce.department(),
  costPaid: faker.datatype.float(50.00, 20000.00, 2)
}

// company 2 departments
const department4 = {
  id: 4,
  companyId: 2,
  name: faker.commerce.department(),
  costPaid: faker.datatype.float(50.00, 20000.00, 2)
}

const department5 = {
  id: 5,
  companyId: 2,
  name: faker.commerce.department(),
  costPaid: faker.datatype.float(50.00, 20000.00, 2)
}

const departments = [department1, department2, department3, department4, department5]

module.exports = {
  departments
}
