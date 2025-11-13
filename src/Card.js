import React, { useState, useEffect} from "react";
import './Card.css'
import HostDetails from "./HostDetails";
import ShareEmailInvite from "./ShareEmailInvite";
import EventForm from "./EventForm";
// import ShareWhatsAppInvite from "./ShareWhatsAppInvite";
import EventApi from "./api";

const Card = ({selectedCard,setInviteId,inviteId}) =>{
// console.log('local',localStorage)
    const [cardData,setCardData] = useState({
        heading:'',
        headingColor:'#000000',
        date:'',
        dateColor:'#000000',
        info:'',
        infoColor:'#000000',
        address:'',
        addressColor:'#000000'
    });
    
    const [hostDetails,setHostDetails] = useState({
        hostName: '',
        hostPhone:'',
        hostEmail:'',
        hostAddress:''
    });

    const [stage,setStage] = useState(() =>{
        const saveStage = localStorage.getItem('stage');
        if(saveStage) {
            return (JSON.parse(saveStage))};
        return 'editForm' ;
    });
    

    //restore saved data
    useEffect(()=>{
        const saveForm = localStorage.getItem('eventCardData');
        const saveHost = localStorage.getItem('hostDetails');
        if(saveForm) setCardData(JSON.parse(saveForm));
        if(saveHost && saveHost != 'null') setHostDetails(JSON.parse(saveHost));
    },[]);

    //saving data
    useEffect(()=>{
        if(cardData.date != ''){
        localStorage.setItem('eventCardData',JSON.stringify(cardData));
        }
    },[cardData]);
    
    useEffect(() =>{
        if(hostDetails && hostDetails.hostName !== '') localStorage.setItem('hostDetails', JSON.stringify(hostDetails));
    },[hostDetails]);

    useEffect(() =>{
        localStorage.setItem('stage',JSON.stringify(stage));
    },[stage]);

    useEffect(() =>{
        const savedInviteId = localStorage.getItem('inviteId');
        if (savedInviteId) setInviteId(savedInviteId)
    },[])

    //async function saving event info and host details into database
    const saveEventToDatabase = async (host) =>{
        if(!host || !selectedCard || !selectedCard.id) return;
        if(!cardData.date) return;
        const eventData = {
            heading: cardData.heading,
            headingColor: cardData.headingColor,
            info: cardData.info,
            infoColor: cardData.infoColor,
            date_time: cardData.date,
            date_time_color: cardData.dateColor,
            address: cardData.address,
            addressColor: cardData.addressColor,
            card_id: selectedCard.id
        };
        const hostData = {
            name : host.hostName,
            email:host.hostEmail,
            phone:host.hostPhone,
            address:host.hostAddress
        };
        
       try{
        const result = await EventApi.saveEventAndHost(eventData,hostData);
        
        setInviteId(result.invite_id);
        localStorage.setItem('inviteId',result.invite_id)
        return result;
       }
       catch(err){
        console.error("error saving",err);
       }
    };

    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
    const generateEventLink = () =>{
        const fullLink = `${BASE_URL}/events/view/${inviteId}`;
        return fullLink;
        };
    

    return (

        <div className="editor-container">
            
            {selectedCard && (
            <div className="Card-container">
               
            <img className="Card-image" src={selectedCard.img_url} alt="Invitation Card"></img>
            <div className="heading-overlay-text">
            <h3 style={{color:cardData.headingColor}}>{cardData.heading}</h3>    
            </div>
            <div className="overlay-text">

                <h4 style={{color:cardData.infoColor}}>{cardData.info}</h4>
                <h4 style={{color:cardData.dateColor}}>{cardData.date}</h4>
                <h4 style={{color:cardData.addressColor}}>{cardData.address}</h4></div>
                
            </div>)}

            {selectedCard && stage === 'editForm' &&
                (<EventForm 
        
                cardData={cardData}
                setCardData={setCardData}
                handleDone={()=>setStage('preview')}
                />)}

            {stage === "preview" && (
                  <div >
                    <button className="Preview-btn"  onClick={() => setStage("editForm")}>Edit Event Info</button>
                    <button className="Preview-btn" onClick={() => setStage("hostForm")}>Add Host Info</button>
                 </div>
                )}

            {stage ==='hostForm' &&
                (<HostDetails 
                handleBack={()=> setStage('editForm')}
                hostDetails={hostDetails}
                setHostDetails={setHostDetails}
                onHostSubmit={async(details)=> {
                    console.log('submitting hostdetails',details)
                setHostDetails(details);
                await saveEventToDatabase(details);
               
                setStage('guest');
                }}
                />)}

            
            {stage === 'guest' && hostDetails &&
                (<div>
                <ShareEmailInvite 
                hostName={hostDetails.hostName}
                hostPhone={hostDetails.hostPhone}
                hostEmail={hostDetails.hostEmail}
                hostAddress={hostDetails.hostAddress}
                eventUrl={generateEventLink()}
                setStage={setStage}
                />
                {/* <ShareWhatsAppInvite
                hostName={hostDetails.hostName}
                hostPhone={hostDetails.hostPhone}
                hostEmail={hostDetails.hostEmail}
                hostAddress={hostDetails.hostAddress}
                eventUrl={generateEventLink()} /> */}
                </div> )}
        </div>
    )
}
export default Card;