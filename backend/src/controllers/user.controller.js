const UserModel = require("../models/user.model");

// Create a user
const addUser = async (req, res) => {
  const { email, password, userId } = req.body;
  const newUser = { email, password, userId };
  const user = await UserModel.create(newUser);
  res.status(200).json({ user });
};

// Get all users
const getAllUsers = async (req, res) => {
  const users = await UserModel.findAll({});
  const usersAttr = await UserModel.findAll({
    attributes: ["email"],
  });
  res.status(200).json({ users, usersAttr });
};

// Get single user
const getOneUser = async (req, res) => {
  const { id } = req.params;
  const userByPK = await UserModel.findByPk(id);
  res.status(200).json({ userByPK });
};

// Get single user
const getTotalUsers = async (req, res) => {
  const totalUsers = await UserModel.count();
  res.status(200).json({ totalUsers });
};

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password, userId } = req.body;
  const newUser = { email, password, userId };
  const updatedUser = await UserModel.update(newUser, {
    where: { id },
  });
  res.status(200).json({ updatedUser });
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await UserModel.destroy({
    where: { id },
  });
  res.status(200).json({ deletedUser });
};

module.exports = {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  getTotalUsers
};
