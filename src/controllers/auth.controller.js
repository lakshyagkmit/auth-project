const validateEmail = require('../validators/email.validate.js');
const authService = require('../services/auth.service.js');

//user login controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    if (!email|| !password ){
      return res.status(400).json({ message: 'Invalid input' });
    }

    if (!validateEmail(email)) {
      return res.status(422).json({ message: 'Invalid email format' });
    }  

    const user = await authService.loginUser({ email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};