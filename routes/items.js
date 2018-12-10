const express = require('express')
const {
  checkForItem,
  postItem,
  getItems,
  updateItem,
  deleteItem } = require('../services/itemService')

const router = express.Router()

router.get('/', getItems)
router.get('/:id', checkForItem, getItems)
router.post('/', postItem)
router.patch('/:id', updateItem)
router.delete('/:id', deleteItem)

module.exports = router
