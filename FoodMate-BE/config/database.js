const {Sequelize} = require('sequelize')

const database = new Sequelize('Foodmate', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = database