import Express from "express";
import bodyParser from "body-parser";
import cookie from "cookie-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect.mjs";
import { register, deleteUser,forgotPassword } from "./controllers/register.mjs";
import { login, getUsers } from "./controllers/login.mjs";
import { getCards, getCard, createCard, updateCard, deleteCard } from "./controllers/cards.mjs";

// connection server
dotenv.config();
const server = Express();
const PORT = process.env.PORT || 3000;
// connection database
dbConnect()
// body parser
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
// cookie parser
server.use(cookie(process.env.SECRET_JWT));
// routes
server.get("/", (req, res) => {
    res.send("Home page");
});
server.get("/logout", (req, res) => {
    res.send("Home page");
}); //define the home page and use the render method to render the index.ejs file


server.post("/register", register); //reigister
server.put("/register/:id", forgotPassword) //update  user password
server.post("/login", login); //login
server.get("/users", getUsers); //get all users
server.get("/users/:id", getUsers); //get userProfile
server.delete("/users/:id", deleteUser) //delete user
server.get("/cards", getCards); //get all cards
server.get("/cards/:card_id", getCard); //get one card
server.post("/card", createCard); //create a card
server.put("/card/:card_id", updateCard); //update a card
server.delete("/card/:card_id", deleteCard); //delete a card


server.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
