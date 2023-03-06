import { Pool } from "../config/dbPool.mjs";
import bcrypt from "bcrypt";

import { insertCollection } from "./cards.mjs"

// register
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if ( !username || !email || !password ) {
    return res.status(400).send({ message: "Please fill all the fields" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await Pool.query(
      "INSERT INTO users (  username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [  username, email, hashedPassword]
    );
    const new_id = await Pool.query("SELECT id FROM users WHERE username = $1", [username])
    const userid = new_id.rows[0]["id"]
    const free_cards = await Pool.query("SELECT * FROM cards ORDER BY random() LIMIT 3");
    for (const row of free_cards.rows) {
      insertCollection(userid, row.cards_id)
    }
    res
      .cookie('user_name', username, { expires: 0, sameSite: "Lax"})//, httpOnly: false }) //http_only false for JS
      .status(200).send({ message: "User created successfully"})
  } catch (error) {
    console.error(error.message);
  }
}
// delete user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Pool.query("DELETE FROM users WHERE user_id = $1", [id]);
    res.json("User was deleted!");
  } catch (error) {
    console.error(error.message);
  }
}

// forgot password
export const forgotPassword = async ( req, res ) =>{
    try {
        const { id } = req.params
        const { password } = req.body
        await Pool.query(
        "UPDATE users SET password = $1 WHERE user_id = $2",
        [password, id]);
        res.json("Password was updated")
        
    } catch (error) {
        console.error(error.message)
        res.status(500)
        .send({ message: error.message});
    }
}

