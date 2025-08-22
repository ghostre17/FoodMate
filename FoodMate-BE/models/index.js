const Menu = require('./menu')
const Store = require('./store')
const User = require('./user')
const Order = require('./order')

const models = {
    User,
    Store,
    Menu,
    Order
}

Object.values(models).forEach(model => {
    if (model.associate) {
        model.associate(models)
    }
})

module.exports = models