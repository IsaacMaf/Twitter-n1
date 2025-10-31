const express = require('express');
const router = express.Router();
const { createUser, listUsers } = require('../controllers/user.controller');
const { validateUser } = require('../middlewares/validateUser');

router.post('/', validateUser, createUser);
router.get('/', listUsers);

module.exports = router;
