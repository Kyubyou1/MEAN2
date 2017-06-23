const express = require('express');
const parser = require('body-parser');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8800;
const app = express();

const sessionConfig = {
  secret: 'SessionSecret',
  resave: false,
  saveUninitialized: true,
  name: 'currentUser',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000
  }
};

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(session(sessionConfig));
app.use(cookieParser('alskdfhaslkdufhlajshdfglsdfugh'));
app.use(express.static(path.resolve('bower_components')));
app.use(express.static(path.resolve('public')));

require(path.resolve('server', 'config', 'database'));
require(path.resolve('server', 'config', 'routes'))(app);


app.listen(port, () => console.log(`Listening on port ${port}`));
