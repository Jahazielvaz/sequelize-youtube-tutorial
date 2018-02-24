const Sequelize = require('sequelize');

//The connection requires the following parameters (databaseName, userName, password);
//NOTE: It's very important, that you create much more secure passwords, when you actually take any project up to production.
const connection = new Sequelize('database-play', 'mac', {
	host: 'localhost',
	dialect: 'postgres',
});

//CREATING A MODEL

const Userbats = connection.define('userbats', {
	name: Sequelize.STRING,
	last: Sequelize.STRING,
	password: Sequelize.INTEGER
})


//SYNCING WITH YOUR DB

connection.sync();
