const authService = require('../services/auth.service.js');

//user login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authService.loginUser({ email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// user logout controller
const logout = async(req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
}

module.exports = {
  login, 
  logout
};