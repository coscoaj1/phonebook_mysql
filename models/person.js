const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Person = sequelize.define('person', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	phoneNumber: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
});

module.exports = Person;
