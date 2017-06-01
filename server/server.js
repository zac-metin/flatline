var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var knex = require('knex')(config)

var api = require('./routes/api')

var server = express()

//set knex to be the database, this is called in routes/api
server.set('knex-database', knex)

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api', api)
// server.use('/api/situations', situations)
// server.use('/api/solutions', solutions)
module.exports = server
