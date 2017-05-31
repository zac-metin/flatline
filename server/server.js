var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

var emotions = require('./routes/emotions')

var server = express()

server.set('knex', knex)

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/emotions', emotions)
// server.use('/api/situations', situations)
// server.use('/api/solutions', solutions)
module.exports = server
