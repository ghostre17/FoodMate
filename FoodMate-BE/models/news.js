const { DataTypes } = require('sequelize')
const database = require('../config/database')

const News = database.define('News', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true, // Assuming image is optional
        validate: {
            isUrl: true // Validate that the string is a URL
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
})

module.exports = News