const faker = require('faker')

const create = (numberToCreate, create) => {
  const objects = []
  for (let i = 0; i < numberToCreate; i++) {
    const id = i + 1
    objects[i] = { id, ...create() }
  }

  return objects
}

const createCompany = () => {
  return {
    name: faker.company.companyName(),
    address: {
      streetNumber: faker.datatype.number(999),
      streetName: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipCode: faker.address.zipCode()
    }
  }
}
const createCompanies = (numberToCreate) => {
  const companies = create(numberToCreate, createCompany)
  return companies.map(company => {
    company.logoName = company.id + 'logo.jpg'
    return company
  })
}

const createDepartment = () => {
  return {
    name: faker.commerce.department(),
    costPaid: faker.datatype.float(50.00, 20000.00, 2)
  }
}

const createDepartments = (numberToCreate) => {
  return create(numberToCreate, createDepartment)
}

const createEmployee = () => {
  return {
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    familySize: faker.datatype.number(9),
    costPaid: faker.datatype.float(50.00, 2000.00, 2)
  }
}

const createEmployees = (numberToCreate) => {
  return create(numberToCreate, createEmployee)
}

module.exports = {
  createCompanies,
  createDepartments,
  createEmployees
}
