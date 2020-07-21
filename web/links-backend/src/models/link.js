module.exports = (sequelize, Datatypes) => {
    const Link = sequelize.define('Link', {
        label: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        url: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        image: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        isSocial: {
            type: Datatypes.BOOLEAN,
            allowNull: false,
            default: 0,
        },
    })

    Link.associate = (models) => {
        Link.belongsTo(models.Account, { foreignKey: 'accountId' })
    }

    return Link
}