// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { CREATE } = require('../controllers/users.controller.js');


// Public route
router.post('/', CREATE);


module.exports = router;
