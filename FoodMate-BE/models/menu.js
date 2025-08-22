const { DataTypes } = require('sequelize')
const database = require('../config/database')

const Menu = database.define ('Menu', {
    foodname: {
        type : DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type : DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type : DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true, // Assuming image is optional
        validate: {
            isUrl: true // Validate that the string is a URL
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    expiry: {
        type: DataTypes.DATE,
        allowNull: false, 
        validate: {
            isDate: true 
        }
    },
    category: {
        type: DataTypes.ENUM('drinks', 'foods'),
        allowNull: false
    },
    id_store: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'stores', // Assuming 'users' is the table name for User model
            key: 'id'
        }
    }
}, {
    tableName: 'menus',
    timestamps: true,
    createdAt: 'created_at',
    updated: 'updated_at'
})

Menu.associate = (models) => {
    Menu.belongsTo(models.Store, { foreignKey: 'id_store' })
}

module.exports = Menu