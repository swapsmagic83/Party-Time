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

    const generateEventLink = () => {
        if (!hostDetails) return;
        const eventData = {
             heading: encodeURIComponent(cardData.heading),
             headingColor: encodeURIComponent(cardData.headingColor),
             date: encodeURIComponent(cardData.date),
             dateColor: encodeURIComponent(cardData.dateColor),
             info: encodeURIComponent(cardData.info),
             infoColor: encodeURIComponent(cardData.infoColor),
             address: encodeURIComponent(cardData.address),
             addressColor: encodeURIComponent(cardData.addressColor),   
             card:encodeURIComponent(selectedCard), 
             host: encodeURIComponent(hostDetails.hostName)}
        const queryString = Object.keys(eventData)
             .map(key => `${key}=${eventData[key]}`)
             .join('&')
        // const queryString = new URLSearchParams(eventData).toString()
        return `https://party-time-react.netlify.app/view?${queryString}`
    }

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
                eventUrl={generateEventLink()}/> )}
        </div>
    )
}
export default Card;