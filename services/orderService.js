const knex = require('../knex')
// const uuid = require('uuid/v4')

const checkForOrder = (req, res, next) => {
  const { id } = req.params
  knex('orders')
    .where('id', id)
    .then(order => order.length < 1 ? res.status(400).send(`No order found with id ${id}`) : next())
}

const getOrders = (req, res, next) => {
  const { id } = req.params

  if (id) {
    knex('orders')
      .where('id', id)
      .select('id', 'ordered_by', 'reviewed_by', 'approved', 'created_at', 'updated_at', 'reviewed_at')
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
  updateOrder,
  deleteOrder
}
