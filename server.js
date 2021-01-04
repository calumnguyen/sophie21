const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();
const path = require('path');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // to enable calls from every domain 
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); // allowed actiosn
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // to deal with chrome sending an extra options request
  }

  next(); // call next middlewer in line
});
require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

//extra lines added by tpriyanshu
app.use(express.static(path.join(__dirname,'client/build')));
app.get('*',(req,res)=> {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
