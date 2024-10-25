// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/auth.controller.js');
const { checkAuthentication } = require('../middlewares/auth.middleware.js');
const { registerValidateSchema, loginValidateSchema } = require('../validators/auth.validator.js');

// Public route
router.post('/register', registerValidateSchema, register);
router.post('/login', loginValidateSchema, login);

// Protected route
router.post('/logout', checkAuthentication, logout);

module.exports = router;
