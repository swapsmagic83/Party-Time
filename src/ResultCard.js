import React from "react";
import { useLocation } from "react-router-dom";
import './Card.css'

const ResultCard = () =>{
    const {search} = useLocation()
    const params = new URLSearchParams(search)
    const heading = decodeURIComponent(params.get("heading") || "")
    const headingColor = decodeURIComponent(params.get("headingColor") || "#000000")
    const date = decodeURIComponent(params.get("date") || "")
    const dateColor = decodeURIComponent(params.get("dateColor") || "#000000")
    const info = decodeURIComponent(params.get("info") || "")
    const infoColor = decodeURIComponent(params.get("infoColor") || "#000000")
    const address = decodeURIComponent(params.get("address") || "")
    const addressColor = decodeURIComponent(params.get("addressColor") || "#000000")
    const host = decodeURIComponent(params.get("host") || "")
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
            <p> You Are Invited By: {host}</p>
        </div>
    
    )
}
export default ResultCard;