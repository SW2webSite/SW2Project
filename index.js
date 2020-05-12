//jshint esversion:6
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const fileUpload = require('express-fileupload');



//Controllers
const homePageController = require('./controllers/homePage');
const adminPageController = require('./controllers/adminPage');
const productPageController = require('./controllers/productPage');
const profilePageController = require('./controllers/profilePage');
const addProductPageController = require('./controllers/addProductPage');
const addCategoryPageController = require('./controllers/addCategoryPage');
const addProductController = require('./controllers/addProduct');
const addCategoryController = require('./controllers/addCategory');
const userLoginController = require('./controllers/userLogin');
const logoutController = require('./controllers/logout');
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use("*", function(req, res, next){
  global.auth = req.session.userId;
  global.Name = req.session.fullName;
  next();
});

const auth = require('./Middleware/auth');
const redirectIfAuthenticated = require('./Middleware/redirectIfAuthenticated');

app.get('/', homePageController);
app.get('/admin', adminPageController);
app.get('/product', productPageController);
app.get('/profile', profilePageController);
app.get('/addproduct', auth, addProductPageController);
app.get('/addcategory', addCategoryPageController);
app.get('/login', redirectIfAuthenticated, loginPageController);
app.get('/logout', auth, logoutController);
app.get('/register', registerPageController);
app.post('/login-user', userLoginController);
app.post('/register-user', userRegisterController);
app.post('/addproduct', auth, addProductController);
app.post('/addcategory', addCategoryController);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
