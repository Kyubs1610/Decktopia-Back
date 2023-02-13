import Express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect.mjs";
import { register, deleteUser } from "./controllers/register.mjs";
import { login, getUsers } from "./controllers/login.mjs";
import { getCards, getCard, createCard } from "./controllers/cards.mjs";

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
server.get("/users", getUsers);
server.delete("/users/:id", deleteUser)
server.get("/cards", getCards);
server.get("/cards/:card_id", getCard);
server.post("/card", createCard);


server.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
