module.exports = (sequelize, Datatypes) => {
    const Account = sequelize.define('Account', {
        email: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        jwtVersion: {
            type: Datatypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    })

    Account.associate = (models) => {
        Account.hasMany(models.Link, { foreignKey: 'accountId' })
    }

    Account.prototype.toJSON = function() {
        const values = { ...this.get() }
        delete values.password
        return values
    }

    return Account
}