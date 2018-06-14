const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const SuperLogin = require('superlogin')
const config = require('./config')
const socketPouchServer = require('socket-pouch/server');

// Initialize websocket proxy for couchDB
socketPouchServer.listen(5980, { remoteUrl: `${config.dbServer.protocol}${config.dbServer.host}` })

// Create express instance
const app = express()

// Add plugins
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Add plugins
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Add superlogin middleware
const superlogin = new SuperLogin(config)
app.use('/auth', superlogin.router)

// Require API routes
const users = require('./routes/users')



// Set API Routes
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
