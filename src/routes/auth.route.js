// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login, logout } = require('../controllers/auth.controller.js');
const { checkAuthentication } = require('../middlewares/auth.middleware.js'),
const { loginValidateSchema } = require('../validators/auth.validator.js');

// Public route
router.post('/login', loginValidateSchema, login);

// Protected route
router.post('/logout', checkAuthentication, logout);

module.exports = router;
