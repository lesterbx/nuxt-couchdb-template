const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const SuperLogin = require('superlogin')
const config = require('../sl-server.config')
const socketPouchServer = require('socket-pouch/server');
const env = require('../env')

// Initialize websocket proxy for CouchDB
socketPouchServer.listen(env.dbProxy.port, { remoteUrl: `${config.dbServer.protocol}${config.dbServer.host}` })

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

// Add and configure superlogin
const superlogin = new SuperLogin(config)
app.use('/auth', superlogin.router)
setTimeout(() => superlogin.removeExpiredKeys(), 600000)

// Require API routes
const users = require('./routes/users')

// Set API Routes
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
