import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import data from "./data";


export default function App(){
    const cards = data.map(item => {
        return (
            <Card
                title = {item.title}
                location = {item.location}
                googleMapsUrl ={item.googleMapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                imageURL = {item.imageUrl}
            />
        )
    })

    return (
        <div>
            <Navbar/>
            {cards}
        </div>
    )
}