const express = require('express')

const {
  checkForComment,
  postComment,
  getComments,
  getCommentsPerEntityID,
  updateComment,
  deleteComment } = require('../services/commentService')

const router = express.Router()

router.get('/', getComments)
router.get('/attachedTo/:id', getCommentsPerEntityID)
router.get('/:id', checkForComment, getComments)
router.post('/', postComment)
router.patch('/:id', checkForComment, updateComment)
router.delete('/:id', checkForComment, deleteComment)

module.exports = router
