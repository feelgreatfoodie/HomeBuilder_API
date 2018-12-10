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
router.patch('/:id', checkForItem, updateItem)
router.delete('/:id', checkForItem, deleteItem)

module.exports = router
