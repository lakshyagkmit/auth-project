const User = require('../models/User.js');
const { comparePassword } = require('../utils/password.js');
const generateToken = require('../utils/generateJwtToken.js');
const CustomError = require('../utils/customError'); 


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

module.exports = {
  loginUser
}