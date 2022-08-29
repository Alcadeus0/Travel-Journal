import React from "react";
import Pin from "../assets/placeholder.png"

export default function Card(props){
    return (
        <section>
            <img className="scene" src={props.imageURL}></img>
            <div>
                <div className="info">
                    <img src={Pin}></img>
                    <div>{props.location}</div>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>
                    {props.title}
                </h1>
                <h4>
                    {props.startDate} - {props.endDate}
                </h4>
                <p>{props.description}</p>
            </div>
        </section>
    )
}