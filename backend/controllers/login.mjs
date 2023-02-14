import { Pool } from "../config/dbPool.mjs";

//login
export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ message: "Please fill all the fields" });
    }
  
    try {
      const result = await Pool.query("SELECT * FROM users WHERE email = $1", [email]);
      if (result.rows.length === 0) {
        return res.status(401).send({ message: "Email or password is incorrect" });
      }
      res.status(200).send({ message: "User logged in successfully" });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send({ message: "An error occurred while trying to log in" });
    }
  };
        // const validPassword = await bcrypt.compare(password, user.rows[0].password);
        // if (!validPassword) {
        //     return res.status(401).send({ message: "Email or password is incorrect" });
        // }
        // const token = jwtGenerator(user.rows[0].id);
        // res.json({ token });

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




