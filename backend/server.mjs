import Express from "express";
import bodyParser from "body-parser";
import cookie from "cookie-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect.mjs";
import { register, deleteUser,forgotPassword } from "./controllers/register.mjs";
import { login } from "./controllers/login.mjs";
import { getUsers, getUserByName } from "./controllers/profile.mjs";
import { getCards, getCard, getRandomCards, giveCard, getCollection, givePack, createCard, updateCard, deleteCard, initAllCards } from "./controllers/cards.mjs";

// connection server
dotenv.config();
const server = Express();
const PORT = process.env.PORT || 3000;
// connection database
dbConnect()
// Cors, make it compatible with frontend fetch
server.use(cors({
  origin: true,
  credentials: true,
}));
// body parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
// cookie parser
server.use(cookie(process.env.JWT));
// routes
server.get("/", (req, res) => {
    res.send("Home page")
});
server.get("/logout", (req, res) => {
    res.send("Home page");
}); //define the home page and use the render method to render the index.ejs file

initAllCards();

server.post("/register", register); //reigister
server.put("/register/:id", forgotPassword) //update  user password
server.post("/login", login); //login
server.get("/users", getUsers); //get all users
server.get("/users/:id", getUsers); //get userProfile
server.get("/user/:user_name", getUserByName); //get userProfileByName
server.delete("/users/:id", deleteUser) //delete user
server.get("/cards", getCards); //get all cards
server.get("/randomcards", getRandomCards); //get all cards
server.get("/givecard", giveCard); //get all cards
server.get("/collection/:user_id", getCollection); //get all cards
server.get("/givepack/:user_id/:number_cards", givePack); //get nbr cards to id user
// server.get("/cards/:card_id", getCard); //get one card
// server.post("/card", createCard); //create a card
// server.put("/card/:card_id", updateCard); //update a card
// server.delete("/card/:card_id", deleteCard); //delete a card


server.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
