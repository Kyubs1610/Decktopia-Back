import { Pool } from "../config/dbPool.mjs";

export const initAllCards = async (req, res) => {
  try {
    const allCards = await Pool.query("SELECT * FROM cards");
    if (allCards.rows.length < 3) {
      console.log("CARD DB INIT")
      var data = [["aang", "card-aang.jpg"], ["Fox", "card-Fox.png"], ["goku", "card-goku.jpg"], ["Kratos", "card-Kratos.png"], ["kyubsninos", "card-kyubsninos.png"], ["Lara", "card-Lara.png"], ["Manga", "card-Manga.png"], ["mario", "card-mario.jpg"], ["mickey", "card-mickey.jpg"], ["optimus", "card-optimus.jpg"], ["pikachu", "card-pikachu.jpg"], ["shibs", "card-shibs.png"], ["Sonic", "card-Sonic.png"], ["TLOU_2", "card-TLOU_2.png"], ["totoro", "card-totoro.jpg"], ["vador", "card-vador.jpg"], ["yoda", "card-yoda.jpg"], ["zidane", "card-zidane.jpg"]];
      for (let i = 0, len = data.length; i < len; i++) { 
        createCard(data[i][0], data[i][1])
      }
    }
  } catch (error) {
    console.log("Error while cards init: " + error.message);
  }
}

// get a random selection of cards
export const getRandomCards = async (req, res) => {
  try {
    const randomCards = await Pool.query("SELECT * FROM cards ORDER BY random() LIMIT 3");
    res.json(randomCards.rows);
  } catch (error) {
    console.error(error.message);
  }
};

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
// export const createCard = async (req, res) =>{
//     const { user_id } = 1; //req.user based on the user that is logged in
//     try {
//         const { card_name, card_value, card_exp  } = req.body;
//         const newCard = await Pool.query("INSERT INTO cards (card_name, card_value, card_exp) VALUES ($1, $2, $3) RETURNING *",
//         [card_name, card_value, card_exp]);
//         res.json(newCard.rows[0]);
//     } catch (error) {
//         console.error(error.message);
//     }
// }

export const createCard = (card_name, card_filename, card_value = 1) => {
  try {
    Pool.query("INSERT INTO cards (card_name, card_value, card_filename) VALUES ($1, $2, $3) RETURNING *", [card_name, card_value, card_filename]);
  } catch (error) {
    console.error(error.message);
  }
}

// Insert into collection
export const insertCollection = async (id_user, id_card) => {
  try {
    await Pool.query("INSERT INTO collection_per_user (user_id, card_id) VALUES ($1, $2) RETURNING *", [id_user, id_card])
  } catch (error) {
    console.error(error.message);
  }
};

export const givePack = async (req, res) => {
  const { user_id, number_cards } = req.params;
  try {
    const cards = await Pool.query("SELECT * FROM cards ORDER BY random() LIMIT $1", [number_cards]);
    for (const row of cards.rows) {
      insertCollection(user_id, row.cards_id)
    }
    res.json("Pack of " + number_cards + " cards given to " + user_id + "!")
  } catch (error) {
    console.error(error.message);
  }
};

export const getCollection = async (req, res) => {
  const { user_id } = req.params;
  try {
    const cards = await Pool.query("SELECT * FROM collection_per_user WHERE user_id = $1", [user_id]);
    res.json(cards.rows);
  } catch (error) {
    console.error(error.message);
  }
};

// Give card
export const giveCard = async (req, res) => {
  try {
    const test = await Pool.query("SELECT * FROM collection_per_user");
    res.json(test.rows);
  } catch (error) {
  }
};

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
