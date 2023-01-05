//@ts-nocheck
import usersModel from "../models/usersModel";
import { connection } from "../models/connection";

const getAllUsers = async (_req, res) => {
  const users = await usersModel.getAllUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const user = await usersModel.getUserById();

  return res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { userId } = req.params;

  await usersModel.updateUser(userId, req.body);

  return res.status(204).json();
};

const deleteUser = async (req, res) => {
  const q = "DELETE FROM users WHERE id = ?";

  const [rows] = await connection.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
  });

  return res.status(204).json("Deletado!");
};

export default { getAllUsers, getUserById, updateUser, deleteUser };
