const userService = require('../services/users.service.js');

// create user controller
const create = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await userService.register({ name, email, password });

    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//get user controller 
const get = async (req, res) => {
  try {
    const data = await userService.getUsersData();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  create,
  get
}