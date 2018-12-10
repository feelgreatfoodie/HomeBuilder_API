const express = require('express')
const knex = require('../knex')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('ALL RECORDS')
})
router.get('/:id', (req, res, next) => {
  res.send('ONE RECORD')
})
router.post('/', (req, res, next) => {
  res.send('CREATED RECORD')
})
router.put('/:id', (req, res, next) => {
  res.send('UPDATED RECORD')
})
router.delete('/:id', (req, res, next) => {
  res.send('DELETED RECORD')
})

module.exports = router
