const { DataTypes } = require('sequelize')
const database = require('../config/database')

const Order = database.define('Order', {
    order_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    total_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    unique_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', 
            key: 'id'
        }
    },
})

Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: 'id_user' })
    Order.belongsTo(models.Store, { foreignKey: 'id_store' })
    Order.hasMany(models.Menu, { foreignKey: 'id_order' })
}

module.exports = Order