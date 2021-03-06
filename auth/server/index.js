const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express();
const router = require('./router')
const mongoose = require('mongoose')
const cors = require('cors')


// DB Setup
mongoose.connect('mongodb://localhost:auth/auth ')

// APP SETUP

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({type: '*/*'}))
router(app)

// SERVER SETUP
const port = process.env.PORT || 4000;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on port', port);
