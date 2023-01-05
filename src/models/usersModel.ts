import { UserProps } from "../types";
import { connection } from "./connection";

const getAllUsers = async () => {
  const [users] = await connection.execute("SELECT * FROM users");
  return users;
};

const getUserById = async (userId: string) => {
  const [user] = await connection.query(
    `SELECT * FROM users WHERE id = ${userId}`
  );

  return user;
};

const updateUser = async (userId: string, user: UserProps) => {
  const { name, email, country } = user;

  const [updatedUser] = await connection.query(
    "UPDATE users SET name = ?, email = ?, country = ? WHERE id = ?",
    [name, email, country, userId]
  );

  return [updatedUser];
};

export default { getAllUsers, getUserById, updateUser };
