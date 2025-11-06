import React, { useState, useEffect} from "react";
import './Card.css'
import HostDetails from "./HostDetails";
import ShareEmailInvite from "./ShareEmailInvite";
import EventForm from "./EventForm";
// import ShareWhatsAppInvite from "./ShareWhatsAppInvite";
import EventApi from "./api";

const Card = ({selectedCard,setInviteId,inviteId}) =>{
//    console.log('selectedCard in card.js',selectedCard)

console.log('in card.js inviteId',inviteId)
console.log('entire localstorage',localStorage)

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
        // console.log('stage ',saveStage)
    });
    
    console.log('stage outside ',stage)
    console.log('outside host',hostDetails)
    console.log('carddata',cardData)
    //restore saved data
    useEffect(()=>{
        const saveForm = localStorage.getItem('eventCardData');
        console.log('localstorage getting carddata', saveForm)
        const saveHost = localStorage.getItem('hostDetails');
        

        if(saveForm) setCardData(JSON.parse(saveForm));
        console.log('resoring cardata',JSON.parse(saveForm))
        if(saveHost && saveHost != 'null') setHostDetails(JSON.parse(saveHost));
       
        
        console.log('savehost in useeffect',saveHost)
    },[]);

    
    useEffect(()=>{
        if(cardData.date != ''){
        localStorage.setItem('eventCardData',JSON.stringify(cardData));
        console.log('localstorage setting carddata', cardData)}
    },[cardData]);
    
    useEffect(() =>{
        if(hostDetails && hostDetails.hostName !== '') localStorage.setItem('hostDetails', JSON.stringify(hostDetails));
        console.log('seeting hostdetails',hostDetails)
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
        console.log('this is result in function saveeventtodatabase',result)
        setInviteId(result.invite_id);
        localStorage.setItem('inviteId',result.invite_id)

        //clear localStorage after saving into database
        // localStorage.removeItem('eventCardData');
        // localStorage.removeItem('hostDetails');
        // localStorage.removeItem('stage');

        return result;
       }
       catch(err){
        console.error("error saving",err);
       }
    };

    const generateEventLink = () =>{
        const fullLink = `http://localhost:3000/events/view/${inviteId}`;
        console.log('full link in generateEventLink', fullLink)  
        // localStorage.removeItem('eventCardData');
        // localStorage.removeItem('hostDetails');
        // localStorage.removeItem('stage');
        // localStorage.removeItem('selectedCard')
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
                // selectedCard={selectedCard}
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