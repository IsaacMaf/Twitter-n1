const express = require('express');
const router = express.Router();
const { createPost, listPosts } = require('../controllers/posts.controller');

router.post('/', createPost);
router.get('/', listPosts);

module.exports = router;
