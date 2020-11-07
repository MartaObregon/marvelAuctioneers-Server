require('dotenv').config();
require('./config/database.config')
const express      = require('express');
const app          = express();
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');

const mongoose     = require('mongoose');

const path         = require('path');
const session      = require('express-session')
const MongoStore   = require('connect-mongo')(session);
const cors         = require('cors')



app.use(
  session({
    secret: 'my-secret-weapon',
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000, //60 sec * 60 min * 24hrs = 1 day (in milliseconds)
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      //time to live (in seconds)
      ttl: 60 * 60 * 24,
      autoRemove: 'disabled',
    }),
  })
);




app.use(cors({
  credentials: true, 
  origin: ['http://localhost:3000']
}))

// const app_name = require('./package.json').name;
// const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);



// Middleware Setup
const logger       = require('morgan');
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));app.use(bodyParser.json()) 


// Express View engine setup


app.use(express.static(path.join(__dirname, 'public')));



//Register routes

const authRoutes = require('./routes/auth.routes')
app.use('/api', authRoutes);

const userRoutes = require('./routes/user.routes')
app.use('/api', userRoutes)


app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});





module.exports = app;
