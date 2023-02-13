import { Pool } from "../config/dbPool.mjs";

// register
export const register = async (req, res) => {
    const { id, username, email, password } = req.body;
    
    if ( !username || !email || !password ) {
        return res.status(400).send({ message: "Please fill all the fields" });
    }

    try {
        // const hashedPassword = await bcrypt.hash(password, 10);
        await Pool.query(
            "INSERT INTO users ( id, username, email, password) VALUES ($1, $2, $3,$4) RETURNING *",
            [ id, username, email, password]
        );
        res.status(200).send({ message: "User created successfully"});
    } catch (error) {
        console.error(error.message);
    }
}
// delete user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await Pool.query("DELETE FROM users WHERE id = $1", [id]);
        res.json("User was deleted!");
    } catch (error) {
        console.error(error.message);
    }
}