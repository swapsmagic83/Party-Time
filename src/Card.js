import React, { useState} from "react";
import './Card.css'
import HostDetails from "./HostDetails";
import ShareInvite from "./ShareInvite";
import EventForm from "./EventForm";

const Card = ({selectedCard}) =>{
   
    const [cardData,setCardData] = useState({
        heading:'',
        headingColor:'#000000',
        date:'',
        dateColor:'#000000',
        info:'',
        infoColor:'#000000',
        address:'',
        addressColor:'#000000'
    })

    const [stage,setStage] = useState('editForm')
    const [hostDetails,setHostDetails] = useState(null)

    return (

        <div className="editor-container">
            
            {selectedCard && (
            <div className="Card-container">
               
            <img className="Card-image" src={selectedCard} alt="Invitation Card"></img>
            <div className="heading-overlay-text">
            <h3 style={{color:cardData.headingColor}}>{cardData.heading}</h3>    
            </div>
            <div className="overlay-text">

                <h4 style={{color:cardData.infoColor}}>{cardData.info}</h4>
                <h4 style={{color:cardData.dateColor}}>{cardData.date}</h4>
                <h4 style={{color:cardData.addressColor}}>{cardData.address}</h4></div>
                
            </div>)}

            {stage === 'editForm' && selectedCard &&
                (<EventForm 
                selectedCard={selectedCard}
                cardData={cardData}
                setCardData={setCardData}
                handleDone={()=>setStage('preview')}
                />)}

            {stage === "preview" && (
                  <div className>
                    <button onClick={() => setStage("editForm")}>Edit</button>
                    <button onClick={() => setStage("hostForm")}>Add Host Info</button>
                 </div>
                )}

            {stage ==='hostForm' &&
                (<HostDetails 
                handleBack={()=> setStage('editForm')}
                onHostSubmit={(details)=> {
                setHostDetails(details)
                setStage('guest')
                }}
                />)}

            
            {stage === 'guest' && hostDetails &&
                (<ShareInvite 
                hostName={hostDetails.hostName}
                hostPhone={hostDetails.hostPhone}
                hostEmail={hostDetails.hostEmail}
                hostAddress={hostDetails.hostAddress}
                eventUrl="https://party-time-react.netlify.app/"/> )}
        </div>
    )
}
export default Card;