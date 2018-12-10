const knex = require('../knex')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const uuid = require('uuid/v4')

const checkForExisitingEmail = (req, res, next) => {
  const { email_address } = req.body
  knex('users')
    .where('email_address', email_address)
    .then(user => user.length === 1 ? res.status(400).send('Email already registered') : next())
}

const checkForUser = (req, res, next) => {
  const { id } = req.params
  knex('users')
    .where('id', id)
    .then(user => user.length < 1 ? res.status(400).send(`No user found with id ${id}`) : next())
}

const getUsers = (req, res, next) => {
  const { id } = req.params

  if (id) {
    knex('users')
      .where('id', id)
      .select('id', 'first_name', 'last_name', 'phone_number', 'email_address')
      .first()
      .then(user => {
        res.status(200).send(user)
      })
      .catch(err => {
        next(err)
      })
  } else {
    knex('users')
      .select('id', 'first_name', 'last_name', 'phone_number', 'email_address')
      .then(users => {
        res.status(200).send(users)
      })
      .catch(err => {
        next(err)
      })
  }
}

const postUser = (req, res, next) => {
  const {
    first_name,
    last_name,
    phone_number,
    email_address,
    password
  } = req.body

  bcrypt.hash(password, 10, (err, hashed_password) => {
    const newUser = {
      first_name,
      last_name,
      phone_number,
      email_address,
      hashed_password
    }

    knex('users')
      .insert(newUser)
      .returning(['id', 'first_name', 'last_name', 'email_address', 'phone_number'])
      .then(user => {
        // const token = jwt.sign({
        //   'id': user[0].id,
        //   'first_name': user[0].first_name,
        //   'last_name': user[0].last_name,
        //   'phone_number': user[0].phone_number,
        //   'email_address': user[0].email_address
        // }, process.env.JWT_KEY)
        // res.cookie(`token=${token}; Path=\/;.HttpOnly`)
        res.status(200).send(user)
      })
      .catch(err => {
        next(err)
      })
  })
}

const updateUser = (req, res, next) => {
  const { id } = req.params
  const { first_name, last_name, email_address, password, phone_number } = req.body
  knex('users')
    .where('id', id)
    .update({ first_name, last_name, email_address, phone_number })
    .returning(['first_name', 'last_name', 'phone_number', 'email_address'])
    .then(user => {
      res.status(200).send(user[0])
    })
    .catch(err => {
      next(err)
    })
}

const deleteUser = (req, res, next) => {
  const { id } = req.params
  knex('users')
    .where('id', id)
    .del()
    .returning(['first_name', 'last_name', 'phone_number', 'email_address'])
    .then(user => {
      res.status(200).send(user[0])
    })
    .catch(err => {
      next(err)
    })
}

module.exports = {
  checkForExisitingEmail,
  checkForUser,
  postUser,
  getUsers,
  updateUser,
  deleteUser
}
