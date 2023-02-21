import React from "react";
import "./pack.css";
import Header from "..//Header_and_footer/header";


export default function Pack() {
    return (
        <>
            <Header /> <br /><br /><br /><br />
            <div className="pack">
                
                    <h3>Buy a pack</h3>

                    <a><img className="packes" alt="cards" src="../..//..//src/Asset/card_and_pack/back.png" /></a>

                    <a href="/collection"><button>see collection</button></a>
                </div>
            
        </>
    )
}