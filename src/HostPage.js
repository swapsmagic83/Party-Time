import React,{useState} from "react";
import EventApi from "./api";


const HostPage = () =>{
const [email,setEmail] = useState('');
const [events,setEvents] = useState([]);
console.log('events in hostpage', events);
const handleFindEvents = async (e) =>{
    e.preventDefault();
    try{
        const result = await EventApi.findEventsByEmail(`events/${email}`);
        setEvents(result.events);
    }
    catch(err){
        console.error('error finding events',err);
    }
}

    return (
        <div>
        <form onSubmit={handleFindEvents}>
          <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          >
          </input>
          <button>Find </button>
        </form>
        {events.length > 0 && (
            <ul>
                {events.map((event) => (
                    <li>
                        <a
                        href={`/events/view/${event.invite_id}`}>{event.date_time}</a>
                        
                    </li>
                ))}
            </ul>

        )}
        </div>
    )
}
export default HostPage;