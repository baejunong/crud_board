module.exports = (sequelize, Sequelize, userModel) => {
    const BOARD1 = sequelize.define(
        'board1',
        {
            board_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            content: {
                type: Sequelize.STRING(4000),
            },
            user_id: {
                type: Sequelize.INTEGER,
                reference: {
                    model: userModel,
                    key: 'user_id'
                },
                allowNull: false
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return BOARD1;
}