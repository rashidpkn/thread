var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')

var users = require('./routes/users');
var pay = require('./routes/pay');
var product = require('./routes/product')


const { join } = require('path');
const sequelize = require('./database');

sequelize.sync({alter:true})

var app = express();

app.use(express.static(join(__dirname,'dist')))
app.use(express.static(join(__dirname,'Home')))

app.use('/',express.static(path.join(__dirname,'Home')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors({
    origin:'*'
}))
app.use('/',express.static(path.join(__dirname,'Home')))
app.use(express.static(path.join(__dirname,'build')))

app.use('/user', users);
app.use('/pay',pay)
app.use('/product',product)

app.get('*', (req,res) =>{res.sendFile(path.join(__dirname,'/build/index.html'));});
module.exports = app;
