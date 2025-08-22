const { DataTypes } = require('sequelize')
const database = require('../config/database')

const Store = database.define('Store', {
    name_store: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    }
})

Store.associate = (models) => {
    Store.belongsTo(models.User, { foreignKey: 'id_user' })
    Store.hasMany(models.Menu, { foreignKey: 'id_store' })
    Store.hasMany(models.Order, { foreignKey: 'id_store' })
}

module.exports = Store
