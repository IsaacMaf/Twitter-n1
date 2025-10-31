const express = require('express');
const router = express.Router();
const { createComment, listCommentsByPost } = require('../controllers/comments.controller');

router.post('/', createComment);
router.get('/:postId', listCommentsByPost);

module.exports = router;
