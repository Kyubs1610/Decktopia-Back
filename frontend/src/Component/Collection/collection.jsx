import "./collection.css";
import cards from "../pack/cards.json";
import displayCards from './displayCards';

import Header from "..//Header_and_footer/header";

function Collection() {

    const display = () => {
        displayCards(cards);
    }

    return (
        <div>
            <Header /> <br /><br /><br /><br />

            <div id='collection'>
                <h1>collection</h1>
                <button onClick={display}></button>
                <div id='cardsCollection'>
                </div>
            </div>
        </div>
    );
}

export default Collection;
