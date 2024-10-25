// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { create, get } = require('../controllers/users.controller.js');
const { checkAuthentication } = require('../middlewares/auth.middleware.js');


// Public route
router.post('/', create);

//Protected route
router.get('/', checkAuthentication, get);


module.exports = router;
