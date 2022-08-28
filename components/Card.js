import React from "react";
import Pin from "../assets/Path.png"

export default function Card(props){
    return (
        <section>
            <img src={props.imageURL}></img>
            <div>
                <div>
                    <img src={Pin}></img>
                    <h6>{props.location}</h6>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3>
                    {props.title}
                </h3>
                <h4>
                    {props.startDate} - {props.endDate}
                </h4>
                <p>{props.description}</p>
            </div>
        </section>
    )
}