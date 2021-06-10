const sum = (accumulator, currentValue) => {
  return accumulator + currentValue.costPaid
}

const calculateTotalPaidByCompany = ({ departments }) => {
  return departments.reduce(sum, 0)
}

const calculateTotalPaidByEmployees = ({ employees }) => {
  return employees.reduce(sum, 0)
}

module.exports = {
  calculateTotalPaidByEmployees,
  calculateTotalPaidByCompany
}
