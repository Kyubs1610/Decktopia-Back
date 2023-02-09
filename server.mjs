import Express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect.mjs";
import { register } from "./controllers/register.mjs";
import { login } from "./controllers/login.mjs";

// connection server
dotenv.config();
const server = Express();
const PORT = process.env.PORT || 3000;
// connection database
dbConnect()
// body parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
// routes
server.get("/", (req, res) => {
    res.send("Hello World!");
});

server.post("/register", register);
server.post("/login", login);


server.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
