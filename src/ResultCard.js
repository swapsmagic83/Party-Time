import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './Card.css';
import EventApi from "./api";

const ResultCard = () =>{
    const {inviteId} = useParams();
    const [event,setEvent] = useState(null);

    useEffect(()=>{
        const getEvent = async () =>{
            try{
                const res = await EventApi.getEventLinkByInviteId(`events/view/${inviteId}`);
                if(res && res.event){
                    setEvent(res.event);
                }
                
            }
            catch(err){
                console.error("Error finding event",err);
            }
        };
        getEvent();
    },[inviteId]);
    
    if (!event) {
        return <p>Loading event details...</p>;
      }
    return (
        <div className="editor-container">
           
            <div className="Card-container">
                {event.img_url && <img className="Card-image" 
                        src={event.img_url} 
                        alt="Invitation Card" />}
                <div className="heading-overlay-text">
                <h3 style={{color: event.heading_color}}>{event.heading}</h3>    
                </div>
                <div className="overlay-text">
   
                      <h4 style={{color:event.info_color}}>{event.info}</h4>
                    <h4 style={{color:event.date_time_color}}>{event.date_time}</h4>
                   <h4 style={{color:event.address_color}}>{event.address}</h4></div>
            </div>
            <div>
                <div>
                    <h4>You are invited by: {event.name}</h4>
                </div>
                <div>
                    <h2>{event.info}</h2>
                </div>
                <div>
                    <p>
                        <b>Date:</b> {event.date_time}
                    </p>
                </div>
                <div>
                <p>
                  <b>Location:</b> {event.address}
                </p>
                </div>
            </div>
        </div> 
    
    )
}
export default ResultCard;