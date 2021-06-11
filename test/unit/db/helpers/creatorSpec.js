/* global describe it */

const expect = require('chai').expect
const creator = require('../../../../db/helpers/creator')

describe('creator', function () {
  describe('createCompanies', function () {
    it('creates an array containing the number of companies based on the numberToCreate parameter', function () {
      const companies = creator.createCompanies(4)

      expect(companies.length).to.equal(4)
    })
    it('creates an empty array if no numberToCreate is provided', function () {
      const companies = creator.createCompanies()

      expect(companies.length).to.equal(0)
    })
    it('prepends the company id to logo.jpg for the logoName', function () {
      const companies = creator.createCompanies(1)

      const company = companies[0]
      expect(company.logoName).to.equal(company.id + 'logo.jpg')
    })
  })
})
