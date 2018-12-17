const knex = require('../knex')
// const uuid = require('uuid/v4')

// Verifies if a comment exists with given ID
const checkForComment = (req, res, next) => {
  const { id } = req.params
  knex('comments')
    .where('id', id)
    .then(comment => comment.length < 1 ? res.status(400).send(`No comment found with id ${id}`) : next())
}

// Returns all comments or comment with given ID
const getComments = (req, res, next) => {
  const { id } = req.params

  if (id) {
    knex('comments')
      .where('comments.id', id)
      .leftJoin('users', 'created_by', 'users.id')
      .select('comments.id', 'order_id', 'message_id', 'report_id', 'schedule_id', 'body', 'created_by', 'first_name', 'last_name', 'comments.created_at as comment_created_at', 'comments.updated_at as comment_updated_at')
      .first()
      .then(comment => {
        res.status(200).send(comment)
      })
      .catch(err => next(err))
  } else {
    knex('comments')
      .then(comments => {
        res.status(200).send(comments)
      })
      .catch(err => {
        next(err)
      })
  }
}

// Will return an array of comments for given entity with ID (e.g. order, message, report, or schedule)
const getCommentsPerEntityID = (req, res, next) => {
  const { id } = req.params

  knex('comments')
    .where('order_id', id)
    .orWhere('message_id', id)
    .orWhere('report_id', id)
    .orWhere('schedule_id', id)
    .innerJoin('users', 'created_by', 'users.id')
    .select('comments.id', 'body', 'comments.created_by as commentor', 'first_name', 'last_name', 'comments.created_at as comment_created_at', 'comments.updated_at as comment_updated_at')
    .then(comments => {
      res.status(200).send(comments)
    })
    .catch(err => next(err))
}

// Creates a new comment
const postComment = (req, res, next) => {
  const { body, created_by, order_id, message_id, report_id, schedule_id, created_at, updated_at } = req.body

  const newComment = { body, created_by, order_id, message_id, report_id, schedule_id, created_at, updated_at }

  knex('comments')
    .insert(newComment)
    .returning(['body', 'created_by', 'order_id', 'message_id', 'report_id', 'schedule_id', 'created_at', 'updated_at'])
    .then(comment => res.status(200).send(comment))
    .catch(err => {
      next(err)
    })
}

// Updates existing comment with ID
const updateComment = (req, res, next) => {
  const { id } = req.params
  const { body, created_by, order_id, message_id, report_id, schedule_id, created_at, updated_at } = req.body

  knex('comments')
    .where('id', id)
    .update({ body, created_by, order_id, message_id, report_id, schedule_id, created_at, updated_at })
    .returning(['body', 'created_by', 'order_id', 'message_id', 'report_id', 'schedule_id', 'created_at', 'updated_at'])
    .then(comment => {
      res.status(200).send(comment[0])
    })
    .catch(err => {
      next(err)
    })
}

// Deletes existing comment with ID
const deleteComment = (req, res, next) => {
  const { id } = req.params
  knex('comments')
    .where('id', id)
    .del()
    .returning(['body', 'created_by', 'order_id', 'message_id', 'report_id', 'schedule_id', 'created_at', 'updated_at'])
    .then(comment => {
      res.status(200).send(comment[0])
    })
    .catch(err => {
      next(err)
    })
}

module.exports = {
  checkForComment,
  postComment,
  getComments,
  getCommentsPerEntityID,
  updateComment,
  deleteComment
}
