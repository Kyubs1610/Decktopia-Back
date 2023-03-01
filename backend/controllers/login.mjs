import { Pool } from "../config/dbPool.mjs";
import bcrypt from "bcrypt";
// import { promisify } from "util";
// import JWT from "jsonwebtoken";
// const sign = promisify(JWT.sign);



//login
export const login = async (req, res) => {
      const { email, password } = req.body;
 
  // Check if email and password are present
  if (!email || !password) {
    return res.status(400).send({ error: "Email and password are required" });
  }
  try {
    // Query the database for a user with the given email
    const query = await Pool.query(
      "SELECT username, email, password FROM users WHERE email = $1",
      [email]
    );
    // If no user is found, return 404 error
    if (query.rowCount === 0) {
      return res.status(404).send({ error: "User not found" });
    }
    // If a user is found, compare the password hash with the given password
    const result = query.rows[0];
    const match = await bcrypt.compare(password, result.password);

    // If the passwords don't match, return 401 error
    if (!match) {
      return res.status(401).send({ error: "Incorrect password" });
    }
    // Send a success response
    res.status(200).send({ message: "Login successful" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
};

  


// get one user
export const oneUser = async (req, res) => {
  const { id } = req.params
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




