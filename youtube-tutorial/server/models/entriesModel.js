const Sequelize = require('sequelize');
const sequelizeInstance = new Sequelize('journal_entries', 'KupidoExportLLC', {
  dialect: 'postgres'
});
const Op = Sequelize.Op;


module.exports = function(sequelizeInstance, DataTypes){
const Entries = sequelizeInstance.define('entries', {
  user: Sequelize.STRING,
  title: Sequelize.STRING,
  content: Sequelize.TEXT
})

Entries.sync().then(function(){
  Entries.create({
    user: 'I need to get this to work',
    title: 'Ill be really happy when this does work',
    content: 'It will work this time'
  })
});



return Entries;

}
