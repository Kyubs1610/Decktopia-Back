import React from "react";
import "./pack.css";
import Header from "..//Header_and_footer/header";

export default function Pack() {
    return (
        <>
            <Header /> <br /><br /><br /><br />
            <div className="pack">
                <div className="main">
                    <h3>Buy a pack</h3>

                    <a><img src="../..//..//src/Asset/card_and_pack/shibs.png"></img></a>

                    <a href="/collection"><button>see collection</button></a>
                </div>
            </div>
        </>
    )
}