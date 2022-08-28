import React from "react";
import Globe from "../assets/globe.png"

export default function Navbar(){
    return (
        <nav>
            <img src={Globe} />
            <h3>my travel journal</h3>
        </nav>
    )
}