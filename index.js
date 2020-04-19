//jshint esversion:6
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const multer = require('multer')().single();


//Controllers
const userLoginController = require('./controllers/userLogin');
const loginPageController = require('./controllers/loginPage');
const registerPageController = require('./controllers/registerPage');
const userRegisterController = require('./controllers/userRegister');
const connectMongo = require('connect-mongo');
const connectFlash = require('connect-flash');

const app = express();

mongoose.connect('mongodb://localhost:27017/onlineShoppingDB', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
  if(err) return console.log(err);
  console.log('Successfully connected to Database');
});
const mongoStore = connectMongo(session);
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'secret',
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  })
}));

app.use(connectFlash());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(multer);
app.use("*", function(req, res, next){
  global.auth = req.session.userId;
  next();
});


app.get('/auth/login', loginPageController);
app.get('/auth/register', registerPageController);
app.post('/auth/login', userLoginController);
app.post('/users/register', userRegisterController);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
