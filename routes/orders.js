const express = require('express')
const {
  checkForOrder,
  postOrder,
  getOrders,
  getOrderDetail,
  updateOrder,
  deleteOrder } = require('../services/orderService')

const router = express.Router()

router.get('/', getOrders)
router.get('/details/:id', checkForOrder, getOrderDetail)
// router.get('/:id', checkForOrder, getOrders)
router.post('/', postOrder)
router.patch('/:id', checkForOrder, updateOrder)
router.delete('/:id', checkForOrder, deleteOrder)

module.exports = router
