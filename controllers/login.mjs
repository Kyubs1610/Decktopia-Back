import { Pool } from "../config/dbPool.mjs";

//login
export const login = async (req, res) => {
    const { email, password } = req.body;
    if ( !email || !password ) {
        return res.status(400).send({ message: "Please fill all the fields" });
    }
    try {
        const user = await Pool.query(
            "SELECT * FROM registers WHERE email = $1",
            [email]
        );
        // if (user.rows.length === 0) {
        //      res.status(401).send({ message: "Email or password is incorrect" });
        // } else {
            res.status(200).send({ message: "User logged in successfully"});
        } catch (error) {
            console.error(error.message);
        }
    }

        // const validPassword = await bcrypt.compare(password, user.rows[0].password);
        // if (!validPassword) {
        //     return res.status(401).send({ message: "Email or password is incorrect" });
        // }
        // const token = jwtGenerator(user.rows[0].id);
        // res.json({ token });
    