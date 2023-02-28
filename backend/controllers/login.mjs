import { Pool } from "../config/dbPool.mjs";
import bcrypt from "bcrypt";
import { promisify } from "util";
import JWT from "jsonwebtoken";
const sign = promisify(JWT.sign);

//login
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send({ error: "invalid request" });

  const query = await Pool.query(
    "SELECT username, email, password FROM users WHERE email = $1",
    [email]
  );

  if (query.rowCount === 0) {
    return res.status(404).send({ error: "user do not exists" });
  }

  const result = query.rows[0];
  const match = await bcrypt.compare(password, result.password);

  if (match) {
    try {
      const token = await sign({ email }, process.env.SECRET_JWT, {
        algorithm: "HS512",
        expiresIn: "1h",
      });
      console.log(token);
      // return res.send({ token });  => it works when asking to response send the token, but "cannot generate" when sending to the cookie
      res.cookie("access_token", token, {
        httpOnly: true,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).send({ error: "Cannot generate token" });
    }
  } else {
    return res.status(403).send({ error: "wrong password" });
  }
};

// get one user
export const oneUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await Pool.query("SELECT * FROM users WHERE id = $1", 
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
}

//logout
export const logout = async ( req, res ) =>{
  const { id } = req.params
  try {
    const logout = await Pool.query(
      "SELECT * FROM users where id = $1",
      [id]
    )
    if (logout.rows.length === 0) {
      return res.status (404)
      .send({ message: "succesfully logged out " })
    }
    } catch (error) {
      console.error(error.message)
      res.status(500).send({ message: "An error occurred while trying to log out" }
    )}
  }




