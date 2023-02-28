import React from "react";
import "./pack.css";
import Header from "..//Header_and_footer/header";
import { useState } from "react";

import pickRandom from "./random";
import cards from "./cards.json";

var cardArray;

var card1 = "";

var card2 = "";

var card3 = "";

var card4 = "";

export default function CardFlip() {

    const [flippedCards, setFlippedCards] = useState([]);
    const [packOpened, setPackOpened] = useState(false);
                
    const flip = (event, index) => {
        event.preventDefault();
        const cards = document.getElementsByClassName("carta");
        const card = cards[index];
        if (card.style.transform === "rotateY(180deg)") {
            card.style.transform = "rotateY(0deg)";
        } else {
            card.style.transform = "rotateY(180deg)";
        }
    }
    
                
    const togglePack = () => {
        setPackOpened(!packOpened);

        if(!packOpened){
            cardArray = pickRandom(cards);
            console.log(cardArray);

            card1 = cardArray[0].name;

            card2 = cardArray[1].name;

            card3 = cardArray[2].name;

            card4 = cardArray[3].name;
        }
       
    };
            
    return (
        <>
            <div>
                 <Header /> <br /><br /><br /><br />
                <div id="pack-opened" className={`pack-content ${packOpened ? "open" : ""}`}>
                    <div className="pack-content" style={{ display: "block", visibility: "visible" }}>
                        <div className="pack-flash">
                            <div className="pack-flash-pack">
                                <img className="front" src="https://cdn.discordapp.com/attachments/989739808286974002/1077894624015810590/back.png"/>
                                
                                <div className="top">
                                    <img src="https://i.imgur.com/b1qmOW6.png" />
                                    
                                    <div className="cut">
                                        <img src="https://i.imgur.com/k55nnYY.png" />
                                    </div>

                                    <span>
                                        <img src="https://i.imgur.com/JqedAsJ.png" />

                                        <span>
                                            <img src="https://i.imgur.com/WWRXjri.png" />
                                            
                                            <span>
                                                <img src="https://i.imgur.com/DzEYvSP.png" style={{ width: "81px" }}/>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                         <div className="cards-reveal">
                            <ul>
                                <li className="card-01">
                                    <div className="carta" onClick={(e) => flip(e, 0)}>
                                        <div className={`card ${card1} animated ${flippedCards.includes(0) ? "flipped" : ""}`} style={{width: "278px",height: "409px",marginTop: "0px",}}></div>
                                    </div>
                                </li>

                                <li className="card-02 gold">
                                    <div className="carta" onClick={(e) => flip(e, 1)}>
                                        <div className="frente">
                                            <div className={`card ${card2}`} style={{ width: "278px", height: "409px", marginTop: "0px", }}></div>
                                        </div>
                                        
                                        <div className="tras">
                                            <img src="https://cdn.discordapp.com/attachments/989739808286974002/1077894624015810590/back.png" />
                                        </div>
                                    </div>
                                </li>

                                <li className="card-03 silver">
                                    <div className="carta" onClick={(e) => flip(e, 2)}>
                                        <div className="frente">
                                            <div className={`card ${card3}`} style={{ width: "278px", height: "409px", marginTop: "0px", }}></div>
                                        </div>
                  
                                        <div className="tras">
                                            <img src="https://cdn.discordapp.com/attachments/989739808286974002/1077894624015810590/back.png" />
                                        </div>
                                    </div>
                                </li>
              
                                <li className="card-04 bronze">
                                    <div className="carta" onClick={(e) => flip(e, 3)}>
                                        <div className="frente">
                                            <div className={`card ${card4}`} style={{ width: "278px", height: "409px", marginTop: "0px", }}></div>
                                        </div>
                 
                                        <div className="tras">
                                            <img src="https://cdn.discordapp.com/attachments/989739808286974002/1077894624015810590/back.png" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
  
            <button className="btn-open" onClick={togglePack}>Open This Pack</button>
        </>
    )
    
} 
