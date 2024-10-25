// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { CREATE } = require('../controllers/users.controller.js');


// Public routes
router.post('/', CREATE);


module.exports = router;
