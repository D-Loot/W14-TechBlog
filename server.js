// 1 Import express, express-session and import reference controllers/index.js
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// 2 Establish Server Port
const app = express();
const PORT = process.env.PORT || 3001;

const sessionObj = {
  secret: 'secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sessionObj));

// 3 Use express and Sequelize to access the database through the routes (through controllers/index.js) (see config/connection.js)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
