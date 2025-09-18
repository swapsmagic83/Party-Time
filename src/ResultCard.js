import React from "react";

const ResultCard = ({selectedCard,heading,headingColor,date,dateColor,info,infoColor,address,addressColor,handleBack}) =>{
    return (
        <div className="editor-container">
            <div className="Card-container">
               <img className="Card-image" src={selectedCard}></img>
               <div className="heading-overlay-text">
               <h3 style={{color:headingColor}}>{heading}</h3>    
               </div>
               <div className="overlay-text">
                   <h6 style={{color:infoColor}}>{info}</h6>
                   <h4 style={{color:dateColor}}>{date}</h4>
                   <h4 style={{color:addressColor}}>{address}</h4></div>   
               </div>
               <button  onClick={handleBack}>Edit Card</button>
               {/* <button >NEXT</button> */}
        </div>
    )
}
export default ResultCard;