'use strict';

const dotenv = require('dotenv');
const Sequelize = require('sequelize');
const dbConfig = require(__dirname + '/../config/config.json')['development'];
dotenv.config();
const db = {};

//add your mysql database password in .env file
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;