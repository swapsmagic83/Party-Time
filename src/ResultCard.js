import React,{useState} from "react";
import HostDetails from "./HostDetails";
import ShareInvite from "./ShareInvite";
const ResultCard = ({selectedCard,heading,headingColor,date,dateColor,info,infoColor,address,addressColor,handleBack}) =>{
    // const [hostName,setHostName] = useState('')
    // const [hostPhone,setHostPhone] = useState('')
    // const [hostEmail,setHostEmail] =useState('')
    // const [hostAddress, setHostAddress] =useState('')
    // const [hostDetails,setHostDetails] = useState(null)
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
               {/* <button  onClick={handleBack}>Edit Card</button> */}
               {/* <button >NEXT</button> */}
              {/* {!hostDetails && (<HostDetails handleBack={handleBack}
               onSubmit={(details)=>setHostDetails(details)}  hostDetails={hostDetails}
               selectedCard={selectedCard}
               />)}
               {hostDetails !== null &&
                <ShareInvite 
                hostName={hostDetails.hostName}
                hostPhone={hostDetails.hostPhone}
                hostEmail={hostDetails.hostEmail}
                hostAddress={hostDetails.hostAddress}
                eventUrl="http://localhost:3000/edit"/> } */}
    
        </div>
    )
}
export default ResultCard;