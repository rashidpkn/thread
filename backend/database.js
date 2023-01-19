const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('thread', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres',
    logging:false
  });

sequelize.authenticate().then(res=>{
    console.log('Successfully connected')
}).catch(error=>{
    console.log(error.message)
})

module.exports=sequelize