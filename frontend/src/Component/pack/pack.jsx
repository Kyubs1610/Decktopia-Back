import React from "react";
import "./pack.css";
// import Header from "..//Header_and_footer/header";
import { useState } from "react";

export default function CardFlip() {
                  const [flippedCards, setFlippedCards] = useState([]);
                  const [packOpened, setPackOpened] = useState(false);
                
                  const flip = (event, index) => {
                    event.preventDefault();
                    if (!flippedCards.includes(index)) {
                      setFlippedCards([...flippedCards, index]);
                    } else {
                      setFlippedCards(flippedCards.filter((cardIndex) => cardIndex !== index));
                    }
                  };
                
                  const togglePack = () => {
                    setPackOpened(!packOpened);
                  };
                
                  return (
                    <div>
                      <button className="btn-open" onClick={togglePack}>
                        Open This Pack
                      </button>
                      <div
                        id="pack-opened"
                        className={`pack-content ${packOpened ? "open" : ""}`}
                      >
        <div
          className="pack-content"
          style={{ display: "block", visibility: "visible" }}
        >
          <div className="pack-flash">
            <div className="pack-flash-pack">
              <img
                className="front"
                src="../..//..//src/Asset/card_and_pack/back.png"
              />
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
                      <img
                        src="https://i.imgur.com/DzEYvSP.png"
                        style={{ width: "81px" }}
                      />
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
                  <div
                    className={`card charizard animated ${
                      flippedCards.includes(0) ? "flipped" : ""
                    }`}
                    style={{
                      width: "278px",
                      height: "409px",
                      marginTop: "0px",
                    }}
                  ></div>
                  <div className="tras">
                   </div>
                </div>
              </li>

              <li className="card-02 gold">
                <div className="carta" onClick={(e) => flip(e, 1)}>
                  <div className="frente">
                    <img src="" />
                  </div>
                  <div className="tras">
                    <img src="https://cdn.discordapp.com/attachments/989739808286974002/1077894624015810590/back.png" />
                  </div>
                </div>
              </li>

              <li className="card-03 silver">
                <div className="carta" onClick={(e) => flip(e, 2)}>
                  <div className="frente">
                    <img src="https://images.pokemoncard.io/images/swsh6/swsh6-157_hires.png" />
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
  

  )};  