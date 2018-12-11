const knex = require('../knex')
// const uuid = require('uuid/v4')

// Verifies if there is an order with given ID
const checkForOrder = (req, res, next) => {
  const { id } = req.params
  knex('orders')
    .where('id', id)
    .then(order => order.length < 1 ? res.status(400).send(`No order found with id ${id}`) : next())
}

// Retrieves all orders or a specific order along with user information for who created it
const getOrders = (req, res, next) => {
  const { id } = req.params

  if (id) {
    knex('orders')
      .where('orders.id', id)
      .innerJoin('users', 'ordered_by', 'users.id')
      // .innerJoin('users as r_b', 'reviewed_by', 'r_b.id')
      .select('orders.*', 'first_name as ordered_by_first_name', 'last_name as ordered_by_last_name', 'phone_number', 'email_address')
      .first()
      .then(order => {
        res.status(200).send(order)
      })
      .catch(err => {
        next(err)
      })
  } else {
    knex('orders')
      .select('id', 'ordered_by', 'reviewed_by', 'approved', 'created_at', 'updated_at', 'reviewed_at')
      .then(orders => {
        res.status(200).send(orders)
      })
      .catch(err => {
        next(err)
      })
  }
}

// Retrieves all items for given order with full info on items
const getOrderDetail = (req, res, next) => {
  const { id } = req.params

  knex('orders_items')
    .where('order_id', id)
    .innerJoin('items', 'item_id', 'items.id')
    .select('item_id', 'eng_name', 'esp_name', 'category', 'sub_category', 'image_url', 'sold_by')
    .then(details => res.status(200).send(details))
    .catch(err => next(err))
}

const postOrder = (req, res, next) => {
  const { ordered_by, reviewed_by, approved, created_at, updated_at, reviewed_at } = req.body

  const newOrder = { ordered_by, reviewed_by, approved, created_at, updated_at, reviewed_at }

  knex('orders')
    .insert(newOrder)
    .returning(['id', 'ordered_by', 'reviewed_by', 'approved', 'created_at', 'updated_at', 'reviewed_at'])
    .then(order => res.status(200).send(order))
    .catch(err => {
      next(err)
    })
}

const updateOrder = (req, res, next) => {
  const { id } = req.params
  const { ordered_by, reviewed_by, approved, created_at, updated_at, reviewed_at } = req.body

  knex('orders')
    .where('id', id)
    .update({ ordered_by, reviewed_by, approved, created_at, updated_at, reviewed_at })
    .returning(['id', 'ordered_by', 'reviewed_by', 'approved', 'created_at', 'updated_at', 'reviewed_at'])
    .then(order => {
      res.status(200).send(order[0])
    })
    .catch(err => {
      next(err)
    })
}

const deleteOrder = (req, res, next) => {
  const { id } = req.params
  knex('orders')
    .where('id', id)
    .del()
    .returning(['ordered_by', 'reviewed_by', 'approved', 'created_at', 'updated_at', 'reviewed_at'])
    .then(order => {
      res.status(200).send(order[0])
    })
    .catch(err => {
      next(err)
    })
}

module.exports = {
  checkForOrder,
  postOrder,
  getOrders,
  getOrderDetail,
  updateOrder,
  deleteOrder
}
