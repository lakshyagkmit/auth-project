const validateEmail = require('../validators/email.validate.js');
const userService = require('../services/users.service.js');

// create user controller
exports.CREATE = async (req, res) => {
  const { name, email, password } = req.body;

  try {
     if (!email|| !name || !password ){
      return res.status(400).json({ message: 'Invalid input' });
    }

    if (!validateEmail(email)) {
      return res.status(422).json({ message: 'Invalid email format' });
    }

    const user = userService.register({ name, email, password });

    res.status(201).json(user);
  } catch (error) {
    res.status(error.code).json({ message: error.message });
  }
};
