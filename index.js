//jshint esversion:6
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
var multer  = require('multer');
var upload = multer({ dest: './public/image/' });


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
const addToCartController = require('./controllers/AddToCart');
const cartPageController = require('./controllers/cartPage');
const removeFromCartController = require('./controllers/removeFromCart');
const getProductPageController = require('./controllers/getProduct');
const editProfileController = require('./controllers/editProfile');
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
const cartLength = require('./Middleware/cartLength');
const categories = require('./Middleware/categs');

app.use(connectFlash());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("*", function(req, res, next){
  global.auth = req.session.userId;
  global.Name = req.session.fullName;
  global.adminAuth = false;
  if(req.session.role == 'Admin'){
    global.adminAuth = true;
  }
  next();
});
app.use(cartLength);
app.use(categories);
//Middlewares
const auth = require('./Middleware/auth');
const adminAuth = require('./Middleware/adminAuth');
const redirectIfAuthenticated = require('./Middleware/redirectIfAuthenticated');




app.get('/', homePageController);
app.get('/admin', adminPageController);
app.get('/products', productPageController);
app.get('/profile', profilePageController);
app.get('/addproduct', auth, addProductPageController);
app.get('/addcategory', addCategoryPageController);
app.get('/login', redirectIfAuthenticated, loginPageController);
app.get('/logout', auth, logoutController);
app.get('/register', redirectIfAuthenticated, registerPageController);
app.get('/cart', auth, cartPageController);
app.get('/products/:id', upload.none(), getProductPageController);
app.post('/login-user', upload.none(), userLoginController);
app.post('/register-user', upload.none(), redirectIfAuthenticated, userRegisterController);
app.post('/addproduct', upload.single('image'),  auth, addProductController);
app.post('/addcategory', upload.single('image'), adminAuth, addCategoryController);
app.post('/products/:product_id', upload.none(), addToCartController);
app.post('/remove-from-cart', upload.none(), adminAuth, removeFromCartController);
app.post('/edit-profile', upload.none(), editProfileController);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
