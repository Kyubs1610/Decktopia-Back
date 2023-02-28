import { Pool } from "../config/dbPool.mjs";

// cards
export const getCards = async (req, res) =>{
    try {
        const allCards = await Pool.query("SELECT * FROM cards");
        res.json(allCards.rows);
    } catch (error) {
        console.error(error.message);
    }

}
//get One card
export const getCard = async (req, res) =>{
    try {
        const { card_id } = req.params;
        const card = await Pool.query("SELECT * FROM cards WHERE card_id = $1", [card_id]);
        res.json(card.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
}

//create a card
export const createCard = async (req, res) =>{
    const { user_id } = 1; //req.user based on the user that is logged in
    try {
        const { card_name, card_value, card_exp  } = req.body;
        const newCard = await Pool.query("INSERT INTO cards (card_name, card_value, card_exp) VALUES ($1, $2, $3) RETURNING *",
        [card_name, card_value, card_exp]);
        res.json(newCard.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
}
// update a card
export const updateCard = async (req, res) =>{
    try {
        const { card_id } = req.params;
        const { card_name, card_value, card_exp } = req.body;
        const updateCard = await Pool.query("UPDATE cards SET card_name = $1, card_value = $2, card_exp = $3 WHERE card_id = $4",
        [card_name, card_value, card_exp, card_id]);
        res.json("Card was updated");
    } catch (error) {
        console.error(error.message);
    }
}
// delete a card
export const deleteCard = async (req, res) =>{
    try {
        const { card_id } = req.params;
    await Pool.query("DELETE FROM cards WHERE card_id = $1", [card_id]);
        res.json("Card was deleted");
    } catch (error) {
        console.error(error.message);
    }
}