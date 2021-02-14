module.exports = (sequelize, Sequelize) => {
    const USER = sequelize.define(
        'user',
        {
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            id: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(50),
                allowNull: false
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return USER;
}