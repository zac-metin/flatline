const express = require('express')

const router = express.Router()
const selectFunctions = require('../db/selectFromDatabase')

// '/' == '/api', set up in server

router.get('/emotions', (req, res) => {
  let connectAppToKnex = req.app.get('knex-database')
  selectFunctions.getEmotions(connectAppToKnex)
    .then(selectedData => {
      res.json(selectedData)
    })
})

router.get('/situations', (req, res) => {
  res.json([
    { situation_id:1,
      situation:'situation 1'},
    { situation_id:2,
      situation:'situation 2'},
    { situation_id:3,
      situation:'situation 3'}
  ])
})


module.exports = router
