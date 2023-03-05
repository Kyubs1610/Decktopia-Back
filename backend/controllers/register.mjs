import { Pool } from "../config/dbPool.mjs";
import bcrypt from "bcrypt";



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
        res
        .cookie('rememberme222', '122222', { expires: new Date(Date.now() + 900000), httpOnly: true })
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

