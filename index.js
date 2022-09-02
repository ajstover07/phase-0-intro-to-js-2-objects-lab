const employee = {
  name: "Amanda",
  streetAddress: "126 S. Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updateEmployeeWithKeyAndValue = {...employee}
  updateEmployeeWithKeyAndValue[key] = value
  return updateEmployeeWithKeyAndValue
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value
  return employee
}

function deleteFromEmployeeByKey(employee, key){
  const deleteFromEmployeeByKey = {...employee}
  delete deleteFromEmployeeByKey[key]
  return deleteFromEmployeeByKey
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key]
  return employee
}