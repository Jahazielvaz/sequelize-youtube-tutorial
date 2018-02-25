const Sequelize = require('sequelize');
const sequelizeInstance = new Sequelize('journal_entries', 'KupidoExportLLC', {
  dialect: 'postgres'
});


module.exports = function(sequelizeIntance, DataTypes){
const Entries = sequelizeInstance.define('entries', {
  user: Sequelize.STRING,
  title: Sequelize.STRING,
  content: Sequelize.TEXT
})

Entries.sync();

return Entries;

}
