const jwt = require('jsonwebtoken');
const authService = require('../services/auth.service');

// check if user is authenticated or not
const checkAuthentication = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await authService.checkAuth(decoded);

      next(); 
    } catch (error) {
      return res.status(401).json({message: error.message});
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated, no token' });
  }
};

module.exports = { checkAuthentication };
