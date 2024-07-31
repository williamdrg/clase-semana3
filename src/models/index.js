const Country = require('./country.model')
const City = require('./city.model')
const Degree = require('./degrees.model')
const Student = require('./students.model')

Country.hasMany(City)
City.belongsTo(Country)

Degree.hasMany(Student)
Student.belongsTo(Degree)