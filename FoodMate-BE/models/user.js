const { DataTypes } = require('sequelize')
const database = require('../config/database')

const User = database.define ('User', {
    username: {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type : DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type : DataTypes.TEXT,
        allowNull: true
    },
    role: {
        type: DataTypes.ENUM('admin', 'user', 'store'),
        allowNull: false,
        defaultValue: 'user'
    }
}, {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = User