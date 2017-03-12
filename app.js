const   express                 = require('express'),
        app                     = express(),
        path                    = require('path'),
        mongoose                = require('mongoose'),
        bodyParser              = require('body-parser'),
        localStrategy           = require('passport-local'),
        plmongoose              = require('passport-local-mongoose'),
        passport                = require('passport'),
        user                    = require('./models/user'),
        port                    = 3000,
        ip                      = "";

// declarations ===========================================================================================================
var indexController = require('./controllers/indexController');
var userController  = require('./controllers/userController');

// db connection ==========================================================================================================
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/staywaysDB');

// settings  ===============================================================================================================

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('express-session')({
        secret : "Secret word goes here in production",
        resave :false,
        saveUninitialized :false}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use(express.static(path.join(__dirname, 'public'))); 
app.set('view engine','ejs');

//Routes ======================================================================================================================
app.get('/',indexController.home);
app.post('/signup',userController.signup);
app.post('/login',userController.login);










// launch =================================================================================================================

app.listen(port,()=>{
    console.log("Magic happens on port: "+port);
});