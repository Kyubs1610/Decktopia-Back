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
            "INSERT INTO registers ( id, username, email, password) VALUES ($1, $2, $3,$4) RETURNING *",
            [ id, username, email, password]
        );
        res.status(200).send({ message: "User created successfully"});
    } catch (error) {
        console.error(error.message);
    }
}