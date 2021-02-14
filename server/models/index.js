'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.USER = require('./user')(sequelize, Sequelize)
db.BOARD1 = require('./board1')(sequelize, Sequelize, db.USER)
db.USER.hasMany(db.BOARD1, {
    foreignKey: 'user_id'
})
db.BOARD1.belongsTo(db.USER, {
    foreignKey: 'user_id'
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
