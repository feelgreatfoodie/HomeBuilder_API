const knex = require('../knex')
// const uuid = require('uuid/v4')

const checkForItem = (req, res, next) => {
  const { id } = req.params
  knex('items')
    .where('id', id)
    .then(item => item.length < 1 ? res.status(400).send(`No item found with id ${id}`) : next())
}

const getItems = (req, res, next) => {
  const { id } = req.params

  if (id) {
    knex('items')
      .where('id', id)
      .select('id', 'eng_name', 'esp_name', 'category', 'sub_category', 'image_url', 'sold_by')
      .first()
      .then(item => {
        res.status(200).send(item)
      })
      .catch(err => {
        next(err)
      })
  } else {
    knex('items')
      .select('id', 'eng_name', 'esp_name', 'category', 'sub_category', 'image_url', 'sold_by')
      .then(items => {
        res.status(200).send(items)
      })
      .catch(err => {
        next(err)
      })
  }
}

const postItem = (req, res, next) => {
  const { eng_name, esp_name, category, sub_category, image_url, sold_by } = req.body

  const newItem = { eng_name, esp_name, category, sub_category, image_url, sold_by }

  knex('items')
    .insert(newItem)
    .returning(['id', 'eng_name', 'esp_name', 'category', 'sub_category', 'image_url', 'sold_by'])
    .then(item => res.status(200).send(item))
    .catch(err => {
      next(err)
    })
}

const updateItem = (req, res, next) => {
  const { id } = req.params
  const { eng_name, esp_name, category, sub_category, image_url, sold_by } = req.body

  knex('items')
    .where('id', id)
    .update({ eng_name, esp_name, category, sub_category, image_url, sold_by })
    .returning(['id', 'eng_name', 'esp_name', 'category', 'sub_category', 'image_url', 'sold_by'])
    .then(item => {
      res.status(200).send(item[0])
    })
    .catch(err => {
      next(err)
    })
}

const deleteItem = (req, res, next) => {
  const { id } = req.params
  knex('items')
    .where('id', id)
    .del()
    .returning(['eng_name', 'esp_name', 'category', 'sub_category', 'image_url', 'sold_by'])
    .then(item => {
      res.status(200).send(item[0])
    })
    .catch(err => {
      next(err)
    })
}

module.exports = {
  checkForItem,
  postItem,
  getItems,
  updateItem,
  deleteItem
}
