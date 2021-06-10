const faker = require('faker')

const company1 = {
  id: 1,
  name: faker.company.companyName(),
  logoName: '1logo.jpg',
  address: {
    streetNumber: faker.datatype.number(999),
    streetName: faker.address.streetName(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zipCode: faker.address.zipCode()
  }
  // logo
}

const company2 = {
  id: 2,
  name: faker.company.companyName(),
  logoName: '2logo.jpg',
  address: {
    streetNumber: faker.datatype.number(999),
    streetName: faker.address.streetName(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zipCode: faker.address.zipCode()
  }
  // logo
}

const companies = [company1, company2]

module.exports = {
  companies
}
