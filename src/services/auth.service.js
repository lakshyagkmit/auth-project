const User = require('../models/User.js');
const { comparePassword } = require('../utils/password.js');
const { generateToken } = require('../utils/generateJwtToken.js');
const CustomError = require('../utils/customError'); 
const userService = require('./users.service.js');

const registerUser = async({name, email, password}) => {
  const user = await userService.createUser({name, email, password});

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    token: user.token
  }
}

// Authenticate a user during login
const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError('User not found', 404);
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new CustomError('Incorrect credentials', 401);
  }

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  };
};

// check user authentication
const checkAuth = async(decoded) => {
  const user = await User.findById(decoded.id).select('-password');

  if(!user){
    throw new Error('Not authenticated, token failed');
  }
  return user;
}

module.exports = {
  registerUser,
  loginUser,
  checkAuth
}