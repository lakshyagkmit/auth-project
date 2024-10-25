// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth.controller.js');

// Public route
router.post('/login', login);



module.exports = router;
