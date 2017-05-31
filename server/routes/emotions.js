const express = require('express')

const router = express.Router()
const emotionsDb = require('../db/emotionsDb')

// '/' == '/api/emotions'

router.get('/', (req, res) => {
  let db = req.app.get('knex')
  emotionsDb.getEmotions(db)
    .then(dbResponse => {
      res.json(dbResponse)
    })
})


module.exports = router
