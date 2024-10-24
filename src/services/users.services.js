const User = require('../models/User.js');
const { hashPassword } = require('../utils/password.js');
const generateToken = require('../utils/generateJwtToken.js');


// Register a new user
const register = async ({ name, email, password }) => {
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('User already exists', { code: 409 });
  }

  const hashedPassword = await hashPassword(password);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  };
};



module.exports = {
  register
};