import React,{useState,useEffect} from "react";  
import emailjs from "@emailjs/browser";

const ShareEmailInvite = ({hostName, eventUrl,setStage}) =>{
    const [guestEmails,setGuestEmails] = useState(() =>{
        const saved = localStorage.getItem('guestEmails');
        if(saved){
            return JSON.parse(saved);
        }else{
           return [];
        }
    });
    const [newEmail,setNewEmail] = useState('');
    const [isSent,setIsSent] = useState(false);
    
    useEffect(()=>{
        localStorage.setItem('guestEmails',JSON.stringify(guestEmails))
    },[guestEmails]);
    const handleAddEmail = () =>{
        if(newEmail && !guestEmails.includes(newEmail)){
            setGuestEmails([...guestEmails, newEmail]);
            setNewEmail('');
        }
    };

    const removeEmail = (id) =>{
        const updated = [...guestEmails];
        updated.splice(id,1);
        setGuestEmails(updated);
    }

    // send via email
    const sendInvites = async (e) =>{
        e.preventDefault();
        if(guestEmails.length === 0 || !eventUrl) return;
        try{
            await Promise.all(
                guestEmails.map(email => {
                    const templateParams = {
                        to_email: email,
                        host_name:hostName,
                        eventUrl:eventUrl
                    };
                    return emailjs.send(
                    "service_rratg8g",
                    "template_2ho7mvb",
                    templateParams,
                    "QNkPqoBDCmMOzz3R9"
                );
                })
            );
            console.log("✅ All invites sent successfully");
            setIsSent(true);
        
            //  clear localStorage
            localStorage.removeItem('eventCardData');
            localStorage.removeItem('hostDetails');
            localStorage.removeItem('stage');
            localStorage.removeItem('inviteId');
            localStorage.removeItem('selectedCard');
            localStorage.removeItem('guestEmails');
        }
        catch(err){
            console.error('Error sending emails',err);
        }
            localStorage.removeItem('eventCardData');
            localStorage.removeItem('hostDetails');
            localStorage.removeItem('stage');
            localStorage.removeItem('inviteId');
            localStorage.removeItem('selectedCard');
            localStorage.removeItem('guestEmails');
    }
    
 return(
    <div>
    
    <h1>Share your invite</h1>
    <button onClick={()=>setStage('hostForm')}>Edit Invite</button>
    <div className="Form">
    <input
    type="email"
    value={newEmail}
    placeholder="Enter Guest Email"
    onChange={(e)=>setNewEmail(e.target.value)}
    ></input>
    <button onClick={handleAddEmail}>Add </button>
    </div>
   
    
    {guestEmails.length > 0 && (
        <div>
            <h3>List of guests invited</h3>
            {guestEmails.length >0 &&
                <button onClick={sendInvites}>Send To All</button>}
            <ul>
                {guestEmails.map((email,i)=>(
                   
                        <li key={i}> 
                        <span>{email}</span>
                        {/* <button>Edit</button> */}
                        <button onClick={()=>removeEmail(i)}>Remove</button>
                        </li>    
                ))}
            </ul>
        </div>
    )}
    
    </div>
 )
}
export default ShareEmailInvite;