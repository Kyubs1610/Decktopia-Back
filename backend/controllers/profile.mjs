import { Pool } from "../config/dbPool.mjs";

import { promisify } from "util";
import JWT from "jsonwebtoken";
const sign = promisify(JWT.sign);

// get one user
export const oneUser = async (req, res) => {
  try {
  await Pool.query("SELECT * FROM users WHERE id = $1",
    [id])
  } catch (error) {
    console.error(error.message)
  }
}

// get all users
export const getUsers = async (req, res) => {
  try {
      const allUsers = await Pool.query("SELECT * FROM users");
      res.json(allUsers.rows);
  } catch (error) {
      console.error(error.message);
  }
};

export const getUserByName = async (req, res) => {
  const { user_name } = req.params
  try {
    await Pool.query("SELECT * FROM users WHERE id = $1", [id])
  } catch (error) {
    console.error(error.message);
  }
};
