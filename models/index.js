
//const { Sequelize, Datatypes,Model }  = require('sequelize');
const pg = require('pg')

const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('postgres_db', 'postgres', 'Nandesh123', {
    host: 'database-postgres.cln6eumkbt27.eu-north-1.rds.amazonaws.com',
    logging : false,
    dialect: 'postgres',
    port : 8888,
    dialectOptions: {
  
      dialectModule: pg,
      connectTimeout:  15000 
    }
    
  });


  

  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize; 

  db.contact =  require('./contact')(sequelize,DataTypes)
  db.user = require('./user')(sequelize,DataTypes,Model);

  db.sequelize.sync({ force: false });

  module.exports = db;