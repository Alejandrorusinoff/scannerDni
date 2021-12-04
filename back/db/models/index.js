const Organization = require('./organization')
const EmployeeData = require('./employeeData')
const CovidEmployeeData = require('./covidEmpleyeeData')
const RegisterHour = require('./registerHour')

Organization.hasMany(EmployeeData)
EmployeeData.belongsTo(Organization)

EmployeeData.hasMany(CovidEmployeeData)
CovidEmployeeData.belongsTo(EmployeeData)

EmployeeData.hasMany(RegisterHour)
RegisterHour.belongsTo(EmployeeData)

module.exports = {Organization, EmployeeData, CovidEmployeeData, RegisterHour}