import React from "react";
import { useLocation } from "react-router-dom";
import './Card.css'

const ResultCard = () =>{
    const {search} = useLocation()
    const params = new URLSearchParams(search)
    const heading = params.get("heading")
    const headingColor = params.get("headingColor") || "#000000"
    const date = params.get("date");
    const dateColor = params.get("dateColor") || "#000000"
    const info = params.get("info");
    const infoColor = params.get("infoColor") || "#000000"
    const address = params.get("address");
    const addressColor = params.get("addressColor") || "#000000"
    const host = params.get("host");
    const card = decodeURIComponent(params.get("card") ||""); 
    return (
        <div className="editor-container">
            <div className="Card-container">
                {card && <img className="Card-image" src={card} alt="Invitation Card" />}
                <div className="heading-overlay-text">
                <h3 style={{color: headingColor}}>{heading}</h3>    
                </div>
                <div className="overlay-text">
   
                      <h4 style={{color:infoColor}}>{info}</h4>
                    <h4 style={{color:dateColor}}>{date}</h4>
                   <h4 style={{color:addressColor}}>{address}</h4></div>
            </div>
            <p>Hosted by: {host}</p>
        </div>
    
    )
}
export default ResultCard;