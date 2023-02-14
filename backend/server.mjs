import Express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect.mjs";
import { register, deleteUser,forgotPassword } from "./controllers/register.mjs";
import { login, getUsers, logout } from "./controllers/login.mjs";
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
    res.send("Home page");
});

server.post("/register", register); //reigister
server.put("/register/:id", forgotPassword) //update  user password
server.post("/login", login); //login
server.get("/users", getUsers); //get all users
server.delete("/users/:id", logout) //logout user it deletes the user
server.get("/users/:id", getUsers); //get userProfile
server.delete("/users/:id", deleteUser) //delete user
server.get("/cards", getCards); //get all cards
server.get("/cards/:card_id", getCard); //get one card
server.post("/card", createCard); //create a card


server.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
